function main(event) {
  // Add the "big" class to the "grow-me" paragraph.
  const grow = document.getElementById("grow-me");
  grow.classList.add("big");

  //Remove the "big" class to the "shrink-me" paragraph.
  const shrink = document.getElementById("shrink-me");
  shrink.classList.remove("big");

  //Find all the <li>s and log their text content to the console.
  const lists = document.querySelectorAll("li");
  for (let list of lists) {
    console.log(list.innerText);
  }

  //Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
  const linkText = (document.getElementsByClassName("link")[0].innerHTML = "somewhere");

  //Set the "display" CSS property of the "hide-me" paragraph to "none"
  document.getElementById("hide-me").style.display = "none";

  //Set the "display" CSS property of the "show-me" paragraph to "block".
  document.getElementById("show-me").style.display = "block";

  //Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Hello Grant!"
  const userName = document.getElementById("name").value;
  document.getElementsByTagName('h1')[0].innerText = `Welcome ${userName}`;
  
} 

