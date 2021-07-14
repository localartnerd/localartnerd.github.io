
let workLink;

function showGif(item) {
    const work = document.getElementById("work");
    workLink = item.id;
    console.log(work);
    const gif = item.id;
    if (gif != 'selfie2') {
        work.setAttribute('src', 'images/gifs/webp' + gif + '.gif');
    } else {
        work.setAttribute('src', 'images/gifs/webp' + gif + '.jpg');
    }
    
}

function detailPage() {
    if (workLink !== 'selfie2') {
        location.href = workLink + '/index.html';
    }
}

window.onload = function() {
    let body = document.querySelector('body');
    body.classList.remove('fade-out');
}