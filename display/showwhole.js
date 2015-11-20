		colorArray=new Array();
		LOGOwidth=0;
		LOGOheigh=0;
		newimagewidth=0;
		newimageheigh=0;
		pixsizes=10;
		colorData=new Array();
		thiscolorCode=new Array();
		widthpiece=0;
		heighpiece=0;
		var c;
		Color = function (red, green, blue, alpha) {
			this.r = red;
			this.g = green;
			this.b = blue;
			this.a = alpha || 255.0;
		};
		$(function() {
			c=document.getElementById('myCanvas');
			c.addEventListener('touchstart', function(event){
					event.preventDefault();
					var p = getTouchPosition(event.touches[0]);
					showXY(p);
			}, false);

			c.addEventListener('click', function(e){
				var p = getEventPosition(e);
				showXY(p);
			}, false);
			/*
			c.addEventListener('touchstart', function(e){
				var p = getTouchPosition(e);
				showXY(p);
			}, false);
			c.addEventListener('touchmove', function(event){
				$.each(event.touches, function(i, touch) {
					var p = getEventPosition(touch);
					showXY(p);
				});
			});

			c.addEventListener('touchmove', function(event){
				event.preventDefault();
					var p = getTouchPosition(event.touches[0]);
					showXY(p);
			});
		*/
			load(0);
		});
		function load(id){
			var c=document.getElementById('myCanvas');
			PhotoUtil.loadimage();
			thiscolorCode=new Array();
			if(id!=0){
				LOGOwidth=LOGOwidth/widthpiece;
				LOGOheigh=LOGOheigh/heighpiece;
				colorData=eval("pieceData"+id);
			}
			newimagewidth=LOGOwidth*10;
			newimageheigh=LOGOheigh*10;
			ColorUtil.initColorArray();
			c.width=newimagewidth;
			c.height=newimageheigh;
			var ctx=c.getContext("2d");
			Draw(ctx);
			Drawborder(ctx);
			storethiscolor(colorData);
			showcolorchoose();
			var maxwidth=$("#displayiamge").width();
			var maxheigh=$("#displayiamge").height();
			//pixsizes=newimagewidth/LOGOwidth;
			changesize(maxwidth, maxheigh);
		}
		function changesize(maxWidth, maxHeight){
			var o=$("#myCanvas");
			var w = o.width(),
			h = o.height();
			if(w>maxWidth)
			{
				o.width(maxWidth);
				o.height(maxWidth*h/w);
			}
			if(h>maxHeight)
			{
				o.height(maxHeight);
				o.width(maxHeight*w/h);
			}

		};
		function getEventPosition(ev){
			var x, y;
			if (ev.layerX || ev.layerX == 0) {
				x = ev.layerX;
				y = ev.layerY;
		    }else if (ev.offsetX || ev.offsetX == 0) { // Opera
		    	x = ev.offsetX;
		    	y = ev.offsetY;
		    }

		    return {x: x, y: y};
		}
		function showXY(p){
			var c=$("#myCanvas");
			var w=c.width()/widthpiece;
			var h=c.height()/heighpiece;
			var x=Math.floor(p.x/w);
			var y=Math.floor(p.y/h);
			var page=y*widthpiece+x+1;
			$.session.set('page', page);
			location.href="showimage20.html";
		}

		function getTouchPosition(ev){
			var x, y;
				x = ev.pageX;
				y = ev.pageY;
		    return {x: x , y: y};
		}
		function Draw(ctx){
			for(var i=0;i<newimageheigh/pixsizes;i+=1)
			{
				for(var j=0;j<newimagewidth/pixsizes;j+=1)
				{
					var colorCode=colorData[i*newimagewidth/pixsizes+j];
					ctx.beginPath();
					ctx.rect(j*pixsizes,i*pixsizes,pixsizes-1,pixsizes-1);
					ctx.fillStyle="rgba("+colorArray[colorCode-1].r+", "+colorArray[colorCode-1].g+", "+colorArray[colorCode-1].b+", 1)";
					ctx.fill();
				}
			}
		}
		function Drawborder(ctx){
			var eachwidth=LOGOwidth/widthpiece*pixsizes;
			var eachheigh=LOGOheigh/heighpiece*pixsizes;
			for(var i=0;i<heighpiece;i++){
				for(var k=0;k<widthpiece;k++){
					ctx.beginPath();
					//ctx.rect(eachwidth*k,eachheigh*i,eachwidth*(k+1),eachheigh*(i+1));
					ctx.strokeStyle = "#bb1508";
        			ctx.lineWidth = 8;
					ctx.strokeRect(eachwidth*k,eachheigh*i,eachwidth*(k+1),eachheigh*(i+1));
				}
			}
		}
		function showcolorchoose(){
			var colortable=$("#colortable tbody");
			$("#colortable tbody").empty();
			//colortable.html("");
			var allcolourchoose="<tr id='colorlinenull' class='colorline'>"+
					"<td  class='colorset'></td>"+
					"<td >ALL</td><td id='allcount'></td><td id='allwight'></td></tr>";
			colortable.append(allcolourchoose);
			thiscolorCode.sort()
			for(var i=0;i<thiscolorCode.length;i++){
				var sRgb = "RGB("+colorArray[(thiscolorCode[i])-1].r+", "+colorArray[(thiscolorCode[i])-1].g+", "+colorArray[(thiscolorCode[i])-1].b+")";
					//alert(sRgb);
				var sHexColor = sRgb.colorHex();
				var legocount=countLego(thiscolorCode[i]);
				var eachcolor="<tr id='colorline"+thiscolorCode[i]+"' class='colorline');'>"+
				"<td class='colorset' style='background-color:"+sHexColor+";'></td>"+
				"<td >"+thiscolorCode[i]+"</td><td>"+legocount+"</td><td>"+(Math.floor(legocount*0.028*1000)/1000)+"</td></tr>";
				$("#allcount").text(LOGOwidth*LOGOheigh);
				$("#allwight").text(Math.floor(LOGOwidth*LOGOheigh*0.028*1000)/1000);
				colortable.append(eachcolor);
			}
		}
		function countLego(colorCode){
			var sum=0;
			for(var i=0;i<colorData.length;i++){
				if(colorData[i]==colorCode){
					sum++;
				}
			}
			return sum;
		}
		function back(){
			location.href="../index.html";
		}
