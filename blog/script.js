// Array para armazenar os posts
let posts = [];

// Função para exibir os posts na tela
function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ''; // Limpa a tela

    // Exibe cada post
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="editPost(${index})">Editar</button>
            <button onclick="deletePost(${index})">Excluir</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Função para criar um novo post
function createPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        posts.push({ title, content });
        document.getElementById("title").value = ''; // Limpa o campo de título
        document.getElementById("content").value = ''; // Limpa o campo de conteúdo
        displayPosts(); // Atualiza a lista de posts
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

// Função para editar um post
function editPost(index) {
    const post = posts[index];
    
    const newTitle = prompt("Editar título", post.title);
    const newContent = prompt("Editar conteúdo", post.content);
    
    if (newTitle !== null && newContent !== null) {
        posts[index] = { title: newTitle, content: newContent };
        displayPosts(); // Atualiza a lista de posts
    }
}

// Função para excluir um post
function deletePost(index) {
    if (confirm("Você tem certeza que deseja excluir este post?")) {
        posts.splice(index, 1);
        displayPosts(); // Atualiza a lista de posts
    }
}

// Exibe os posts na primeira carga
displayPosts();
