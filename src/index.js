import createTabbedPage from './tabbed-pages.js';
import createWebpackPage from './webpack-page.js';
import createTOPPage from './TOP-page.js';
import "./index.css"

const content = document.getElementById("content");
createTabbedPage(content);

document.getElementById("page1").addEventListener("click", () => {
    content.innerHTML = "";
    createTabbedPage(content);
});

document.getElementById("page2").addEventListener("click", () => {
    content.innerHTML = "";
    createWebpackPage(content);
})

document.getElementById("page3").addEventListener("click", () => {
    content.innerHTML = "";
    createTOPPage(content);
})
