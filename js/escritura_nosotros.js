const typed = new Typed('.typed', {
    /* strings:[
        '<i class="descripcion__typed"></i>Gato</i>', 
        '<i class="descripcion__typed">Perro</i>', 
        '<i class="descripcion__typed">Conojo</i>', 
        '<i class="descripcion__typed">Pez</i>'], */


    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 400, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 20000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '<p class="modificar"></p> ', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato


});