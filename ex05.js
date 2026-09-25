function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        return null;
    }
}

console.log(safeParse('{"nome": "Duda"}'));
console.log(safeParse("texto inválido"));