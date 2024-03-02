function calcularAreaTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
    return "No es un triángulo válido";
    }
    const semiperimetro = (a + b + c) / 2;
    const area = Math.sqrt(semiperimetro * (semiperimetro - a) *
    (semiperimetro - b) * (semiperimetro - c));
    return area;
    }
    const ladoA = 5;
    const ladoB = 6;
    const ladoC = 7;
    const area = calcularAreaTriangulo(ladoA, ladoB, ladoC);
    console.log(`El área del triángulo es: ${area}`);