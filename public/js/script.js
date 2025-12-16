// Arreglo de notas de estudiantes
let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

// Función para procesar las evaluaciones de los estudiantes
function procesarEvaluaciones() {
    // Contadores para cada categoría
    let contadorAprobados = 0;
    let contadorSupletorio = 0;
    let contadorReprobados = 0;
    
    // Variable para la suma total de notas
    let sumaNotas = 0;
    
    // Recorrer el arreglo de notas
    notas.forEach(nota => {
        // Sumar la nota al total
        sumaNotas += nota;
        
        // Clasificar las notas según los rangos
        if (nota >= 7 && nota <= 10) {
            // Aprobado: de 7 a 10
            contadorAprobados++;
        } else if (nota >= 5 && nota <= 6) {
            // Supletorio: de 5 a 6
            contadorSupletorio++;
        } else if (nota >= 0 && nota <= 4) {
            // Reprobado: de 0 a 4
            contadorReprobados++;
        }
    });
    
    // Calcular el promedio general
    const promedioGeneral = sumaNotas / notas.length;
    
    // Determinar el estado del curso
    let estadoCurso;
    if (promedioGeneral >= 7) {
        estadoCurso = "Aprobado";
    } else {
        estadoCurso = "En Riesgo";
    }
    
    // Mostrar los resultados en los inputs
    document.getElementById("estudiante_aprobado").value = contadorAprobados;
    document.getElementById("estudiante_supletorio").value = contadorSupletorio;
    document.getElementById("estudiante_reprobado").value = contadorReprobados;
    document.getElementById("estudiante_promedio").value = promedioGeneral.toFixed(2);
    document.getElementById("estado_curso").value = estadoCurso;
}

// Agregar evento al botón para mostrar estudiantes evaluados
document.addEventListener("DOMContentLoaded", function() {
    const botonMostrar = document.getElementById("mostrar_estudiantes_evaluados");
    
    botonMostrar.addEventListener("click", function() {
        procesarEvaluaciones();
    });
});
