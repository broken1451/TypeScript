import {Component, Inject, InjectionToken, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Telefono, TelefonoTipo} from '../../../../domain/FullCliente';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {ApiService} from '../../../../services/api.service';
import {TelefonoCodigoPais} from '../../../../domain/TelefonoCodigoPais';
import {TelefonoCodigoUso} from '../../../../domain/TelefonoCodigoUso';
import {MdlDialogReference, MdlSnackbarService} from '@angular-mdl/core';
import {Pais} from '../../../../domain/Pais';

export const TELEFONO = new InjectionToken<Telefono>('telefono');
export const TELEFONO_TIPO = new InjectionToken<TelefonoTipo>('tipo telefono');

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.component.html',
  styleUrls: ['./telefonos.component.scss']
})
export class TelefonosComponent implements OnInit {

  form: FormGroup;
  pais: FormControl;
  codigoPais: FormControl;
  numero: FormControl;
  uso: FormControl;

  telefono: Telefono;
  telefonoOld: FormControl;

  paises: Pais[];
  codigosPais: TelefonoCodigoPais[];
  codigosUso: TelefonoCodigoUso[];

  tipo: TelefonoTipo;
  tipoTexto: string;
  public respServicio: any;// nuevo
  public telefonoAactualizar:string[] | number[] | any[];
  public arrtelefonos:string[] | number[] | any[];
  
  public termino: string; // nuevo
  
   @ViewChild('btnActualizar') btnActualizar: ElementRef;
  

  waiting: boolean;

  constructor(private dialog: MdlDialogReference, private user: UserService, private api: ApiService,
              private mdlSnackbarService: MdlSnackbarService,
              @Inject(TELEFONO) telefono: Telefono,
              @Inject(TELEFONO_TIPO) tipo: TelefonoTipo) {
    this.pais = new FormControl('', Validators.required);
    this.codigoPais = new FormControl('', Validators.required);
    this.numero = new FormControl('', [
         // Validators.min(10000000),
        // Validators.max(999999999999999),
        Validators.pattern('[0-9]*'),
        Validators.min(9),
        Validators.maxLength(9),
        Validators.required  //nueva
    ]);
    this.uso = new FormControl('', Validators.required);

    this.form = new FormGroup({
      pais: this.pais,
      codigoPais: this.codigoPais,
      numero: this.numero,
      uso: this.uso,
    });

    this.telefono = telefono;
    this.telefonoOld = new FormControl('');
    this.tipo = tipo;
  }

  ngOnInit() { 
    // this.btnActualizar.nativeElement.disabled = true;

    this.waiting = true;
    const p1 = this.api.paises().then(
      value => {
        this.paises = value;         
      }
    );
    const p2 = this.api.telefonoUsoCodigo().then(
      value =>{
         this.codigosUso = value;
        }
    );

    Promise.all([p1, p2]).then(
      () => {
        this.waiting = false;
        // nunevo
        this.form.reset();
        this.pais.reset();
        this.codigoPais.reset();
        this.tipoTexto = Telefono.tipoTexto(this.tipo);

        if (this.telefono) {
          this.numero.setValue(this.telefono.numero);
          this.telefonoOld.setValue( this.telefono.numero);// nueva
          const idCodigoPais = String(this.telefono.codigoPais);
          const idPrefijoPais = String(this.telefono.codTelfPais);
          this.pais.setValue(idCodigoPais);
          this.actualizarCodigosPais(idPrefijoPais);
          this.uso.setValue(this.telefono.codUsoTelf);
        }

    // nuevo validaciones
        // if ( this.numero.value > 9  ||  this.pais.value == '997'){
        // if ( this.pais.value == '997'&& this.termino.toString().length > 9){ //nuevo
        //     this.numero = new FormControl('', [
        //           Validators.pattern('[0-9]*'),
        //           Validators.maxLength(9),
        //           Validators.required 
        //     ]);
        //     this.numero.setValue(this.telefono.numero);
        //     this.telefonoOld.setValue( this.telefono.numero)//nueva
        //     } else {
        //       this.numero = new FormControl('', [
        //         Validators.pattern('[0-9]*'),
        //         // Validators.maxLength(999999999999999),
        //         Validators.maxLength(13),
        //         Validators.required 
        //       ]);
        //       this.numero.setValue(this.telefono.numero);
        //       this.telefonoOld.setValue(this.telefono.numero)// nueva
        //       this.btnActualizar.nativeElement.disabled = false; // nuevo  
        //   }
      // nuevo validaciones  
      
       
            
       this.user.telefonoBuscarPorCliente().then((telefonosUser: any) => {
         this.telefonoAactualizar = telefonosUser.telefono;
       
         for (let i = 0; i <= this.telefonoAactualizar.length - 1; i++) {
            let element = this.telefonoAactualizar[i];
            console.log(element);
            // console.log('element.codigoTelefono ', element.codigoTelefono);
            // console.log('element.numero ', element.numero);
            // arrtelefonos.push(element);
            // console.log('this.numero.value: ', this.numero.value);
            // console.log('this.numero == element.numero: ', this.numero.value == element.numero);
            // console.log('element.codigoTelefono ', element.codigoTelefono);
            // console.log('element.numero ', element.numero);
            
          }
          // console.log('this.telefonoAactualizar ', this.telefonoAactualizar);
       });
        // console.log('this.numero.value: ', this.numero.value);
      
      });
      
  }

