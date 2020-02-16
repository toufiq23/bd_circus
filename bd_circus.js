let i=0;
let images = [];
let time = 3000;

images[0] = "images/img1.jpeg";
images[1] = "images/img2.jpeg";
images[2] = "images/img3.png";
images[3] = "images/img4.jpeg";

function changeImg(){
    document.getElementById("slideshow").src = images[i];
    if(i<images.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;