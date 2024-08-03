let Body = document.body
let LoadingPage = document.querySelector(".loading")
let MainPage = document.querySelector(".mainDiv")
function log () {
    LoadingPage.style.display = "none"
    setInterval(function(){
        MainPage.style.display = "block"
    },4500)

}
