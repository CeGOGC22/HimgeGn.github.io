  document.getElementById("mainLogo").onmouseover = function() {mouseOver("mainLogo")};
  document.getElementById("mainLogo").onmouseout = function() {mouseOut("mainLogo")};
  document.getElementById("hdMain").onmouseout = function() {mouseOut("mainLogo")};
  document.getElementById("sbbtn").onclick = function() {openNav()};
  document.getElementById("closebtn").onclick = function() {closeNav()};


  function mouseOver(mOver) {
  
    if(mOver == "logos"){
      document.getElementById("main").style.backgroundImage = "url(../HimeGN/media/fotologos.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "ilart"){
      document.getElementById("main").style.backgroundImage = "url(../HimeGN/media/fotoilustracion.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "clients"){
      document.getElementById("main").style.backgroundImage = "url(../HimeGN/media/fotoclientes.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "merch"){
      document.getElementById("main").style.backgroundImage = "url(../HimeGN/media/foto_merch.jpg)";
      document.getElementById("main").style.backgroundSize = "100% 100%";
      document.getElementById("main").style.backgroundRepeat = "no-repeat";
    }
    else if(mOver == "mainLogo")
    {
      document.getElementById("oLogo").innerHTML = "<img class='oLog-img' src='logos/logogn.png'>"
    }
  }
  
    function mouseOut(mOut) {
  
     
      if(mOut == "mainLogo")
      {
        document.getElementById("oLogo").innerHTML = "";
      }

      else
      {
        document.getElementById("main").style.backgroundImage = "";
      }
    }

    function openNav(){
      document.getElementById("moSidebar").style.width = "100%";
    }

    function closeNav(){
      document.getElementById("moSidebar").style.width = "0";
    }