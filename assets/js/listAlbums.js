import { apiConnection } from "./connection.js";

export const ulAlbums = document.getElementById("albums__products");

function cardConstructor(id, name, artist, price, image) {
    const album = document.createElement("li");
    album.id = `album-${id}`;

    album.innerHTML = `<figure class="figure__container">
                        <div class="div__img__product">
                            <img src="${image}" alt="" class="img__product">
                        </div>
                        <img src="./assets/img/garbage-trash-svgrepo-com.svg" alt="" class="icon__trash" data-id="${id}"> <!-- Armazena o ID do álbum -->
                        <figcaption>
                            <p class="album__title">${name}</p>
                            <p>${artist}</p>
                            <div class="flex buy">
                                <button class="button__buy">Comprar</button>
                                <p class="album__price">$ ${price}</p>
                            </div>
                        </figcaption>
                    </figure>`;
    return album;
}


async function listAlbums() {
    try {
        const apiList = await apiConnection.getData();
        apiList.forEach(elemento => {
            ulAlbums.appendChild(cardConstructor(elemento.id, elemento.nome, elemento.artista, elemento.preco, elemento.imagem));
        });
    } catch {
        ulAlbums.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a database de álbuns.</h2>`;
    }
}

import { addDeleteEventListeners } from "./deleteAlbum.js";

listAlbums().then(() => {
    addDeleteEventListeners();
});

export { listAlbums }