//em um array de iguais retorna o unico diferente.
function findUniq(lista) {
  
   function arrUnico(value, index, self){
       const unicos = self.indexOf(value) === index;
     return unicos
   }
    const valores = lista.filter(arrUnico)
    const x = valores[0]
    const y = valores[1]
    
   for(let i = 0; i < lista.length; i++){
     if(lista[i] != x && lista[2+i] != x){
       return x
     } else if(lista[i] != y  && lista[2+i] != y)
       return y
   }
    
   }