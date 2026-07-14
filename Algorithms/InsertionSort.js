let data = [2, 1, 9, 3, 4, 7, 5];

for(let i = 0; i < data.length; i++) {
    for(let j = i; j > 0; j--) {
        if(data[j] < data[j - 1]) {
            [data[j], data[j - 1]] = [data[j - 1], data[j]];
        }
    }
}

console.log(data);