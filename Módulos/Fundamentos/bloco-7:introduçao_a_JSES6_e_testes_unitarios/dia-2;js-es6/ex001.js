const obj = {}
let newKey = 'lastName';
let lastName = 'Domingues';


const mesclar = (objeto, chave, valor) => {
    objeto[chave] = valor;
    return objeto;
}

console.log(mesclar(obj, newKey, lastName));

