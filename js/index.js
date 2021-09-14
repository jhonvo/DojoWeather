function message(){
    alert("Loading weather report...");
}

function cookiesaccept(element){
    element = document.querySelector(".cookies")
    element.remove();
}

function temperature(tags){
    // console.log(document.querySelector(".selector").value)    ;
    if (document.querySelector(".selector").value == "c"){
        tags = document.querySelectorAll(".temp");
        for (var i=0, max=tags.length; i < max; i++) {
            var convert = (tags[i].innerText - 32) * 5 / 9;
            tags[i].innerText = Math.round(convert);    
            // console.log("This is F:", tags[i].innerText, "This is C:", tags);
        }
    }
    else {
        tags = document.querySelectorAll(".temp");
        for (var i=0, max=tags.length; i < max; i++) {
            var convert = (tags[i].innerText *9 / 5) + 32;
            tags[i].innerText = Math.round(convert);
        }
    }

}
