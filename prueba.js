// crear una array y que ese array de strings me diga si tiene algun elemento duplicado en typescript 
var isArrayElementDuplicated = function (arrayElements) {
    arrayElements.forEach(function (element) {
        console.log(element);
    });
    return false;
};
var animales = ['perro', 'gato', 'ardilla', 'pez'];
isArrayElementDuplicated(animales);
