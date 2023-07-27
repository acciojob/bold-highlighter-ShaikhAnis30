
const strong = document.getElementsByTagName("strong");
const anchor = document.getElementsByTagName("a")[0];

// anchor.addEventListener("onMouseOver", highlight());
// anchor.addEventListener("onMouseLeave", return_normal());

function highlight() {
    //Write your code here
    // strong.style.color = 'green';

    for (let i = 0; i < strong.length; i++) {
        // console.log(strong[i].innerText);
        strong[i].style.color = 'green';
    }
}


function return_normal() {
    //Write your code here
    // anchor.removeEventListener("onMouseOver", highlight());   
    for (let i = 0; i < strong.length; i++) {
        // console.log(strong[i].innerText);
        strong[i].style.color = 'black';
    } 
}
