function _load(){

  function clickEvent(){
    //ez is mukodik, ha a css-ben le van kezelve a #nav #open elemeken a clicked class name
    //document.getElementById("open").classList.toggle("clicked");
    //document.getElementById("nav").classList.toggle("clicked");

    document.querySelector("body").classList.toggle("clicked");
  }

  document.getElementById("open").addEventListener("click", clickEvent);
  
}

window.addEventListener("load", _load);