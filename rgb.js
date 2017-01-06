function newgame()
{
	var res=document.querySelector("#result");
	var playa=document.querySelector("#newg");
	playa.innerHTML="NEW COLOURS";
	res.innerHTML="";
	var r=Math.random();
	r=parseInt(r*1000)%256;
	var g=Math.random();
	g=parseInt(g*1000)%256;
	var b=Math.random();
	b=parseInt(b*1000)%256;
	col=[]
	var excatcol="rgb("+r+", "+g+", "+b+")";
	col[1]="rgb("+r+", "+g+", "+b+")";
	col[2]="rgb("+r%90+", "+g%120+", "+(b%50)+")";
	col[3]="rgb("+r%100+", "+g%166+", "+b%140+")";
	col[4]="rgb("+r%150+", "+g%10+", "+b%255+")";
	col[5]="rgb("+r%200+", "+g%40+", "+b%240+")";
	col[6]="rgb("+r%75+", "+g%170+", "+b%40+")";
	colors=[];
	vc=Math.random();
	c=parseInt(vc*10)%7+1;
	var j=0;
	cols=[];
	for(var i=c;i<=6;i++)
	{
		cols[j]=col[i];
		console.log(i);
		j++;
	}
	for(var i=c-1;i>0;i--)
	{
		cols[j]=col[i];
		console.log(i);
		j++;
		
	}
	var ba=[];
	ba[1]=document.querySelector("#sq1");
	ba[1].style.background=cols[0];
	ba[2]=document.querySelector("#sq2");
	ba[2].style.background=cols[1];
	ba[3]=document.querySelector("#sq3");
	ba[3].style.background=cols[2];
	ba[4]=document.querySelector("#sq4");
	ba[4].style.background=cols[3];
	ba[5]=document.querySelector("#sq5");
	ba[5].style.background=cols[4];
	ba[6]=document.querySelector("#sq6");
	ba[6].style.background=cols[5];
	var rgbs=document.querySelector("#rgbg");
	rgbs.innerHTML="RGB ("+r+", "+g+", "+b+")";
	
	var topbarc=document.querySelector("#topbar");
	ba[1].addEventListener("click",function () {
		ba[1].style.display="none";
		if(cols[0]===excatcol)
		{
				res.innerHTML="You Win";
				topbarc.style.background=excatcol;
				for(var i=1;i<=6;i++)
				{
					ba[i].style.display='block';
					ba[i].style.background=excatcol;
					playa.innerHTML="PLAY AGAIN";
				}
		}	
		else
			res.innerHTML="Try Again";
	})
	ba[2].addEventListener("click",function () {
		ba[2].style.display="none";
		if(cols[1]===excatcol)
		{
				res.innerHTML="You Win";
				topbarc.style.background=excatcol;
				for(var i=1;i<=6;i++)
				{

					ba[i].style.display='block';
					ba[i].style.background=excatcol;
					playa.innerHTML="PLAY AGAIN";

				}

		}
		else
			res.innerHTML="Try Again";
	})
	ba[3].addEventListener("click",function () {
		ba[3].style.display="none";
		if(cols[2]===excatcol)
		{
			res.innerHTML="You Win";
			topbarc.style.background=excatcol;
			for(var i=1;i<=6;i++)
				{
					ba[i].style.display='block';
					ba[i].style.background=excatcol;
					playa.innerHTML="PLAY AGAIN";
				}
		}
		else
			res.innerHTML="Try Again";
	})
	ba[4].addEventListener("click",function () {
		ba[4].style.display="none";
		if(cols[3]===excatcol)
		{
				res.innerHTML="You Win";
				topbarc.style.background=excatcol;
				for(var i=1;i<=6;i++)
				{
					ba[i].style.display='block';
					ba[i].style.background=excatcol;
					playa.innerHTML="PLAY AGAIN";
				}
		}
		else
			res.innerHTML="Try Again";
		}
	)
	ba[5].addEventListener("click",function () {
		ba[5].style.display="none";
		if(cols[4]===excatcol)
		{
				res.innerHTML="You Win";
				topbarc.style.background=excatcol;
				for(var i=1;i<=6;i++)
				{
					ba[i].style.display='block';
					ba[i].style.background=excatcol;
					playa.innerHTML="PLAY AGAIN";
				}
		}
		else
				res.innerHTML="Try Again";
	})
	ba[6].addEventListener("click",function () {
		ba[6].style.display="none";
		if(cols[5]===excatcol)
		{
				res.innerHTML="You Win";
				topbarc.style.background=excatcol;
				for(var i=1;i<=6;i++)
				{
					ba[i].style.display='block';
					ba[i].style.background=excatcol;
					playa.innerHTML="PLAY AGAIN";
				}
		}
		else
				res.innerHTML="Try Again";
	})
	playa.addEventListener("click",function (){
		newgame();
	})
}
newgame();




