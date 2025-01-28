export const analyseArray = function(arr){
    let sortedArr = bubbleSort(arr);
    
    return {
        average: average(arr),
        min: sortedArr[0],
        max: sortedArr[sortedArr.length - 1],
        length: arr.length
    };
}

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {  
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

const average = array => array.reduce((a, b) => a + b) / array.length;