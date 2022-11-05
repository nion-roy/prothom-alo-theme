// Header Sticky Script ======================= >>
document.addEventListener("DOMContentLoaded", function () {
   window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
         document.getElementById("navbar").classList.add("fixed-top");
         document.body.style.paddingTop = navbar_height + "px";
      } else {
         document.getElementById("navbar").classList.remove("fixed-top");
         document.body.style.paddingTop = "0";
      }
   });
});

// Toggle Menu Script ======================= >>
document.getElementById("openMenu").addEventListener("click", menuFunction);
document.getElementById("closeMenu").addEventListener("click", menuFunction);
document.querySelector(".overlay").addEventListener("click", menuFunction);

function menuFunction() {
   document.getElementById("hideMenu").classList.toggle("active");
   document.querySelector(".overlay").classList.toggle("active");
}

// Password Show and Hide Script ======================= >>
function password_show_hide() {
   var x = document.getElementById("password");
   var show_eye = document.getElementById("show_eye");
   var hide_eye = document.getElementById("hide_eye");
   hide_eye.classList.remove("d-none");
   if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
   } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
   }
}

document.getElementById("searchBtn").addEventListener("click", searchFunction);
document.getElementById("overLay").addEventListener("click", searchFunction);
function searchFunction() {
   document.getElementById("searchMenu").classList.toggle("active");
   document.getElementById("overLay").classList.toggle("open");
}

