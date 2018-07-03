var imageID=0;
function changeimage(every_seconds){
    //change the image
    if(!imageID){
        document.getElementById("myimage").src="2.jpg";
        imageID++;
    }
    else{if(imageID==1){
        document.getElementById("myimage").src="3.jpg";
        imageID++;
    }else{if(imageID==2){
        document.getElementById("myimage").src="4.jpg";
        imageID++;
	}else{if(imageID==3){
		document.getElementById("myimage").src="5.jpg";
		imageID++;
	}else{if(imageID==4){
		document.getElementById("myimage").src="6.jpeg";
		imageID=0;
    }}}}}
    //call same function again for x of seconds
    setTimeout("changeimage("+every_seconds+")",((every_seconds)*1000));
}