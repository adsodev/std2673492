const tipoDeArgumento = argumento => {
    
    const tipo = typeof argumento;
    
    const diccionario = {
        "object": "objeto",
        "boolean": "booleano",
        "function": "función",
        "number": "número",
        "string": "cadena",
        "undefined": "undefined",
    };

    return diccionario[tipo];
};


const valores = ["Luis", 12312, {}, undefined, null, []];
for (const variable of valores) {
    const tipo = tipoDeArgumento(variable);
    console.log(`El tipo de ${variable} es ${tipo}`);
}