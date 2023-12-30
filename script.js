let add = document.getElementById("add");
let input = document.getElementById("input");
let row = document.getElementById("row");
add.addEventListener("click",myfunction)
function myfunction(){
   if(input.value){
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let p = document.createElement("p");
    div.className = "col-lg-3 col-md-4 col-sm-6"
    div2.className = "mydiv"
    div3.className = "icondiv"
    div4.className = "textdiv"
    let close =  document.createElement("a");
    let check =  document.createElement("a");
    let edit =  document.createElement("a");
    close.innerHTML = "<iconify-icon icon='carbon:close-outline' id='icon1'></iconify-icon>";
    check.innerHTML = "<iconify-icon icon='lets-icons:done-ring-round' id='icon2'></iconify-icon>";
    edit.innerHTML = "<iconify-icon icon='akar-icons:edit' id='icon3'></iconify-icon>";
    row.appendChild(div)
    div.appendChild(div2)
    div2.appendChild(div3)
    div2.appendChild(div4)
    div4.appendChild(p)
    div3.appendChild(check)
    div3.appendChild(edit)
    div3.appendChild(close)
    p.innerHTML = input.value;
    input.value = ""
    close.addEventListener("click",removeli)
    check.addEventListener("click",checkli)
    edit.addEventListener("click",editfunction)
    function removeli(){
        div.style.cssText = "display:none"
    }
    function checkli(){
        p.style.cssText = "text-decoration: line-through; color:green;"
    }   
   function editfunction(){
        input.value = p.innerHTML
        div.style.cssText = "display:none"
   }
}
else{
}
}