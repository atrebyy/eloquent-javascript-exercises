let size = 8;
let board = "";
let flag = true;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (flag) board += " ";
    else board += "#";
    flag = !flag;
  }
  board += "\n";
  flag = !flag;
}

console.log(board);
