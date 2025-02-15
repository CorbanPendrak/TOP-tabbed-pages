import { greeting } from './greeting.js';
import "./index.css"

console.log(greeting);

// Create Tabbed page
import createTabbedPage from './tabbed-pages.js';

createTabbedPage(document.getElementById("content"));