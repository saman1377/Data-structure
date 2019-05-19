function linearSearch(array, toFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toFind) return i;
    }
    return -1;
}

// console.time('a');

// a(); // Whatever is timed goes between the two "console.time"

// console.timeEnd('a');