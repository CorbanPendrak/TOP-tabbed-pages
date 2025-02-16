/*
Corban Pendrak
Purpose: Create tabbed page content
*/

// Import CSS
import "./tabbed-pages.css"

export default function createPage(container) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 800 100");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

    const svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgText.setAttribute("y", "50%");
    svgText.setAttribute("dominant-baseline", "middle");
    svg.appendChild(svgText);

    // SVG text animation
    const svgTexts = ["Tabbed Pages", "By Corban Pendrak"];
    let index = 0;
    let alternating = false;
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
    const texts = ["Tabbing pages with JavaScript offers several benefits.",
        "Users can navigate between different sections of content without reloading the page making the interaction " +
            "smoother and faster.",
        "Since the content is loaded dynamically, it reduces the number of requests to the server, improving " +
            "performance and reducing server load.",
        "JavaScript allows for more interactive and dynamic content, such as animations and transitions, which can " +
            "make the application more engaging.",
        "Tabbing helps in organizing content into manageable sections, making it easier for users to find and access " +
            "the information they need.",
        "Tabbing is a common feature in SPAs, which aim to provide a more fluid and responsive user experience by " +
            "loading content dynamically without full page reloads."
    ];
    const headers = ["Improved UX", "Reduced Server Load", "Enhanced Interactivity", "Better Organization",
        "Single Page Application (SPA) Development"];

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
    root.style.setProperty("--color-primary", "#00bfc6");
    root.style.setProperty("--color-secondary", "#f1f1f1");
}