/*
Created by Corban Pendrak on 15Feb25
Purpose: Create webpack information page content
*/

// Import CSS
import "./webpack-page.css"

export default function createPage(container) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 800 100");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

    const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgText.setAttribute("y", "50%");
    svgText.setAttribute("dominant-baseline", "middle");
    svg.appendChild(svgText);

    // SVG text animation
    const svgTexts = ["Webpack", "By Corban Pendrak"];
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
    const texts = ["Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.",
        "Webpack takes modules with dependencies and generates static assets representing those modules.",
        "Webpack uses a dependency graph to map every module your project needs and generates one or more bundles.",
        "Webpack allows you to split your code into various bundles which can then be loaded on demand or in parallel.",
        "Webpack enables you to preprocess files as you import them. This allows you to bundle any static resource way beyond JavaScript.",
        "Webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface. This makes webpack very flexible.",
        "Webpack can be used to manage assets like images, fonts, and stylesheets.",
        "Webpack dev server comes with Hot Module Replacement which exchanges, adds, or removes modules while an application is running without a page reload."
    ];
    const headers = ["Module Bundling", "Dependency Graph", "Code Splitting", "Loaders", "Plugins",
        "Asset Management", "Hot Module Replacement"];

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
}