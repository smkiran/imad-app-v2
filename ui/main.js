var button=document.getElementById('counter');
var counter=0; 
button.onclick = function(){
    counter =counter+1;
    var spon = document.getElementById('count');
    spon.innerHTML=counter.toString();
    
    
};
