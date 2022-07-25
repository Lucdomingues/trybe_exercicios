function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    // const verificar = () => {
    //     if (value1 === '' || value2 === '') {
    //         throw new Error('Digite apenas números!!');
    //     }


    //     try {
    //         const result = Number(value1) + Number(value2);
    //         const resultado = document.getElementById('result').innerHTML = `Resultado: ${result}`;
    //         document.getElementById('value1').value = '';
    //         document.getElementById('value2').value = '';
    //         return resultado;
    //     } catch (error) {
    //         return error.message;
    //     }

    // }

}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}