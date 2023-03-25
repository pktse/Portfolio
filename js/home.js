
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "3vh 0vh 2vw 3vw";
    document.getElementById("text").style.padding = "0";
    document.getElementById("logo").style.fontSize = "2vw";
    document.getElementById("navbar-right").style.paddingLeft = "60vw";
    document.getElementById("text").style.fontSize = "0vw";
    // document.getElementById("text").style.display= "none";
    var images = document.getElementsByClassName("social-media-icon");
    for(i1 = 0; i1 < images.length; i1++) {
        images[i1].style.display= "none";
      }
  } else {
    document.getElementById("navbar").style.padding = "50vh 10vw";
    document.getElementById("logo").style.fontSize = "5vw";
    document.getElementById("text").style.padding = "7vh 1vh 0vh 1vh";
    document.getElementById("navbar-right").style.paddingLeft = "30vw";
    document.getElementById("text").style.fontSize = "2vw";
    // document.getElementById("text").style.display= "block";
    var images = document.getElementsByClassName("social-media-icon");
    for(i1 = 0; i1 < images.length; i1++) {
        images[i1].style.display= "block";
      }
  }
}
