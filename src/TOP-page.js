/*
Corban Pendrak
Purpose: Create The Odin Proect page content
*/

// Import CSS
import "./TOP-page.css"

export default function createPage(container) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 800 100");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

    const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgText.setAttribute("y", "50%");
    svgText.setAttribute("dominant-baseline", "middle");
    svg.appendChild(svgText);

    // SVG text animation
    const svgTexts = ["The Odin Project", "By Corban Pendrak"];
    let index = 0;
    let alternating = true;
    svgText.textContent = svgTexts[index];
    svgText.addEventListener("animationiteration", () => {
        alternating = !alternating;
        if (alternating) {
           return;
        }

    	svgText.textContent = svgTexts[index];
    	index = (index + 1) % svgTexts.length;
    });
    container.appendChild(svg);

    // The texts and headers to be displayed on the tabbed page
    const texts = [
        "The Odin Project is a free and open source curriculum for learning web development.",
        "The Odin Project is a project-based curriculum that is designed to help you learn web development by building real projects. The curriculum is divided into different sections that cover different aspects of web development. Each section has a set of projects that you can work on to learn web development.",
        "The Odin Project is a self-paced curriculum that is designed to help you learn web development at your own pace. The curriculum is designed to be flexible and you can work on it whenever you have time.",
        "The Odin Project is designed to be beginner-friendly and you don't need any prior experience to start learning web development with The Odin Project. The curriculum is designed to be easy to follow and you can start learning web development even if you are a complete beginner.",
        "The Odin Project offers different paths that you can follow to learn web development. Each path is designed to help you learn web development by building real projects. The paths are designed to be flexible and you can choose the path that best suits your learning style."
    ];
    const headers = ["Project-Based Curriculum", "Self-Paced", "Beginner-Friendly", "Available Paths"];

    // Adding the texts and headers to the container
    for (let i = 0; i < texts.length; i++) {
        const text = document.createElement("p");
        text.textContent = texts[i];
        container.appendChild(text);

        if (i < headers.length) {
            const header = document.createElement("h2");
            header.textContent = headers[i];
            container.appendChild(header);
        }
    }


    // Change primary colors
    const root = document.documentElement;
    root.style.setProperty("--color-primary", "#d6b400");
    root.style.setProperty("--color-secondary", "#efe9b3");
}