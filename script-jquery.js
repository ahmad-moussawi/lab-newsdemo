const apiUrl = 'https://newsapi.org/v2/everything?apiKey=53be83f3d6704c2382cb1c70c4a42ca5&q=apple&pageSize=10';

$.get(apiUrl).then(data => {

    data.articles.forEach(article => {

        const $img = $('<img>')
            .attr('src', article.urlToImage)
            .attr('alt', article.title);

        $('<div>')
            .addClass('card')
            .css('width', '18rem')
            .html(`                               
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <h4 class="card-title">${article.author}</h5>
                    <p class="card-text">${article.content}</p>
                </div>
        `)
            .prepend($img)
            .appendTo('body');
    })

});