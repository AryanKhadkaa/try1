
function theme(){
    x= document.body;
    x.classList.toggle("darkmode");
}

/*
const wrapper=document.getElementsByClassName("wrapper");
const bar = document.getElementById("info-bar");
var pscroll = wrapper.offsetTop;

             console.log(pscroll);

wrapper.onscroll= function() {
    var nscroll = wrapper.offsetTop;

                               // console.log(nscroll);
if(pscroll > nscroll)
{                               console.log("working")
    bar.style.top = "0px";
}
else{
    bar.style.top = "-60px";
}
   pscroll = nscroll;
}


function display(){
    document.getElementById('sidebar').classList.toggle('active');
}

/*
 function empty(){
    document.getElementById("tbname").value="";
    document.getElementById("t2").value="";
    document.getElementById("t3").value="";
    document.getElementById("t4").value="";

}
*/
const wrapper=document.getElementsByClassName("wrapper");
window.addEventListener("scroll", function () {
    let bar = document.querySelector("#info-bar");
    bar.classList.toggle("sticky", window.document.wrapper.scrollTop> 0);
  });




        