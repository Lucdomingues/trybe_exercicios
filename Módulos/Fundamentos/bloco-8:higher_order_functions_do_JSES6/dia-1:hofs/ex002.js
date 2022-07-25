const contrato1 = (nome) => {
    const pessoa1 = {
        nome: nome,
        email: `${nome.replace(" ", "_")}@trybe.com`
    }
    return pessoa1;
}

const contrato2 = (nome) => {
    const pessoa2 = {
        nome: nome,
        email: `${nome.replace(" ", "_")}@trybe.com`
    }
    return pessoa2;
}

const contrato3 = (nome) => {
    const pessoa3 = {
        nome: nome,
        email: `${nome.replace(" ", "_")}@trybe.com`
    }
    return pessoa3;
}

const newEmployees = (nome, callback) => {
    const employees = {
        id1: callback(nome), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback2(nome), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback3(nome), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

newEmployees('Lucas Camargo', contrato1);
console.log(newEmployees('Lucas Camargo', contrato1));
newEmployees('Laura perf', contrato2);
console.log(newEmployees('Laura perf', contrato2));