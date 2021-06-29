var overlay = {
  // (A) OVERLAY HTML ELEMENTS
  ewrap: null, // wrapper
  econtent: null, // contents
  eclose: null, // close button
  
  // (B) CREATE OVERLAY
  init: function () {
    overlay.ewrap = document.createElement("div");
    overlay.econtent = document.createElement("div");
    overlay.eclose = document.createElement("div");
    overlay.ewrap.id = "owrap";
    overlay.econtent.id = "ocontent";
    overlay.eclose.id = "oclose";
    overlay.eclose.innerHTML = "X";
    overlay.eclose.addEventListener("click", overlay.hide);
    overlay.ewrap.appendChild(overlay.econtent);
    overlay.ewrap.appendChild(overlay.eclose);
    document.body.appendChild(overlay.ewrap);
  },

  // (C) SHOW OVERLAY
  show: function (content) {
    //overlay.econtent.innerHTML = content;
    overlay.econtent.innerHTML = '<div class="video"><iframe src="https://player.vimeo.com/video/'+content+'?byline=0&title=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe></div>';
    overlay.ewrap.classList.add("show");
  },
  
  // (D) HIDE OVERLAY
  hide: function () {
    overlay.econtent.innerHTML = "";
    overlay.ewrap.classList.remove("show");
  }
};
document.addEventListener("DOMContentLoaded", overlay.init);
