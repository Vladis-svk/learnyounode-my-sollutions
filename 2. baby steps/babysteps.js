var array = process.argv,
    n_array = array.map((number) => parseInt(number))
    .filter((number) => number > 0)
    .reduce((sum, num) => sum+num);

console.log(n_array);
