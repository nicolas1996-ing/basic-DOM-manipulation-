console.log("hello world");

/* read DOM elements */
const h1 = document.querySelector("h1");
const p0 = document.querySelector("p");
const p1 = document.getElementsByClassName("paragraph");
const p2 = document.querySelector("#pid");
const ps = document.querySelectorAll("p");
const input = document.querySelector("input");
const divImg = document.querySelector(".img");

console.log({
  h1,
  p0,
  p1,
  p2,
  ps,
  input,
});

console.log(input.value);

/* write DOM ... */
h1.innerText = "hello world I";
h1.innerHTML = "hello world II";
h1.innerHTML = `hello world <br> III`;
h1.innerHTML = `Calculate...`;

/* attriubutes */
console.log(h1.getAttribute("attribute"));
console.log(h1.getAttribute("class"));
h1.setAttribute("class", "class-example-ii");
console.log(h1.getAttribute("class"));

/* class */
h1.classList.add("class-example-iv");
h1.classList.remove("class-example-ii");
// h1.classList.toogle('')
console.log(
  "h1 has class: class-example-ii",
  h1.classList.contains("class-example-ii")
);
console.log(
  "h1 has class: class-example-iv",
  h1.classList.contains("class-example-iv")
);

/* input */
input.value = "josé nicolás";
input.placeholder = "type something here ...";

/* document.createElement */

/* 
const imgExample = document.createElement("img");
imgExample.setAttribute(
  "src",
  "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/5486.png"
);
divImg.append(imgExample);
*/



