const btn = document.getElementById("btn");
const text = document.querySelector("h1");
const body = document.querySelector("body");

const col = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const random = () => {
  let colorName = '#'
  for(let i = 0; i < 6 ; i++) {
    let result = Math.trunc(Math.random() * col.length)
    colorName += col[result];
  }
  return colorName;
}

const refresh = () => {
  const color1 = random();
  body.style.backgroundColor = color1;
  text.textContent = `BACKGROUND-COLOR: ${color1}`
}

btn.addEventListener('click',refresh)