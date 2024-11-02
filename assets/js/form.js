import { apiConnection } from "./connection.js";

const form = document.getElementById("form-albums");

async function createAlbum(event) {
    event.preventDefault();

    const nomeAlbum = document.querySelector("[data-nome]").value;
    const nomeArtista = document.querySelector("[data-artista]").value;
    const preco = document.querySelector("[data-preco]").value;
    const urlImagem = document.getElementById("url__vinyl").value;

    try {
        await apiConnection.postAlbum(nomeAlbum, nomeArtista, preco, urlImagem);
        form.reset();
    } catch (e) {
        console.error("Erro ao cadastrar álbum:", e);
        alert(e.message);
    }

    
}

form.addEventListener("submit", event => createAlbum(event));