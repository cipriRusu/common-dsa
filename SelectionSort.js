let data = [2, 1, 9, 3, 4, 7, 5];

for(let i = 0; i < data.length; i++) {
    let min = i;

    for(let j = i; j < data.length; j++) {
        if(data[j] < data[min]) {
            min = j;
        }
    }

    [data[i], data[min]] = [data[min], data[i]];
}

console.log(data);