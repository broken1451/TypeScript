
export let mensajes:string[] = ['El texto es muy corto', 'El texto es muy argo ']

export function obtenerErr(numeroErr:number):string {
    if (numeroErr > mensajes.length) {
        return 'el codigo Error no existe'
    }
    return mensajes[numeroErr];
}