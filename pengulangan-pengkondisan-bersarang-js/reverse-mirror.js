let str = "";

for (let i = 10; i >= 0; i--) {
  for (j = i; j > 111; j--) {
    str += `*`;
  }
  str += `\n`;
}

console.log(str);
