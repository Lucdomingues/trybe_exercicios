const acordar = () => console.log('Acordado!!');


const tomar = () => console.log('Bora tomar café!!');


const dormir = () => console.log('Partiu dormir!!');


const doingThings = (callback, callback2, callback3) => {
    return callback(), callback2(), callback3();
}

doingThings(acordar, tomar, dormir);