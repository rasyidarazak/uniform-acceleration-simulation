$('#calculate').on('click', function(){
	let car = document.getElementById("car");
	let carDistance = 0;
	$('#displacement').removeClass('font-weight-bold text-dark');
	$('.car').removeClass('jalan');

	let initialVelocity = document.getElementById('initial-velocity').value;
	let acceleration = document.getElementById('acceleration').value;
	let time = document.getElementById('time').value;
	let displacement = document.getElementById('displacement').value;
	if (initialVelocity < 0 || time < 0) {
		alert("Initial Velocity or Time can't be negative!");
		return 0;
	}
	displacement = (initialVelocity*time) + (1/2*acceleration)*(Math.pow(time,2));
	
	if (displacement>1100) {
		carDistance = 1100;
	}else{
		carDistance = displacement;
	}
	
	car.style.transform = "translate("+carDistance+"px, 2px)";
	car.style.transition = "1.5s";

    let waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
       let x = displacement*2;
       document.getElementById('displacement').value = Math.floor(Math.random()*x);
    }, 100)

    setTimeout(function(){
        displacement = (initialVelocity*time) + (1/2*acceleration)*(Math.pow(time,2));
		document.getElementById('displacement').value = displacement;
		$('#displacement').toggleClass('font-weight-bold text-dark');
    },1000);
});

$('#reset').on('click', function(){
	$('#displacement').removeClass('font-weight-bold text-dark');
	car.style.transform = "translate(0px, 2px)";
	car.style.transition = ".5s";
	initialVelocity = "";
	acceleration = "";
	time = "";
	displacement = 0;
	document.getElementById('initial-velocity').value = initialVelocity;
	document.getElementById('acceleration').value = acceleration;
	document.getElementById('time').value = time;
	document.getElementById('displacement').value = displacement;
});