const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const baseUrl = "https://rickandmortyapi.com/api/character/1234";
const charUrl = `${baseUrl}character/`;
const idDetailsUrl = `${charUrl}${id}`;

fetch(baseUrl)
   .then(function(response) {
       return response.json();
   })
   .then(function(json) {
       newValue(json);
   })
   .catch(function(error) {
       document.location.href = "error.html";
   });

   function newValue(json) {
       const imageClass = document.querySelector(".details-image");
       imageClass.src = result.image;
       imageClass.alt = result.name;
   }