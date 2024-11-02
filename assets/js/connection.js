async function getData () {
    const connection = await fetch("http://localhost:3000/albums");
    const connectionJson = await connection.json();

    return connectionJson;
}

async function postAlbum(nome, artista, preco, imagem) {
    const connection = await fetch("http://localhost:3000/albums", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: Date.now(),
            nome: nome,
            artista: artista,
            preco: preco,
            imagem: imagem
        })
    });

    if (!connection.ok) {
        throw new Error("Não foi possível cadastrar o álbum!");
    }

    const jsonConnection = await connection.json();
    return jsonConnection;
}

export const apiConnection = {
    getData,
    postAlbum,
}