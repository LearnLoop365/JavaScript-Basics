/*
 * Run
 * e.g.
 * SpiderMonkey
 * js hw.js
 *
 * V8
 * d8 hw.js
 *
 * NodeJS
 * node hw.js
 *
 * JavaScriptCore in WebKit
 * jsc hw.js
 *
 * OSA (Open Scripting Architecture) _ macOS
 * osascript -l JavaScript hw.js
 *
*/

if (typeof console != 'undefined') {
    console.log('Hello World');
} else if (typeof debug != 'undefined') { // No Global `console` Object in jsc Environment
    debug('Hello World');
}
