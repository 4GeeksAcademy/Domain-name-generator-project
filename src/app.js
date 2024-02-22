/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  setTimeout(function() {
    let domains = {
      pronoun: ["the", "our", "my", "your", "their"],
      adj: ["great", "big", "small", "fast", "slow"],
      noun: ["jogger", "raccoon", "car", "tree", "house"],
      extensions: [".com", ".net", ".org", ".io", ".co"]
    };
    let display = document.getElementById("bigList");

    for (let i in domains.pronoun) {
      for (let j in domains.adj) {
        for (let t in domains.noun) {
          for (let f in domains.extensions) {
            console.log(
              domains.pronoun[i] +
                domains.adj[j] +
                domains.noun[t] +
                domains.extensions[f]
            );
            display.innerText +=
              domains.pronoun[i] +
              domains.adj[j] +
              domains.noun[t] +
              domains.extensions[f] +
              "\n";
          }
        }
      }
    }
    console.groupEnd();
  }, 1000);

  console.log("Hello Rigo from the console!");
};
