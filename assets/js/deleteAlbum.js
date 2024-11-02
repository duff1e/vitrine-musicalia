import { listAlbums, ulAlbums } from "./listAlbums.js";

async function deleteAlbum(id) {
    try {
        const response = await fetch(`http://localhost:3000/albums/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Erro ao tentar excluir o álbum");
        }

        return await response.json();
    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}

function addDeleteEventListeners() {
    const deleteIcons = document.querySelectorAll(".icon__trash");
    deleteIcons.forEach(icon => {
        icon.addEventListener("click", async () => {
            const id = icon.getAttribute("data-id");

            try {
                await deleteAlbum(id);
                ulAlbums.innerHTML = '';
                await listAlbums();
            } catch (error) {
                alert(error);
            }
        });
    });
}

export { addDeleteEventListeners };