  actualizarCodigosPais(codTelfPais?: string): void {
    this.waiting = true;
    this.api.telefonoPaisCodigos(this.pais.value).then(
      value => {
        this.codigosPais = value;
        if (codTelfPais) {
          this.codigoPais.setValue(codTelfPais);
        } else if (this.codigosPais && this.codigosPais.length > 0) {
          this.codigoPais.setValue(this.codigosPais[0].descripcion);
        }
        this.waiting = false;
      },
      err => {
        console.log(err);
        this.waiting = false;
      }
    );
  }

  buscarIdCodigoPais(descripcion: string): number | undefined {
    for (const cp of this.codigosPais) {
      if (cp.descripcion === descripcion) {
        return cp.id;
      }
    }
    return undefined;
  }

  actualizar(): void {
    this.waiting = true;
    const idPais = this.pais.value;
    // console.log('this.numero.value: ', this.numero.value);
    // console.log('this.telefonoAactualizar ', this.telefonoAactualizar);  
    // this.telefonoAactualizar.forEach((data) => {
    //     console.log('data en foreach: ', data);
    // })

    if(this.numero.value == this.telefonoOld.value){
       
         
             if(idPais == '997' && this.termino.toString().length > 9  ) { // && this.termino.toString().length < 9
                  this.numero = new FormControl('', [
                        Validators.pattern('[0-9]*'),
                        Validators.maxLength(9),
                        Validators.required 
                  ]);
                  this.mdlSnackbarService.showToast('El telefono para chile es de largo 9');
                  this.dialog.hide();
                  return;
             }  else { // fin if 
   
   
      
                        this.user.telefonoActualizar(this.telefono, this.tipo, +idPais, +this.codigoPais.value, this.numero.value, this.uso.value, this.telefono.codigoTelefono).then(
                          (value:any) => {
                            this.dialog.hide();
                            this.waiting = false;
                            // this.mdlSnackbarService.showToast('Teléfono ' + this.tipoTexto + ' actualizado')
                            // this.mdlSnackbarService.showToast('Teléfono actualizado');
                            this.mdlSnackbarService.showToast(this.api.respServicio);
                          },
                          (err) => {
                            console.log(err);
                            this.waiting = false;
                            this.mdlSnackbarService.showToast('Ocurrió un error al crear/actualizar el teléfono');
                            // this.mdlSnackbarService.showToast(this.api.respServicio);
                          });
                          
                    // for (let i = 0; i <= this.telefonoAactualizar.length; i++) {
                    //     let element = this.telefonoAactualizar[i];
                    //     console.log(element);
                    //     console.log('this.numero == element.numero: ', this.numero.value == element.numero);
                    //     // console.log('this.numero == element.numero: ', Number(this.numero) == element.numero);
                    //     // console.log('element.codigoTelefono ', element.codigoTelefono);
                    //     // console.log('element.numero ', element.numero);
                    // }
          
             } //fin else nuevo
             
          
      } else {
        
          
            if(idPais == '997' && this.termino.toString().length > 9) {
                this.numero = new FormControl('', [
                     Validators.pattern('[0-9]*'),
                     Validators.maxLength(9),
                     Validators.required 
                 ]);
                  this.mdlSnackbarService.showToast('El telefono para chile es de largo 9');
                  this.dialog.hide();
                  return;
              } else {
                // console.log('estoy en el else principal antes de entrar a metodo crear ');
                
                // prueba deun if dentro del else principal antes de entrar al metodo crear
                  // if (this.telefono.codigoTelefono) { // nuevo
                  //     console.log('estoy en el if del else principal antes de entrar a metodo crear ');
                  //     console.log('this.telefono.codigoTelefono ', this.telefono.codigoTelefono);
                  //       this.user.telefonoActualizar(this.telefono, this.tipo, +idPais, +this.codigoPais.value, this.numero.value, this.uso.value, this.telefono.codigoTelefono).then(
                  //         (value:any) => {
                  //           this.dialog.hide();
                  //           this.waiting = false;
                  //           // this.mdlSnackbarService.showToast('Teléfono ' + this.tipoTexto + ' actualizado')
                  //           // this.mdlSnackbarService.showToast('Teléfono actualizado');
                  //           this.mdlSnackbarService.showToast(this.api.respServicio);
                  //         },
                  //         (err) => {
                  //           console.log(err);
                  //           this.waiting = false;
                  //           this.mdlSnackbarService.showToast('Ocurrió un error al crear/actualizar el teléfono');
                  //           // this.mdlSnackbarService.showToast(this.api.respServicio);
                  //         });
                  //     // this.dialog.hide();
                  //     return;
                  // }
                
                  console.log('this.numero.value: ', this.numero.value);
                  console.log('this.telefonoAactualizar ', this.telefonoAactualizar);  
                            this.user.crearTelefono(this.telefono,this.tipo,+this.codigoPais.value,+idPais, this.numero.value,this.uso.value).then(
                                  (value) => {
                                    console.log('value en crear telefono: ', value);
                                        this.dialog.hide();
                                        this.waiting = false;
                                        // this.mdlSnackbarService.showToast('Teléfono ' + this.tipoTexto + ' actualizado')
                                        // this.mdlSnackbarService.showToast('Teléfono actualizado');
                                        this.mdlSnackbarService.showToast(this.api.respServicio);
                                },(err) => {
                                    console.log(err);
                                    console.log('this.telefono: ', this.telefono);
                                    console.log('this.uso.value ', this.uso.value);
                                    this.waiting = false;
                                    // this.mdlSnackbarService.showToast(`${err[0].mensajeResp}`);
                                    
                                if(err[0].codigoResp == "-1"){
                                      
                                      var codigoTLF=0;
                                       for (let i = 0; i <= this.telefonoAactualizar.length; i++) {
                                        let element = this.telefonoAactualizar[i];
                                        // console.log('this.numero == element.numero: ', this.numero.value == element.numero);
                                        // console.log(element);
                                          if (this.numero.value == element.numero) {
                                             console.log('estoy en el if de this.numero.value == element.numero')
                                            console.log('element: ', element);
                                            console.log('element.numero: ', element.numero);
                                            console.log('this.numero == element.numero: ', this.numero.value == element.numero);
                                            console.log('element.codigoTelefono en error en el if igual: ', element.codigoTelefono);
                                            codigoTLF=element.codigoTelefono;
                                            console.log('codigoTLF en for : ', codigoTLF);
                                            break;
                                          }
                                          
                                          if(codigoTLF != 0){
                                            // llamo a la api y me salgo
                                            console.log('estoy en el if de codigoTLF != 0')
                                             this.user.telefonoActualizar(this.telefono, this.tipo, +idPais, +this.codigoPais.value, this.numero.value, 4, codigoTLF).then(
                                                  (value:any) => {
                                                    
                                                    // nuevo metodo para poner el anterior que existe como otro
                                                    this.user.telefonoActualizar(this.telefono, this.tipo, +idPais, +this.codigoPais.value, this.numero.value, 5, this.telefono.codigoTelefono).then(
                                                        (value:any) => {
                                                          this.dialog.hide();
                                                          this.waiting = false;
                                                          // this.mdlSnackbarService.showToast('Teléfono ' + this.tipoTexto + ' actualizado')
                                                          // this.mdlSnackbarService.showToast('Teléfono actualizado');
                                                          this.mdlSnackbarService.showToast(this.api.respServicio);
                                                        },
                                                        (err) => {
                                                          console.log(err);
                                                          this.waiting = false;
                                                          this.mdlSnackbarService.showToast('Ocurrió un error al crear/actualizar el teléfono');
                                                          // this.mdlSnackbarService.showToast(this.api.respServicio);
                                                        });
                                                    
                                                    
                                                    this.dialog.hide();
                                                    this.waiting = false;
                                                    // this.mdlSnackbarService.showToast('Teléfono ' + this.tipoTexto + ' actualizado')
                                                    // this.mdlSnackbarService.showToast('Teléfono actualizado');
                                                    this.mdlSnackbarService.showToast(this.api.respServicio);
                                                  },
                                                  (err) => {
                                                    console.log(err);
                                                    this.waiting = false;
                                                    this.mdlSnackbarService.showToast('Ocurrió un error al crear/actualizar el teléfono');
                                                    // this.mdlSnackbarService.showToast(this.api.respServicio);
                                                  });
                                            return;
                                          }
                                       
                                        // console.log('this.numero == element.numero: ', Number(this.numero) == element.numero);
                                        // console.log('element.codigoTelefono ', element.codigoTelefono);
                                        // console.log('element.numero ', element.numero);
                                       }
                                  console.log('codigoTLF fuera de  for : ', codigoTLF);
                              }
                                    // console.log('this.telefono.codigoTelefono ', this.telefono.codigoTelefono);
                                    // console.log("err crear telefono: ", err);
                                    // console.log("err.mensajeResp crear telefono: ", err[0].mensajeResp);
                                    // this.mdlSnackbarService.showToast('Ocurrió un error al crear/actualizar el teléfono');
                                    // this.mdlSnackbarService.showToast(this.api.respServicio);
                                }); // end promesa
                                  
                               
                
              }
          
      } //end else
      
       
  
  } // fin metodo actualizar   

  closeDialog() {
    this.dialog.hide();
  }
}
