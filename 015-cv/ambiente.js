let num = [1, 5, 3, 2];

num.length;
num.sort();
num.push(4);
console.log(`${num.length}`);

for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posicao ${pos} possui valor ${num[pos]}`);
}

for (let pos in num) {
  console.log(num[pos]);
}
let eu = num.indexOf(3);
console.log(`O valor 3 esta na posicao ${eu}`);
