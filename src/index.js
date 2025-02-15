import { greeting } from './greeting.js';
import "./index.css"

console.log(greeting);
//document.getElementById("content").innerText = greeting;

const texts = ["Tabbed Pages", "By Corban Pendrak"];
let index = 0;
let alternating = true;
const textElement = document.getElementsByClassName("animated-text")[0];
textElement.textContent = texts[index];

function changeText() {
    if (alternating) {
        alternating = !alternating;
        return;
    }

	textElement.textContent = texts[index];
	index = (index + 1) % texts.length;
    alternating = !alternating;
}

textElement.addEventListener("animationiteration", changeText);