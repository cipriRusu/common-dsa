let data = [2, 1, 9, 3, 4, 7, 5];

const mergeSort = input => {
    if(input.length <= 1) return input;
    let mid = Math.floor(input.length / 2);

    let leftSide = mergeSort(input.slice(0, mid));
    let rightSide = mergeSort(input.slice(mid));

    return merger(leftSide, rightSide);
}

const merger = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergeSort(data))