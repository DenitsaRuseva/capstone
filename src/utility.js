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

