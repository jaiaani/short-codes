// Conta a ocorrencia dos caracteres de uma string
// Ex: string = "aabbcccdd"
// return a: 2, b:2, c:3, d:2


function contaOcorrencia(str, obj){
    str.split('').forEach(x=>obj[x] = obj[x]+1 || 1)
    console.log(obj)
}
contaOcorrencia("aaabccdfe", {})




