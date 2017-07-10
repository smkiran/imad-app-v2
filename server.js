var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/* CSS Document */

@charset "utf-8";
/* CSS Document */

@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600,700);

body {
	margin:0;
	padding:0;
}

/*menu1*/
#mainmenucontainer {
	padding: 20px 0px 0px 0px;
	width: 100%;
	margin:0px auto;
}
#mainmenu {
	margin: 0px;
	padding: 0px;
	list-style-image: none;
	list-style-type: none;
}
#mainmenu li {
	font-family: 'RalewayBold';
	font-size: 18px;
	padding:7px 0px 4px 0px;
	margin:0px 0px 0px 30px;
	float: right;
	text-transform: uppercase;
}
#mainmenu li a:link, #mainmenu li a:visited, #mainmenu li a:active {
	color:#886734;
	text-decoration: none;
	margin: 0px;
	display: block;
	float: right;
	width: auto;
	height: auto;
	text-align: right;
}
#mainmenu li a:hover {
	color: #BF8E4D;
}
#mainmenu li a.active:link, #mainmenu li a.active:visited, #mainmenu li a.active:active, #mainmenu li a.active:hover {
	color: #BF8E4D;
} 

/* end of menu1 */



/* start of menu2 */
#submenucontainer {
	padding: 18px 0px 0px 0px;
	width: 100%;
	margin:0px auto;
}

#submenu {
	margin: 0px;
	padding: 0px;
	list-style-image: none;
	list-style-type: none;
}

#submenu li {
	font-family: 'RalewaySemiBold';
	font-size: 13px;
	padding:0px 0px 15px 0px;
	margin:0px 0px 0px 30px;
	float: right;
	text-transform: uppercase;
	line-height:20px;
}

#submenu li a:link, #submenu li a:visited, #submenu li a:active {
	color:#3F4349;
	text-decoration: none;
	margin: 0px;
	display: block;
	float: left;
	width: auto;
	height: auto;
	text-align: left;
}

#submenu li a:hover {
	color: #BF924E;
}

#submenu li a.active:link, #submenu li a.active:visited, #submenu li a.active:active, #submenu li a.active:hover {
	color: #BF924E;
}

/* end of menu2 */

.logo-menu {
	height:124px;
	width:1106px;
	margin:0px auto;
}

.h1-mainpg{
	font-family: 'RalewaySemiBold';
	font-size:24px;
	text-align:center;
	color:#3D6428;
}

.h1{
	font-family: 'RalewaySemiBold';
	font-size:24px;
	color:#3D6428;
	padding:0px 0px 5px 0px;
	margin:0px;
}


.content {
	font-family: 'RalewayRegular';
	font-size:16px;
	color:#303030;
	line-height:1.5em;
	text-align:center;
}

.content-inner {
	font-family: 'RalewayRegular';
	font-size:16px;
	color:#303030;
	line-height:1.5em;
	text-align:justify;
	padding:0px 0px 10px 0px;
}

.menubg {
	background:url(images/top-menu-bg.jpg) repeat-x;
}

.headerbg {
	background:url(images/headerbg.jpg) repeat-x;
	background-position:bottom;
}

.headerbg2 {
	height:225px;
	background:#3F322A url(images/headerbgsmall.png) repeat-x;
	text-align:center;
	margin:0;
	padding:0;
}

.sideheading{
	font-family: 'RalewayRegular';
	font-size:16px;
	color:#272A2D;
	text-transform:uppercase;
}

.sideheading-2{
	font-family: 'RalewaySemiBold';
	font-size:25px;
	color:#272A2D;
	text-transform:uppercase;
}

.tabsbg{
	padding:30px 0px 30px 0px;
	background:#E1E3E5;
}

.tabs{
	background:#FFFFFF;
	border:1px solid #BEBBB6;
	border-right:none;
	border-radius:3px;
	box-shadow: 4px 4px 3px #CCCBC8;
}

.tabcontent{
	font-family: 'RalewaySemiBold';
	font-size:16px;
	color:#372F2B;	
	line-height:1.5em;
	padding:8px 10px 8px 10px;
}


.tabcontent-2{
	font-family: 'RalewaySemiBold';
	font-size:14px;
	color:#ffffff;	
	line-height:1.5em;
	padding:5px 0px 10px 10px;
	text-transform:uppercase;
}

.tabreadmore{
	font-family: 'RalewayBold';
	font-size:18px;
	color:#372F2B;
	text-transform:uppercase;
	background:#F5F6F6;
	margin:0px 0px 0px 0px;
	padding:10px 0px 10px 0px;
}

.tabreadmore a{
	font-family: 'RalewayBold';
	font-size:18px;
	color:#372F2B;
	text-transform:uppercase;
	text-decoration:none;
	background:#F5F6F6;
	margin:0px 0px 0px 0px;
	padding:10px 77px 10px 77px;
}


.tabreadmore a:hover{
	font-family: 'RalewayBold';
	font-size:18px;
	color:#372F2B;
	text-transform:uppercase;
	text-decoration:none;
	background:#D2D5D5;
}

.footerbg{
	background:#272A2D;
	padding-top:30px;
	padding-bottom:40px;
}

.footerbg2 {
	background:#272A2D;
	padding-top:10px;
	padding-bottom:10px;
}

.footerheading-1 {
	font-family: 'RalewayBold';
	font-size:20px;
	color:#FFFFFF;
}

.footercontent {
	font-family: 'Open Sans', sans-serif;
	font-size:14px;
	color:#E0E0E0;
	line-height:2em;	
}


.footercontent-2 {
	font-family: 'Open Sans', sans-serif;
	font-size:11px;
	color:#E0E0E0;
}


.footercontent-2 a {
	font-family: 'Open Sans', sans-serif;
	font-size:11px;
	color:#E0E0E0;
	text-decoration:none;	
}


