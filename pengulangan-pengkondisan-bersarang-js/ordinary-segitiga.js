let str = "";

for (let i = 0; i < 10; i++) {
  for (j = 0; j <= i; j++) {
    str += `*`;
  }
  str += `\n`;
}

console.log(str);
