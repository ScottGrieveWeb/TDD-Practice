export const reverseString = function(str){
    let arr = str.split('');
    let reverseArr = [];

    for (let i = 0; i < arr.length; i++){
        reverseArr.unshift(arr[i]);
    }

    return reverseArr.join('');
}