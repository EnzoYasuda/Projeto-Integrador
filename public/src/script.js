function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function searchMusic() {
    const inputBox = document.getElementById("input-box");
    const searchQuery = inputBox.value.toLowerCase();
}

// Simulação de resultados de pesquisa
const musicResults = [
    { id: 1, title: "Yellow", artist: "Coldplay", image: "../../assets/jpg/yellow_coldplay.jpg" },
];

// Função para exibir resultados
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = ""; // Limpa os resultados anteriores

    results.forEach((result) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("search-result");
        resultDiv.style.display = "flex";
        resultDiv.style.alignItems = "center";
        resultDiv.style.marginBottom = "15px";
        resultDiv.style.cursor = "pointer";

        // Quando clicar no resultado, redireciona para a página da música
        resultDiv.addEventListener("click", () => {
            window.location.href = `music.html?id=${result.id}`;
        });

        // Adiciona imagem da música
        const img = document.createElement("img");
        img.src = result.image;
        img.alt = result.title;
        img.style.width = "50px";
        img.style.height = "50px";
        img.style.borderRadius = "5px";
        img.style.marginRight = "15px";
        resultDiv.appendChild(img);

        // Adiciona informações da música
        const infoDiv = document.createElement("div");
        const title = document.createElement("p");
        title.textContent = result.title;
        title.style.margin = "0";
        title.style.fontWeight = "bold";

        const artist = document.createElement("p");
        artist.textContent = result.artist;
        artist.style.margin = "0";
        artist.style.color = "gray";

        infoDiv.appendChild(title);
        infoDiv.appendChild(artist);

        resultDiv.appendChild(infoDiv);
        searchResultsContainer.appendChild(resultDiv);
    });
}

// Inicializa com os resultados simulados
displaySearchResults(musicResults);