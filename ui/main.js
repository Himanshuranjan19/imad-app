console.log('Loaded!');

//Change the text of the main div
/*
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
*/

//Move the image

var img=document.getElementById('img');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';
};


/*
If upper element tobe selected is not found, lower elements are also not
implemented as supposed to be by JavaScript. In other words, lower
elements are neglected.
*/