const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    // Abrir el sobre (solo si no está ya abierto)
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
    }
})