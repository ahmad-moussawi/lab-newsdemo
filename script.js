const apiUrl = 'https://newsapi.org/v2/everything?apiKey=53be83f3d6704c2382cb1c70c4a42ca5&q=apple&pageSize=10';
fetch(apiUrl)
    .then((response) => response.json())
    .then(data => {

        data.articles.forEach(article => {

            const div = document.createElement('div');

            div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${article.urlToImage}"
                        class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <h4 class="card-title">${article.author}</h5>
                        <p class="card-text">${article.content}</p>
                    </div>
                </div>
            `;

            document.body.appendChild(div);
        })

    });