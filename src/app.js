/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "my", "mine"];
  let adj = ["great", "big", "large", "fast"];
  let noun = ["jogger", "racoon", "bird", "clock"];

  let domainName = [];
  for (let pron of pronoun) {
    for (let ad of adj) {
      for (let nou of noun) {
        domainName.push(`${pron}${ad}${nou}.com`);
      }
    }
  }
  document.body.innerHTML = `<ol>${domainName
    .map(domainNa => `<li>${domainNa}</li>`)
    .join(" ")}</ol>`;
};
