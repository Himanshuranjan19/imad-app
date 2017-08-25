console.log('Loaded!');

//Change the text of the main div
/*
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
*/

//Move the image

var img = document.getElementById('img');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';
};

//Counter code
var button = document.getElementById('counter');
//var counter =0;
button.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState == XMLHttpRequest.DONE) {
          //Take some action
          if (request.status == 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //Note done yet
    };
    
    //Make a request
    request.open('GET', 'http://himranjan2.imad.hasura-app.io/counter', true);
    request.send(null);
    
    /*
    //Render the variable in the correct span without affecting counter variable
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    */
};

//Submit name
var nameInput =  document.getElementById('name');
var name = nameInput.value;
var submit =  document.getElementById('submit_btn');
submit.onclick = function () {
    //Make a request to the server and send the name
    
    //Capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list='';
    for (var i=0; i<names.length; i++) {
        list+='<li>' + 'names[i]' + '</li>';
    }
    var ul =  document.getElementById('namelist');
    ul.innerHTML = list;
};

/*
If upper element tobe selected is not found, lower elements are also not
implemented as supposed to be by JavaScript. In other words, lower
elements are neglected.
*/