.footercontent-2 a:hover {
	font-family: 'Open Sans', sans-serif;
	font-size:11px;
	color:#E0E0E0;
	text-decoration:underline;	
}


.testimonial {
	font-family: 'Open Sans', sans-serif;
	font-size:12px;
	color:#E0E0E0;
}


.hr-line{
	margin:10px 0px 10px 0px;
	height:1px;
	border-bottom:1px dashed #616262;
}

/*  form 1 */
.form4 {
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	color: #000000;
	border: 1px solid #000000;
	margin-bottom: 5px;
	padding-left: 10px;
	background-color: #B6B7B8;
	height: 30px;
	width: 420px;
}

.form_address4 {
	font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	color: #000000;
	border: 1px solid #000000;
	margin-bottom: 5px;
	padding-left: 10px;
	background-color: #B6B7B8;
	height: 100px;
	width: 418px;
}

.button_form2 {
	font-family: 'RalewayBold';
	font-size:18px;
	color: #03303C;
	border: 1px solid #F3F3F3;
	border-radius:5px;
	background: #F3F3F3;
	padding:5px 5px 5px 5px;
	text-transform:uppercase;
}

.button_form2:hover {
	color: #03303C;
	border: 1px solid #FFFFFF;
	background: #FFFFFF;
	cursor:pointer;
}

/* end of form 1 */

/*  form 2 */
.form2 {
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	color: #303030;
	border: 1px solid #E3CEB5;
	margin-bottom: 5px;
	padding-left: 10px;
	background-color: #FEFEFE;
	height: 27px;
	width: 250px;
}

.form_address2 {
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	color: #000000;
	border: 1px solid #E3CEB5;
	margin-bottom: 5px;
	padding-left: 10px;
	background-color: #FEFEFE;
	height: 100px;
	width: 248px;
}

.button_form_2 {
	font-family: 'RalewayBold';
	font-size:18px;
	color: #886734;
	border: 1px solid #C0C2C4;
	background: #D8DCDF;
	padding:6px 5px 6px 5px;
	text-transform:uppercase;
}

.button_form_2:hover {
	color: #BF8D34;
	cursor:pointer;
}

/* end of form 2 */





/* Everything CSS Sprite Menu */
	#smenu{margin:0; padding:0; list-style:none; clear:both;}
	
		#smenu li{overflow:hidden; text-indent:-9999px; display:inline; float:left; margin-right:9px; margin-left:0px; margin-bottom:0px; margin-top:12px;}
		
			#smenu li a{background:url('images/sprite.jpg') no-repeat; width:100%; height:100%; display:block;}

			/* fb */
				#smenu li.fb{width:38px; height:36px;}
				#smenu li.fb a{background-position: 0px 0px;}
				#smenu li.fb a:hover{background-position: 0px -36px;}
				#smenu li.fb a.selected{background-position: 0px -36px;}
								
			/* tw */
				#smenu li.tw{width:38px; height:36px;}
				#smenu li.tw a{background-position: -38px 0px;}
				#smenu li.tw a:hover{background-position:-38px -36px;}
				#smenu li.tw a.selected{background-position:-38px -36px;}
							
			/* you tube */
				#smenu li.yt{width:38px; height:36px;}
				#smenu li.yt a{background-position: -76px 0px;}
				#smenu li.yt a:hover{background-position: -76px -36px;}
				#smenu li.yt a.selected{background-position: 0px -36px;}
							
			/* pintrest */
				#smenu li.pt{width:38px; height:36px;}
				#smenu li.pt a{background-position: -114px 0px;}
				#smenu li.pt a:hover{background-position: -114px -36px;}
				#smenu li.pt a.selected{background-position: -114px -36px;}
				
/* end of Everything CSS Sprite Menu */		

.viewdetails{
	background:#E1E3E5;
	color:#886734;
	font-family: 'RalewayBold';
	font-size:18px;
	text-transform:uppercase;
	padding:10px 13px 10px 13px;
	border-radius:8px;
	text-decoration:none;
	-moz-box-shadow:5px 5px 9px #886734;
    -webkit-box-shadow:5px 5px 9px #886734;
    box-shadow:5px 5px 9px #886734;
}

.viewdetails:hover{
	background:#886734;
	color:#E1E3E5;
	-moz-box-shadow:5px 5px 9px #484239;
    -webkit-box-shadow:5px 5px 9px #484239;
    box-shadow:5px 5px 9px #484239;

}

.viewdetails2 {
	color:#ffffff;
	font-family: 'RalewayBold';
	font-size:16px;
	padding:10px 13px 10px 13px;
	text-decoration:none;
}

.viewdetails2:hover {
	text-decoration:underline;
}


.innerpg {
	background:#493E38;
	height:10px;
}

.innerbody{
	padding:20px 0px 30px 0px;
	background:#ffffff;
}

.spacer-01{
	height:10px;
}
/*#vd-position{
	width:1135px;
	height:152px;
}

.vd-container {
	background:url(images/view-details-bg.png) no-repeat;
	width:1135px;
	height:152px;
	position:absolute;
	top:328px;
	left:102px;
}
*/

.floating-right-img{
	float:right;
	/*background:#F2F4F6;*/
	border:1px solid #E3CEB5;
	padding:5px;
	margin:0px 5px 5px 20px;
	/*-moz-box-shadow:5px 5px 9px #A2A4A6;
    -webkit-box-shadow:5px 5px 9px #A2A4A6;
    box-shadow:1px 1px 5px #A2A4A6;*/
}
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
          ${content}
        </div>    
        </div>
    </body>
</html>`;
return htmltemplet;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req, res){
    counter=counter + 1;
    res.send(counter.toString());
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
