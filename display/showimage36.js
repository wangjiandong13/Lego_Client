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
					var p = getTouchPosition(touch);
					showXY(p);
				});
			});
			/*
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
			// if(id!=0){
			// 	LOGOwidth=LOGOwidth/widthpiece;
			// 	LOGOheigh=LOGOheigh/heighpiece;
			// 	colorData=eval("pieceData"+id);
			// }
			newimagewidth=LOGOwidth*10;
			newimageheigh=LOGOheigh*10;
			ColorUtil.initColorArray();
			c.width=newimagewidth;
			c.height=newimageheigh;
			var ctx=c.getContext("2d");
			Draw(ctx);
			storethiscolor(colorData);
			showcolorchoose();
			var maxwidth=$("#displayiamge").width();
			var maxheigh=$("#displayiamge").height();
			//pixsizes=newimagewidth/LOGOwidth;
			changesize(maxwidth, maxheigh);
		}
		function back(){
			location.href="../index.html";
		}
		function changesize(maxWidth, maxHeight){
			var o=$("#myCanvas");
			var w = o.width(),
				h = o.height();
			if(w>h){
				o.width(maxWidth);
				o.height(maxWidth*h/w)
			}else{
				o.height(maxHeight);
				o.width(maxHeight*w/h);
			}
		};
		//得到点击的坐标

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
		function hideimage(code){
			var c=document.getElementById('myCanvas');
			var ctx=c.getContext("2d");
			//newimagewidth=$("#myCanvas").width();
			//newimageheigh=$("#myCanvas").height();
			//ctx.clearRect(0,0,$("#myCanvas").width(),$("#myCanvas").height());
			c.height=c.height;
			//pixsizes=newimagewidth/LOGOwidth;
			//ctx.scale(3,3);
			for(var i=0;i<LOGOheigh;i+=1)
			{
				for(var j=0;j<LOGOwidth;j+=1)
				{
					var colorCode=colorData[i*LOGOwidth+j];
					//alert(sRgb);
					ctx.beginPath();
					ctx.rect(j*pixsizes,i*pixsizes,pixsizes-1,pixsizes-1);
					if(code==null)
					{
						ctx.fillStyle="rgba("+colorArray[colorCode-1].r+", "+colorArray[colorCode-1].g+", "+colorArray[colorCode-1].b+", 1)";
					}
					else{
						if(code!=colorCode){
							if(code==28||code==43||code==42){
								ctx.fillStyle="rgba(0,0,0,1)";
							}else{
								ctx.fillStyle="rgba("+colorArray[colorCode-1].r+", "+colorArray[colorCode-1].g+", "+colorArray[colorCode-1].b+", .1)";
							}
						}
						else{
							ctx.fillStyle="rgba("+colorArray[colorCode-1].r+", "+colorArray[colorCode-1].g+", "+colorArray[colorCode-1].b+", 1)";
						}
					}
					ctx.fill();
				}
			}

			$("#colortable tr").each(function(){
				$(this).css("background-color","transparent");
			});
			$("#colorline"+code).css("background-color","white");
			var choosedcolor = document.getElementById("colorline"+code);
			choosedcolor.scrollIntoView();
		}
		function showcolorchoose(){
			var colortable=$("#colortable tbody");
			$("#colortable tbody").empty();
			//colortable.html("");
			var allcolourchoose="<tr id='colorlinenull' class='colorline' onclick='hideimage(null);'>"+
					"<td  class='colorset'></td>"+
					"<td >ALL</td><td id='allcount'></td><td id='allwight'></td></tr>";
			colortable.append(allcolourchoose);
			thiscolorCode.sort()
			for(var i=0;i<thiscolorCode.length;i++){
				var sRgb = "RGB("+colorArray[(thiscolorCode[i])-1].r+", "+colorArray[(thiscolorCode[i])-1].g+", "+colorArray[(thiscolorCode[i])-1].b+")";
					//alert(sRgb);
				var sHexColor = sRgb.colorHex();
				var legocount=countLego(thiscolorCode[i]);
				var eachcolor="<tr id='colorline"+thiscolorCode[i]+"' class='colorline' onclick='hideimage("+thiscolorCode[i]+");'>"+
				"<td class='colorset' style='background-color:"+sHexColor+";'></td>"+
				"<td >"+thiscolorCode[i]+"</td><td>"+legocount+"</td><td>"+(Math.floor(legocount*0.028*1000)/1000)+"</td></tr>";
				$("#allcount").text(LOGOwidth*LOGOheigh);
				$("#allwight").text(Math.floor(LOGOwidth*LOGOheigh*0.028*1000)/1000);
				colortable.append(eachcolor);
			}
		}
		function highlightLego(x,y){
			var c=document.getElementById('myCanvas');
			var ctx=c.getContext("2d");
			ctx.beginPath();
			var clickcolor=colorData[((y-1)*LOGOwidth)+x-1];
			ctx.clearRect((x-1)*pixsizes,(y-1)*pixsizes,pixsizes-1,pixsizes-1);
			ctx.rect((x-1)*pixsizes,(y-1)*pixsizes,pixsizes-1,pixsizes-1);
			ctx.fillStyle="rgba("+(255-colorArray[clickcolor-1].r)+", "+colorArray[clickcolor-1].g+", "+colorArray[clickcolor-1].b+", 1)";
			ctx.fill();
			ctx.beginPath();
			ctx.clearRect((x-1)*pixsizes+1,(y-1)*pixsizes+1,pixsizes-3,pixsizes-3);
			ctx.rect((x-1)*pixsizes+1,(y-1)*pixsizes+1,pixsizes-3,pixsizes-3);
			ctx.fillStyle="rgba("+colorArray[clickcolor-1].r+", "+colorArray[clickcolor-1].g+", "+colorArray[clickcolor-1].b+", 1)";
			ctx.fill();
		}

		function search(){
			var inputx= new Number($("#inputx").val())
			var inputy=new Number($("#inputy").val());
			if(inputx>LOGOwidth){alert("x is larger than the width");return}
			if(inputy>LOGOheigh){alert("y is larger than the height");return}
			var clickcolor=colorData[((inputy-1)*LOGOwidth)+inputx-1];
			$("#xtext").val(inputx);
			$("#ytext").val(inputy);
			$("#ColorCodetext").val(clickcolor);
			hideimage(clickcolor);
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
		function showXY(p){
			var everyLegoheight=$("#myCanvas").height()/LOGOheigh;
			var everyLegowidth=$("#myCanvas").width()/LOGOwidth;
			var x=Math.floor(p.x/everyLegowidth)+1;
			var y=Math.floor(p.y/everyLegoheight)+1;
			var clickcolor=colorData[((y-1)*LOGOwidth)+x-1];
			$("#xtext").val(x);
			$("#ytext").val(y);
			$("#ColorCodetext").val(clickcolor);
			hideimage(clickcolor);
			highlightLego(x,y);
		}
