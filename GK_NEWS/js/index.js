let apiKey = '18ff2ca6b9f44176b0d9fb908534ec72'
// Create an ajax get request
function Latest() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Latest News'
        // console.log(element, index)

        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function Technology() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Technology News'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function Sports() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=Sports&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Sports News'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function Science() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Latest News'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function Business() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=Business&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Business News'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function Entertainment() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=Entertainment&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Entertainment News'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function Science() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=Science&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Science News'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function Health() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=Health&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Health News'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
function topheadlines() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      // console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element, index) {
        document.getElementById('cat').innerHTML = 'Top-Headlines'
        // console.log(element, index)
        let newns = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>Latest News ${index+1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>

        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
        </div>
        </div>`;
        let news = `<div class="card po" style="width: 18rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="img">
        <div class="card-body">
        <h3 class="card-title">${element['title']}</h3>
        <p class="card-text">${element['description']}</p>
        <a href="${element['url']}" class="btn btn-primary">Show More</a>    <br/>         ${element['publishedAt']}
        </div>
        </div>`
        newsHtml += news;
      });
      let latest = document.getElementById('latest')
      latest.innerHTML = newsHtml;

    } else {
      console.log("Some error occured")
    }
  }

  xhr.send()
}
