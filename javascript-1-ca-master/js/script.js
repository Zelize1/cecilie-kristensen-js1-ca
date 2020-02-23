const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
}

document.location.href= "details.html?id=1234";

const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
   .then(function(response) {
       return response.json();
   })
   .then(function(json) {
       createResults(json);
   })
   .catch(function(error) {
       document.location.href = "error.html";
   });
   
function createResults(json) {
    console.dir(json);
};

const pageResults = json.results; 

let html = "";

for (let i = 0; i < pageResults.length; i++); {
    if (pageResults[i].type) {
        console.log(pageResults[i].age);
    } else {
        console.log("Unknown");
    }
};