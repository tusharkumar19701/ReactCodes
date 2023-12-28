/**
 * 
 * Created a Server
 * 
 * HMR - Hot Module Replacement (parcel will keep the track of all the files which you are updating and will reflect it in your browser automatically)
 * This is done by using (File Watcher Algorithm) which is written in C++. It keeps the track of all the files that are changing and tells the server to reload.
 * 
 * Parcel is used for
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production Build
 * Super fast build algo
 * Image Optimization
 * Caching while Development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev (npx parcel index.html --https)
 * Parcel manages your Port Number
 * We should put .parcel-cache in gitignore (Anything which we can generate on server will be put inside gitignore)
 * Consistent Hashing Algo
 * Parcel is a zero config
 * 
 * 
 * 
 * Transitive Dependencies (
Transitive dependencies refer to the dependencies that a project indirectly relies on through its direct dependencies. In other words, if your project depends on library A, and library A depends on libraries B and C, then B and C are transitive dependencies of your project.)
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {
    id:"title",
},
"Heading 1");

const heading2 = React.createElement("h2", {
    id:"title",
},
"Heading 2");

const container = React.createElement("div", {
    id:"container",
},
[heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);