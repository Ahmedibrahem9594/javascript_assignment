let theNumber = 100020003000;
console.log(Number(Array.from(new Set([...theNumber.toString()])).sort().splice(+[]).join('')))