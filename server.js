var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
        title: 'Article One | Himanshu Ranjan',
        heading: 'Article One',
        date: 'Aug 18, 2017',
        content: ` 
            <p>
                This is the content for my first article. It's a basic web page for practising URLs management keeping URLs in a separate file.This is the content for my first article. It's a basic web page for practising URLs management keeping URLs in a separate file.
            </p>
            <p>
                This is the content for my first article. It's a basic web page for practising URLs management keeping URLs in a separate file.This is the content for my first article. It's a basic web page for practising URLs management keeping URLs in a separate file.
            </p>
            <p>
                This is the content for my first article. It's a basic web page for practising URLs management keeping URLs in a separate file.This is the content for my first article. It's a basic web page for practising URLs management keeping URLs in a separate file.
            </p>`
    },
    'article-two': {
        title: 'Article Two | Himanshu Ranjan',
        heading: 'Article Two',
        date: 'Aug 19, 2017',
        content: ` 
            <p>
                This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.
            </p>
            <p>
                This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.
            </p>`
         },
    'article-three': {
        title: 'Article Three | Himanshu Ranjan',
        heading: 'Article three',
        date: 'Aug 20, 2017',
        content: ` 
            <p>
                This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.
            </p>
            <p>
                This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.This is the content for my second article. It's a basic web page for practising URLs management keeping URLs in a separate file.
            </p>
            <p>
                Hello, I am writing this third paragraph to distinguish it from other two articles. Thanks for reading.
            </p>`
        }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=devide-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr> 
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter = counter+1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) { // URL : /submit-name?Himanshu
  //Get the name from request object
  var name = req.query.name;
  
  names.push(name);
  //JSON Javascript Object Notation
  res.send(JSON.stringify(names));
  
});

app.get('/:articleName', function(req, res) {
  // articlename == article-one
  // articles[articleName] == {} content object for article-one
  var articleName = req.params.articleName; //provided by express framework
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



/*
app.get('/submit-name/:name', function (req, res) {
  //Get the name from request object
  var name = req.params.name;
  
  names.push(name);
  //JSON Javascript Object Notation
  res.send(JSON.stringify(names));
  
});

/*
app.get('/article-one', function(req, res){
  res.send(createTemplate(articleOne));
});

app.get('/article-one', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
*/

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
