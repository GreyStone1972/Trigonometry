window.addEventListener('DOMContentLoaded', function(){

'use strict'

let data = document.getElementById('corner'),
	sinus = document.getElementById('sin'),
	cosinus = document.getElementById('cos'),
	tangens = document.getElementById('tg'),
	cotangens = document.getElementById('ctg'),
	startBtn = document.getElementById('start'),
	stopBtn = document.getElementById('stop');




	
startBtn.addEventListener('click', function(){	

	let degr = data.value,
		x = degr * (Math.PI / 180);
		

	
	if(isNaN(data.value) || data.value == "" || data.value == null){
		sinus.value = "Enter the angle";
		cosinus.value = "Enter the angle";
		tangens.value = "Enter the angle";
		cotangens.value = "Enter the angle";
	}else{
		let a = Math.sin(x),
			b = Math.cos(x),
			c = Math.tan(x),
			d = Math.atan(x);
	
		sinus.value = a.toFixed(5);
		cosinus.value = b.toFixed(5);
		tangens.value = c.toFixed(5);
		cotangens.value = d.toFixed(5);
	}
});

stopBtn.addEventListener('click', function(){
	data.value = "";
	sinus.value = "";
	cosinus.value = "";
	tangens.value = "";
	cotangens.value = "";
	
});

});