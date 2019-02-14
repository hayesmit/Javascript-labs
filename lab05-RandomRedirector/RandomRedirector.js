let websites = ["https://www.mmamania.com/ufc-fight-cards", "https://www.youtube.com/", "https://www.amazon.com/",
"https://portland.craigslist.org/", "https://cookieandkate.com/"];
let site = websites[Math.floor(Math.random()*websites.length)];
//let nextPage = document.createElement("a");
//nextPage.href = site;
//nextPage.innerText = "Go Here";
//body.appendChild(nextPage);
//
//document.getElementById('body').nextPage;


var timeleft = 5;
var downloadTimer = setInterval(function(){
    document.getElementById("countdown").innerHTML = timeleft;
    timeleft -= 1;
    if(timeleft === 0){
         clearInterval(downloadTimer);
         window.location.replace(site);
         console.log(timeleft);
  }
}, 1000);

//function wait(ms){
//   var start = new Date().getTime();
//   var end = start;
//   while(end < start + ms) {
//     end = new Date().getTime();
//  }
//////}
//if (timeleft === 0){
//    window.location.replace(site);}


