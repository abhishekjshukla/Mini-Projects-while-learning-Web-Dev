var res=document.querySelector("#result");
var playa=document.querySelector("#newg");
var rgbs=document.querySelector("#rgbg");
var topbarc=document.querySelector("#topbar");
var ba=[];
ba[1]=document.querySelector("#sq1");
ba[2]=document.querySelector("#sq2");
ba[3]=document.querySelector("#sq3");
ba[4]=document.querySelector("#sq4");
ba[5]=document.querySelector("#sq5");
ba[6]=document.querySelector("#sq6");
function colorchange(argu,clrs,excatcol)
{
	argu.style.display="none";
	if(clrs===excatcol)
	{
			console.log(argu,clrs,excatcol);
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
function newgame()
{
	for(var i=1;i<=6;i++)
	{
		ba[i].style.display='block';
	}
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
	col[2]="rgb("+Math.abs(r-100)+", "+Math.abs(g-120)+", "+Math.abs(b-50)+")";
	col[3]="rgb("+Math.abs(r-50)+", "+Math.abs(g-200)+", "+Math.abs(b-140)+")";
	col[4]="rgb("+Math.abs(r-150)+", "+Math.abs(g-10)+", "+Math.abs(b-255)+")";
	col[5]="rgb("+Math.abs(r-20)+", "+Math.abs(g-240)+", "+Math.abs(b-24)+")";
	col[6]="rgb("+Math.abs(r-75)+", "+Math.abs(g-170)+", "+Math.abs(b-140)+")";
	vc=Math.random();
	c=parseInt(vc*10)%7+1;
	var j=0;
	cols=[];
	for(var i=c;i<=6;i++)
	{
		cols[j]=col[i];
		j++;
	}
	for(var i=c-1;i>0;i--)
	{
		cols[j]=col[i];
		j++;
	}
	for(var i=1;i<7;i++)
	{
		ba[i].style.background=cols[i-1];
	}	
	rgbs.innerHTML="RGB ("+r+", "+g+", "+b+")";
	ba[1].addEventListener("click",function(){colorchange(ba[1],cols[0],excatcol);});
	ba[2].addEventListener("click",function(){colorchange(ba[2],cols[1],excatcol);});
	ba[3].addEventListener("click",function(){colorchange(ba[3],cols[2],excatcol);});
	ba[4].addEventListener("click",function(){colorchange(ba[4],cols[3],excatcol);});
	ba[5].addEventListener("click",function(){colorchange(ba[5],cols[4],excatcol);});
	ba[6].addEventListener("click",function(){colorchange(ba[6],cols[5],excatcol);});
	playa.addEventListener("click",function (){
		newgame();
	})
	
}
newgame();




