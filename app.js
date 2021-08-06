function mouseCoords(e) {
    // Для браузера IE
    if (document.all)  { 
      x = event.x + document.body.scrollLeft; 
      y = event.y + document.body.scrollTop; 
    // Для остальных браузеров
    } else {
      x = e.pageX; // Координата X курсора
      y = e.pageY; // Координата Y курсора
    }
    document.getElementById("coords").innerHTML = "X : " + x + ", Y : " + y;
   }