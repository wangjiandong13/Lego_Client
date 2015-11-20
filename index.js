$( document ).ready(function($) {
	PhotoUtil.loadimage();
	if(LOGOwidth==36||LOGOwidth==56){
		location.href="display/showimage36.html"
		
	}
	else{
		location.href="display/showwhole.html"
	}
});