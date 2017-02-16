var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
  'article-one':{
    title: 'article-one Im kiran',
    heading:'article-one',
    date:'feb 1 2017',
    content:`<p>
                this content for my first article. this content for my first article. this content for my first article.
            </p>
            <p>
                this content for my first article. this content for my first article. this content for my first article.
            </p>
            <p>
                this content for my first article. this content for my first article. this content for my first article.
            </p> `
},
  'article-two':{
    title: 'article-two Im kiran',
    heading:'article-two',
    date:'feb 16 2017',
    content:`<p>
                this content for my second article.
            </p>`
            
},
  'article-three':{
    title: 'article-three Im kiran',
    heading:'article-three',
    date:'feb 20 2017',
    content:`<p>
                this content for my third article.
            </p> `
            
},
}


function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplet=` 
   <html>
    <head>
        <title>
         Article one I'm Kiran    
        </title>
            <meta name="viewpoint" contents="width=device-width,initial=scale-1" />
     <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
       <div>
           <a href="/">HOME</a>
        </div>
        <hr/>
        <h3> 
          ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
          ${contents}
        </div>    
        </div>
    </body>
</html>`;
return htmltemplet;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
