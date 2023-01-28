// ==UserScript==
// @name         Remove Twitter tweet view count
// @namespace    https://github.com/BlackDragon17/Utilities
// @version      1.1
// @description  Removes the view count next to the reply, like, and retweet buttons
// @author       BlackDragon17
// @match        https://*.twitter.com/*
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// ==/UserScript==

(function() {
    'use strict';
    
    const styleEl = document.createElement("style");
    const styleContent = document.createTextNode(`
    div.css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws > div.css-1dbjc4n.r-18u37iz.r-1h0z5md:last-child {
        display: none;
    }
    `);
    styleEl.appendChild(styleContent);
    document.querySelector("head")?.append(styleEl);
})();
