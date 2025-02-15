import createTabbedPage from './tabbed-pages.js';
import createWebpackPage from './webpack-page.js';
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
