class Tempo{
    constructor(segundos){
        this.secs = segundos
        this.horas = segundos > 3600? Math.trunc(segundos / 3600) : 0
        this.minutos = this.secs / 3600 - this.horas < 1? Math.trunc((this.secs/3600 - this.horas) * 60) : 0
        this.segundos = Math.round((((this.secs / 3600 - this.horas) * 60) - this.minutos) * 60)
        this.objetoTempo = {
            "horas": this.horas,
            "minutos": this.minutos,
            "segundos": this.segundos
        }
    }
    
   
}
//Exemplo:
const a = new Tempo(5435)
console.log(a.objetoTempo)
//return  { horas: 1, minutos: 30, segundos: 35 }