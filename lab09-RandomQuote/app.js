let target = document.getElementById("target");
let getQuoteButton = document.getElementById("quote-button");
let textTarget = document.getElementById("textTarget");
let currentPage =1;
let nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click", function(e){
currentPage +=1;
doIt();
});
let previousPage = document.getElementById("previousPage");
previousPage.addEventListener("click", function(e){
currentPage -=1;
doIt();
});

getQuoteButton.addEventListener("click", function(e) {
currentPage =1;
doIt();
});
function doIt(){
        let req = new XMLHttpRequest();
        req.addEventListener("progress", function(e) {
        console.log(e.loaded);
        target.innerText = "Loading...";
    });
    req.addEventListener("error", function(e) {
        console.log(e.status);
        target.innerText = "Cannot load quote. Try again later!";
    });
    req.addEventListener("load", function(e) {
        textTarget.innerHTML = "";
//        console.log(req.responseText);
        let response = JSON.parse(req.responseText);
        console.log(response);
        response.quotes.forEach(function(quote){
            let resultHTML = `
            <p>${quote.body}</p>
            <p><i><a href="${quote.url}">${quote.author}</a></i></p>
            `
            if (response.last_page === true){
                nextPage.setAttribute('disabled', true);
            }
            if (response.last_page === false){
                nextPage.removeAttribute('disabled');
            }
            if (currentPage > 1){
                previousPage.removeAttribute('disabled');
            }
            if (currentPage === 1){
                previousPage.setAttribute('disabled', true)
            }
            let quoteDiv = document.createElement('div');
            quoteDiv.className="item";
            quoteDiv.innerHTML = resultHTML;
            textTarget.appendChild(quoteDiv);
        })

    });
    let url = `https://favqs.com/api/quotes?filter=${encodeURIComponent(target.value)}&page=${currentPage}`;
//&page=counter
  req.open("GET", url);
  req.setRequestHeader("Authorization", 'Token token="4b3888849b4ef0bec9f217ffd39869a9"');
  req.send()
};

