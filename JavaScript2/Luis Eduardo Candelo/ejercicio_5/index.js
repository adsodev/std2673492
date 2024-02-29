function areaTriangulo(a, b, c) {
    // Calculamos el semiperímetro
    let s = (a + b + c) / 2;
    
    // Calculamos el área usando la fórmula de Herón
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area;
}

// Se aceptan valores cualquier valor de entrada númerico
let lado1 = prompt("Lado 1");
let lado2 = prompt("Lado 2");
let lado3 = prompt("Lado 3");

let area = areaTriangulo(lado1, lado2, lado3);
console.log(`El área del triángulo con lados ${lado1}, ${lado2}, ${lado3} es:`, area);
