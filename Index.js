//MOSTRAR OPCIONES DE ACTUALIZAR Y ELIMINAR PARA ELEMENTOS DE LISTAS ADMIN.
function mostrarOpciones() {
  let elemento = document.querySelectorAll(".swipe-item");

  elemento.forEach((e) => {
    e.addEventListener("click", function () {
      const iconoEditar = e.querySelector(".reveal-left");
      const iconoEliminar = e.querySelector(".reveal-right");

      if (iconoEditar && iconoEliminar) {
        //transicion solo una vez. Sin reiniciar cada click.
        if (!iconoEditar.style.transition && !iconoEliminar.style.transition) {
          iconoEditar.style.transition = "opacity 0.1s ease-in";
          iconoEliminar.style.transition = "opacity 0.1s ease-in";
        }
        iconoEditar.style.opacity =
          iconoEditar.style.opacity === "1" ? "0" : "1";
        iconoEliminar.style.opacity =
          iconoEliminar.style.opacity === "1" ? "0" : "1";
      }
    });
  });
}

let btnCerrarSesionChico = document.querySelector(".config-chico");
let btnCerrarSesionGrande = document.querySelector(".config-grande");

let opcionCerrarSesion = document.getElementById("opcionCerrarSesion");

//MOSTRAR OPCION CERRAR SESION.

function mostrarCerrarSesion(btnCerrarSesion) {
  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener("click", function (e) {
      e.stopPropagation();

      if (opcionCerrarSesion.style.visibility === "hidden") {
        opcionCerrarSesion.style.visibility = "visible";
      } else {
        opcionCerrarSesion.style.visibility = "hidden";
      }
    });
  }
}

function ActualizarBtnCerrarSesion() {
  let btnCerrarSesion = document.getElementById("btn-config");
  mostrarCerrarSesion(btnCerrarSesion);
}

document.addEventListener("click", function (e) {
  if (opcionCerrarSesion.style.visibility == "visible") {
    opcionCerrarSesion.style.visibility = "hidden";
  }

  if (e.target == btnCerrarSesionChico) {
    btnCerrarSesionGrande.id = "";
    btnCerrarSesionChico.id = "btn-config";
    ActualizarBtnCerrarSesion();
  } else if (e.target == btnCerrarSesionGrande) {
    btnCerrarSesionGrande.id = "btn-config";
    btnCerrarSesionChico.id = "";
    ActualizarBtnCerrarSesion();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  mostrarOpciones();
  ActualizarBtnCerrarSesion();
});

//EFECTO DE SELECCIONADO PARA OPCIONES DE GRID
// function cambiarColorAlSeleccionar() {
//   let opciones = document.querySelectorAll(".opcion");

//   opciones.forEach((e) => {
//     e.addEventListener("click", function () {
//       e.classList.add(".opcion-seleccionada");
//       console.log("jk");
//     });
//   });
// }
