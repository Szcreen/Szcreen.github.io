// Time Display in CET
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const options = {
        timeZone: 'Europe/Paris', // CET
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const formattedTime = now.toLocaleTimeString('en-GB', options);
    timeDisplay.textContent = `My local time is: ${formattedTime} CET`;
}

setInterval(updateTime, 1000);
updateTime();

// ABOUT ME TEXT ANIMATION
document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = ["Hello, I'm a 3D modeler and programmer.", "I love to code.", "I love cats."];

  // calls itself until sentence is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < text.length) {
      // add next character to the .about-me-text element
      const aboutMeElement = document.querySelector(".about-me-text");
      if (aboutMeElement) {
        aboutMeElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      }

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 200);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 5000);
    }
  }

  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    } else {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }

  // start the text animation only if the .about-me-text element exists
  if (document.querySelector(".about-me-text")) {
    StartTextAnimation(0);
  }
});
