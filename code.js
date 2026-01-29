var el=true;
function clickMe(){
   if (el==true) {
    navbar.style.height='400px';
    nav.style.transform="rotateX(-180deg)";
    el=false;
   }
  else if (el==false) {
    navbar.style.height='50px';
    nav.style.transform="rotateX(0deg)";
    el=true;
   }
}