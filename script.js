function _load(){

  document.getElementById("root").innerHTML = "<h1>wőrld</h1>";
  document.getElementById("root").innerHTML += "<h2>európa</h2>";

  document.getElementById("root").insertAdjacentHTML("beforeend", "<h3>wow,text</h3>");

  document.getElementById("root").insertAdjacentHTML("beforeend", `
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laudantium recusandae iure voluptate et illo magni? Error, quod voluptas? Optio quas saepe, explicabo mollitia odit quod cumque placeat iste debitis.
    </p>
  `);

  //Ezzel az egesz elemet kitoroljuk vagy felul irjuk, sajat magat is beleertve.
  //document.getElementById("root").outerHTML = "";
  
  //Ezt sem erdemes hasznalni, a css-nek a css-ben a helye.
  //document.getElementById("root").style.padding = "80px";

  //Ezt nem erdemes hasznalni
  //document.getElementById("root").className = "rootClass";
  //document.getElementById("root").className += " welcomeClass";

  document.getElementById("root").classList.add("rootClass");
  document.getElementById("root").classList.add("welcomeClass");
  document.getElementById("root").classList.add("tempClass");

  document.getElementById("root").classList.remove("tempClass");  

  
}

//ez igy nem fog betoltodni.
//document.getElementById("root").innerHTML = "<h1>wőrld</h1>";

//igy sem erdemes csinalni
//window.onload = _load();


window.addEventListener("load", _load);