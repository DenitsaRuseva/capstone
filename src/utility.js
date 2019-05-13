export const removeArrayElement = (array, index) => {
    return array.slice(0, index).concat(array.slice(index + 1)); 
};

export const addElementToArray = (array, element) => {
    return [...array, element];
};

export const updateArrayElement = (array, index, updatedElement) => {
    let updatedArray = [...array];
    updatedArray[index] = updatedElement;
    return updatedArray;
};

export const sumArrayElements = (array) => {
    const sum = array.reduce((partial_sum, element) => {
       return partial_sum + element;
    },0); 
    return sum;
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const flattenArray = (arr) => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flattenArray(b) : b), []
);

 export const deepCopy = (obj) => {
    let target = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      let v = obj[key];
      if (v) {
        if (typeof v === "object") {
          target[key] = deepCopy(v);
        } else {
          target[key] = v;
        }
      } else {
        target[key] = v;
      }
    }
    return target;
};

