const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"
];

let genDiv1 = document.getElementById("gen-div1")
let genDiv2 = document.getElementById("gen-div2")
let gen1 = ""
let gen2 = ""


function generatePass() {
  let randomNum = Math.floor(Math.random() * characters.length)
  return characters[randomNum]
}

function passwords() {
	let gen1 = ""
	for (let i = 1; i < 16; i++) {
  gen1 += generatePass()
}
 genDiv1.textContent = gen1
 
 let gen2 = ""
for (let i = 1; i < 16; i++) {
  gen2 += generatePass()
}
genDiv2.textContent = gen2
}