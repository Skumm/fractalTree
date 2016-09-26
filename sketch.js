var angulo = 0; // 45º

var slider; //Slider para crecimiento del arbol

function setup(){
	createCanvas(600,600)
	slider = createSlider(0, TWO_PI, PI/4, 0.01)
}

function draw(){
	background(51);
	angulo = slider.value()
	stroke(255);
	line(300,height,300,500);
	//movemos el origen del camvas a la posición indicada debajo
	translate(300,height)

	rama(100);
}

function rama(longitud){
	//dibujamos el tronco
	line(0,0,0,-longitud);
	//tras dibujar el tronco, nos desplazamos a la posicion del ultimo punto
	translate(0,-longitud)

	//llamamos a la función para que sea recursiva
	if(longitud > 4){
		//guardo posicion antes de rotar
		push();
		//rotamos 45º hacia la derecha
		rotate(angulo);
		rama(longitud*0.67);

		//vuelvo a la posicion inicial antes de rotar en sentido contrario
		pop();
		//rotamos 45º hacia la izquierda
		rotate(-angulo);
		rama(longitud*0.67);
	}


}
