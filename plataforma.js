const { spawnSync } = require("child_process");

function ejecutar(funcion) {

    const resultado = spawnSync(
        "python",
        ["plataforma.py", funcion],
        { encoding: "utf-8" }
    );

    return resultado.stdout.trim();
}

class Plataforma {

    constructor() {

    }

    sistema() {
        return ejecutar("sistema");
    }

    arquitectura() {
        return ejecutar("arquitectura");
    }

    user() {
        return ejecutar("user");
    }

    procesador() {
        return ejecutar("procesador");
    }
    crear_carpeta(nombre) {
        const resultado = spawnSync(
            "python",
            ["plataforma.py", "makedir", nombre],
            { encoding: "utf-8" }
        );
        return resultado.stdout.trim();
    }
}
module.exports = Plataforma;