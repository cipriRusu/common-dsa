let data = [2, 1, 9, 3, 4, 7, 5];

//V1 -> Inefficient but simple version with partitions as new arrays

let quickSort = input => {
    if(input.length <= 1) return input;

    let pivot = input[0];
    let leftSide = [];
    let rightSide = [];

    for(let i = 1; i < input.length; i++) {
        if(input[i] < pivot) {
            leftSide.push(input[i]);
        } else {
            rightSide.push(input[i]);
        }
    }

    return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}

//V2 -> In place version with first element as pivot

let quickSort = input => {
    if(input.length <= 1) return input;
    let pivot = input[0];
    let i = 0;
    let j = 0;

    while(j < input.length) {
        if(input[j] < pivot) {
            [input[i], input[j]] = [input[j], input[i]];
            i++;
        }

        j++;
    }

    return [...quickSort(input.slice(0, i)), input[i], ...quickSort(input.slice(i+1))]
}

//V3 -> In place version with last element as pivot

let quickSort = input => {
    if (input.length <= 1) return input;
    let pivot = input[input.length - 1];
    let i = 0;
    let j = 0;

    while(j < input.length) {
        if(input[j] < pivot) {
            [input[i], input[j]] = [input[j], input[i]];
            i++;
        }

        j++;
    }

    [input[i], input[input.length-1]] = [input[input.length-1], input[i]];

    return [...quickSort(input.slice(0, i)), input[i], ...quickSort(input.slice(i+1))];
}

//V4 -> In place version with middle element as pivot

let quickSort = input => {
    if (input.length <= 1) return input;
    let pivot = input[Math.floor(input.length / 2)];

    let i = 0;
    let j = input.length - 1;

    while(i < j) {
        while(input[i] < pivot) {
            i++;
        }

        while(input[j] > pivot) {
            j--;
        }

        [input[i], input[j]] = [input[j], input[i]];
    }

    return [...quickSort(input.slice(0, i)), input[i], ...quickSort(input.slice(i + 1))];
}