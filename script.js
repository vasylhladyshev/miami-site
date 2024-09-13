document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.getElementById("burger__menu").classList.toggle("open")
        document.getElementById('burger').classList.toggle('open')
    })
})