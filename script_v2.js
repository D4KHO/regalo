const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    // Abrir el sobre
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        
        if (!envoltura.classList.contains("abierto")) {
            envoltura.classList.add("abierto");
            
            // Mostrar la carta después de que el sobre se abra
            setTimeout(() => {
                carta.classList.add("mostrar-carta");
                
                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                    envoltura.classList.add("desactivar-sobre");
                }, 600);
            }, 700);
        }
      
    } else if (e.target.matches(".contenido") || e.target.matches(".contenido *")) {
        // Cerrar la carta al hacer clic en el contenido
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta");
                envoltura.classList.remove("abierto");
            }, 500);
        }
    } 
})