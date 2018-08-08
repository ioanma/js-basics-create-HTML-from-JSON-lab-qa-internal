document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("Titanic").addEventListener("click", replaceTitle);
  function replaceTitle() {
    let castHtml = document.getElementById("cast");
    
    console.log("clicked");
    document.getElementById("title").innerHTML = movies["Titanic"]["title"];
    
    if (castHtml == '<div id="cast"></div>') {
      let cast = movies["Titanic"]["cast"];
    var i;
    for (i=0; i < cast.length; i++) {
      document.getElementById("cast").innerHTML += "<p>Actor: " + cast[i]["actor"] + "</p>";
      document.getElementById("cast").innerHTML += "<p>Role: " + cast[i]["role"] + "</p>";
    }
    }
    
  }
  });