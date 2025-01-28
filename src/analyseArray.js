export const analyseArray = function(arr){
    let sortedArr = bubbleSort(arr);

    return {
        average: null,
        min: sortedArr[0],
        max: null,
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