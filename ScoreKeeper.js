var p1Score = 0;
var p2Score = 0;
var max = 5;
var addP1 = document.querySelector("#P1");
var addP2 = document.querySelector("#P2");
var reset = document.querySelector("#Reset");
var number = document.querySelector("#Max")

function checkScore()
{
	if(p1Score >= max)
	{
		addP1.removeEventListener("click",addP1Score);
		addP2.removeEventListener("click",addP2Score);
		getResult(document.querySelector("#score1"));
	}
	else if (p2Score >= max)
	{
		addP1.removeEventListener("click",addP1Score);
		addP2.removeEventListener("click",addP2Score);
		getResult(document.querySelector("#score2"));
	}

}

function getResult(element){
	element.style.color = "green";
}

function addP1Score(){
	p1Score+=1;
	document.querySelector("#score1").innerHTML = p1Score;
	console.log(p1Score);
	checkScore();
}

function addP2Score(){
	p2Score+=1;
	document.querySelector("#score2").innerHTML = p2Score;
	checkScore();
}

function updateMax(){
	max = document.querySelector("#Max").value;
	document.querySelector("#maxNumber").innerHTML = max;
	console.log(max);
}

addP1.addEventListener("click",addP1Score);
addP2.addEventListener("click",addP2Score);
number.addEventListener("change",updateMax)
reset.addEventListener("click",function(){
	p1Score = 0;
	p2Score = 0;
	addP1.addEventListener("click",addP1Score);
	addP2.addEventListener("click",addP2Score);
	document.querySelector("#score2").innerHTML = p2Score;
	document.querySelector("#score2").style.color = "black";
	document.querySelector("#score1").innerHTML = p1Score;
	document.querySelector("#score1").style.color = "black";
})