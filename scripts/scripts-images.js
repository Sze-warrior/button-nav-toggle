
//Vars to get the images
var simon = document.querySelector(".btn-simon");
var bruce = document.querySelector(".btn-bruce");
var ben = document.querySelector(".btn-ben");
var btnNavSwitch = document.querySelectorAll('.btn-nav');
var btnNavContainer = document.querySelectorAll('.btn-nav-container');

//function to remove classes and add classes
function picLink(e) {
  var allImages = document.querySelectorAll(".img-container img");
  var picId = e.currentTarget.attributes["data-img"].value;//selects 
  var pic = document.getElementById(picId);

  var target = e.currentTarget;
  var targetAllBtnNavs = target.parentNode.querySelectorAll(".btn-nav");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  for(var i = 0; i < targetAllBtnNavs.length; i++){
    targetAllBtnNavs[i].classList.remove("btn-active");
    target.classList.add("btn-active");
  }

  if (pic.className === "hide") {
    pic.classList.add("display");
    pic.classList.remove("hide");
    pic.classList.add("famous");

  } else {
    pic.classList.remove("display");
    pic.classList.remove("hide");
  }
}

simon.addEventListener("click", picLink, false);
bruce.addEventListener("click", picLink, false);
ben.addEventListener("click", picLink, false);