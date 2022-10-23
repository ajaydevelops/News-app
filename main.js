let category = "sports";
let news;
let sportNewsContent;
let img = document.getElementsByTagName("img")[0];
let title = document.getElementById("title");
let content = document.getElementById("content");
let author = document.getElementById("author");
let date = document.getElementById("date");
let url = document.getElementById("url");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let num = 3;

fetch(`https://inshorts-api-flame.vercel.app/news?category=${category}`)
    .then((res) => res.json())
    .then((data) => {
        news = data;
        console.log(news);
        sportNewsContent = news.data;
        getSportNews();
    });

function getSportNews() {
    img.src = sportNewsContent[num].imageUrl;
    title.innerText = sportNewsContent[num].title;
    content.innerText = sportNewsContent[num].content;
    author.innerText = sportNewsContent[num].author;
    date.innerText = sportNewsContent[num].date;
    url.href = sportNewsContent[num].readMoreUrl;
}

rightBtn.addEventListener("click", () => {
    num = num + 1;
    if (num === sportNewsContent.length) {
        console.log(num);
        num = 0;
        getSportNews();
    } else {
        getSportNews();
    }
});

leftBtn.addEventListener("click", () => {
    num = num - 1;
    if (num === 0) {
        num = sportNewsContent.length - 1;
        getSportNews();
    } else {
        getSportNews();
    }
});
