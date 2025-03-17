let scoop =5;
while(scoop>0){
    document.write("another scoop!");
    if (scoop < 3){
        alert("icecream is running low");
    }
    else if(scoop>= 5){
        alert("eat faster, the ice cream, is going to melt");
    }
    scoop = scoop - 1;
}
document.write("life without ice cream isnt the same");
