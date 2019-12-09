function ran(){
var k=Math.random();
k=(k*100);
var j=Math.round(k)+1;
document.writeln("<h1 style=\"color: red; font-size: 30pt; text-align:center;\">"
+ j+"%"+ "</h1>");
if(1<=j && j<=30){
        var s="Too bad ,Know each other first";
}
else if(31<=j && j<=75){
    var s="You have to improve your friendship";
}

    else{
       var s="Woow!! Great Friends Still exist.Good friends are loyal and accept you for who you are during the good and bad times. Good friends are also honest — honest enough to tell you when you're not being a good friend yourself. ... Along with good friends who are present, loyal, and honest, most people want friends who are trustworthy.";
    }
    document.writeln("<h1 style=\"color:#f38181; background-color:#fce38a; font-size: 30pt; text-align:center;\">"
+ s + "</h1>");
}
