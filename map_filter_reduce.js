const list = [3, 4, 5, 6, 5, 3, 2, 1, 1, 6];

//set

const set = [...new Set(list)];

console.log(set);

//filter
const fil = list.filter(x => x == 3);

console.log(fil);

//map

const maps = list.map((value, index, array) => {
    //array 원본배열
    //index 현재 index
    return value * 2;
});

console.log(maps);

const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = nested.reduce((acc, it) => [...acc, ...it], []);
//other way
const flat = [].concat.apply([], nested);