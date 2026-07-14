let data = [2, 1, 9, 3, 4, 7, 5];

for(let i = 0; i < data.length; i++) {
    for(let j = i; j < data.length; j++) {
        if(data[i] > data[j]) {
            [data[i], data[j]] = [data[j], data[i]]
        }
    }
}

console.log(data);