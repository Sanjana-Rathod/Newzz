// https://gnews.io/api/v4/search?q=example&token=b0a9988faba1f77a925b56fbb9392e9a

console.log("ok");

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=25b093c6d172120a77f0ff64f05d74a4`, true);

let newsnow = document.getElementById('container');

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newslist = "";
        articles.forEach(function (element, index) {
            let news = `  <div id="newsbox" data-aos="zoom-in">
                            <div id="image" > <img src="${element["image"]}"></img> </div>
                            <span class="info">
                            <div id="datenow" >${element["publishedAt"]}</div>
                            <div class="title"${element["title"]} </div> 
                            <p class="des"> ${element["description"]} </p>
                            <p class "content">${element["content"]} </p>
                            <a href="${element["url"]}" target="_blank"><button class="btn">Read more </button></a>
                         </span>
                        </div>
                        <br> <br>`;
            newslist += news;

        })
        newsnow.innerHTML = newslist;

    }
}


xhr.send()

