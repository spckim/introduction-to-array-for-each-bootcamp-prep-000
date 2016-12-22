function changeCompletely(element, index, array){
  array[index] = (Math.random()+1);
}

var array = [1, 2, 3];

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

doToElementsInArray(array, changeCompletely);
console.log(array);
