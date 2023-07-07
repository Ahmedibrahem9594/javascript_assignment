
console.log(performance.mark(0))

for (let i =0; i <= 1000 ; i++) {
    console.log(i);
}

console.log(`Loop Took ${performance.now()} Milliseconds`)




// Needed Output

"Loop Took 1921 Milliseconds."