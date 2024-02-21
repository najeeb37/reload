function change()
{
    var x = Math.random()*(9-1)+1
    var y = Math.floor(x)
    console.log(y)


    if(y==1)
    {
        document.getElementById("box").style.backgroundColor = "bisque"
        document.getElementById("click").style.backgroundColor = "bisque"
        document.getElementById("click").innerHTML = "Bisque"
    }
    else if(y==2)
    {
        document.getElementById("box").style.backgroundColor = "chocolate"
        document.getElementById("click").style.backgroundColor = "chocolate"
        document.getElementById("click").innerHTML = "Chocolate"
    }
    else if(y==3)
    {
        document.getElementById("box").style.backgroundColor = "green"
        document.getElementById("click").style.backgroundColor = "green"
        document.getElementById("click").innerHTML = "Green"
    }
    else if(y==4)
    {
        document.getElementById("box").style.backgroundColor = "yellow"
        document.getElementById("click").style.backgroundColor = "yellow"
        document.getElementById("click").innerHTML = "Yellow"
    }
    else if(y==5)
    {
        document.getElementById("box").style.backgroundColor = "purple"
        document.getElementById("click").style.backgroundColor = "purple"
        document.getElementById("click").innerHTML = "Purple"
    }
    else if(y==6)
    {
        document.getElementById("box").style.backgroundColor = "darkcyan"
        document.getElementById("click").style.backgroundColor = "darkcyan"
        document.getElementById("click").innerHTML = "Darkcyan"
    }
    else if(y==7)
    {
        document.getElementById("box").style.backgroundColor = "grey"
        document.getElementById("click").style.backgroundColor = "gray"
        document.getElementById("click").innerHTML = "Gray"
    }
    else if(y==8)
    {
        document.getElementById("box").style.backgroundColor = "brown"
        document.getElementById("click").style.backgroundColor = "brown"
        document.getElementById("click").innerHTML = "Brown"
    }
    else if(y==9)
    {
        document.getElementById("box").style.backgroundColor = "cyan"
        document.getElementById("click").style.backgroundColor = "cyan"
        document.getElementById("click").innerHTML = "Cyan"
    }
    else{
        document.getElementById("box").innerHtml = "Wrong input"
    }
    
}
