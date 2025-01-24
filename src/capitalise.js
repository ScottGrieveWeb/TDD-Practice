export const capitalise = function(str){
    let arr = str.split('');
    let firstLetter = arr[0].toUpperCase();
    arr[0] = firstLetter;

    return arr.join('');
}
