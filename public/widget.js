/**
*  widget.js
*  standardizes header, footer, css
*/

(function() {
  // get project name
  var projectName = location.hostname.split('.')[0];
  
  // add stylesheet to head
  var headElement = document.getElementsByTagName('head')[0];
  var linkElement = document.createElement('link');
  linkElement.setAttribute('href', 'https://widget.glitch.me/style.css');
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('type', 'text/css');
  headElement.appendChild(linkElement);
  
  // add links to footer
  var footerElement = document.getElementById('gWidget');
  footerElement.innerHTML = 
    "<p><a href=\"https://glitch.com/edit/#!/remix/" + projectName + "\">" +
    "<img alt=\"Remix on Glitch\" src=\"https://cdn.gomix.com/f3620a78-0ad3-4f81-a271-c8a4faa20f86%2Fremix-button.svg\"></a></p>" +
    "<p><a href=\"https://glitch.com/edit/#!/project/" + projectName + "\">View Code</a></p>";
})();
