// Utilize o reduce para transformar uma matriz em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(p, i) {
    // const arrayInside  = i.reduce((p2, i2) => p.push(i2), 0);
    return p.concat(i);
  }

  const newArray = arrays.reduce(flatten, []);
  console.log(newArray);
