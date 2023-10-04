// crear una array y que ese array de strings me diga si tiene algun elemento duplicado en typescript 

const isArrayElementDuplicated = (arrayElements: String[]): boolean => {
    for (let i = 0; i < arrayElements.length; i++) {
        for (let j = 0; j < arrayElements.length; j++){
            if(arrayElements[i] === arrayElements[j+1]){
                return true
            }
        }
    }
    return false
};



const animales = ['perro', 'gato', 'ardilla', 'pez']
isArrayElementDuplicated(animales)
