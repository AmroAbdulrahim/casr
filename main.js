let tr = document.getElementsByName("true")
let result = document.getElementsByClassName("result")
let pop = document.getElementsByClassName("popup")
let end = document.getElementsByClassName("end")
let counter = 0 //For result 

document.onclick = function(e) {
    if(e.target.name === "true"){
        e.target.style.backgroundColor="rgb(70, 200, 70)"
        counter++
        window.scrollBy({
            left:0,
            top:773,
            behavior: "smooth"
        })
    } else if (e.target.name === "false") {
        e.target.style.backgroundColor= "rgb(200, 70, 70)"
        window.scrollBy({
            left:0,
            top:773,
            behavior: "smooth"
        })
    }
    if (e.target.className === "end"){
        console.log(counter)
        pop[0].style.display = "block"
        result[0].textContent = `your result is ${counter}/10`
    }
}

let re = document.getElementsByClassName("reload")

re[0].onclick = function(e){
    window.scrollTo(0,500) //start from the first question
    setTimeout(() => {
        location.reload(e);
    }, 1000)
}