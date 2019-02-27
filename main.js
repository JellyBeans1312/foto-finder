// var create = document.querySelector('button');
// var input = document.querySelector('input');
// var photoGallery = document.querySelector('.images');
// var allPhotos = JSON.parse(localStorage.getItem('photos')) || [];
// var reader = new FileReader();

// window.addEventListener('load', appendPhotos);
// create.addEventListener('click', loadImg);

// function appendPhotos() {
//   allPhotos.forEach(function (photo) {
//     photoGallery.innerHTML += `<img src=${photo.file} />`
//   })
// }

// function loadImg() {
//   // console.log(input.files[0])
//   if (input.files[0]) {
//     reader.readAsDataURL(input.files[0]); 
//     reader.onload = addPhoto
//   }
// }

// function addPhoto(e) {
//   // console.log(e.target.result);
//   var newPhoto = new Photo(Date.now(), e.target.result);
//   photoGallery.innerHTML += `<img src=${e.target.result} />`;
//   allPhotos.push(newPhoto)
//   newPhoto.saveToStorage(imagesArr)
// }

// var titleInput = document.querySelector('#title-input');
// var bodyInput = document.querySelector('#body-input');
// var addPhotoBtn = document.querySelector('#add-photo');
// var photoSection = document.querySelector('.photos');
// var allPhotos = JSON.parse(localStorage.getItem('stringIdeas')) || [];
// var searchBtn = document.querySelector('#search-btn');
// var searchInput = document.querySelector('#search');

var create = document.getElementById('create');
var photoFile = document.getElementById('file');
var photoGallery = document.querySelector('.images');
var title = document.getElementById('title');
var body = document.getElementById('body');
var searchInput = document.querySelector('.search-input');
var showBtn = document.getElementById('show-more');
var cardContainer = document.querySelector('.photos-area');
var favoritesToggle = document.getElementById('favorites-toggle')
var allPhotos = JSON.parse(localStorage.getItem('stringifiedPhotos')) || [];
var reader = new FileReader();



window.addEventListener('load', appendPhotos(allPhotos), findAmountFavorites());
create.addEventListener('click', loadPhotos);



function loadPhotos(e) {
  e.preventDefault();
  if (photoFile.files[0]) {
    reader.readAsDataURL(photoFile.files[0]); 
    reader.onload = addPhoto
  }
}

function addPhoto() {
  var title = titleInput.value;
  var body = bodyInput.value;
  var id = Date.now();
  var newPhoto = new Photo(id, title, image);
  displayPhoto(newPhoto);
  allPhotos.push(newPhoto);
  newPhoto.saveToStorage();
  clearInputFields();
}

function displayPhoto(photoObj) {
  var photoCard = `
                  <article class="photo-card" data-id="${photoObj.id}">
                    <h2 class="photo-card-title photo-card-text" contenteditable="true">${photoObj.title}</h2>
                    <img class="photo-card-image" src="${photoObj.image}">
                    <h3 class="photo-card-body" contenteditable="true">${photoObj.body}</h3>
                    <div class="-photo-card-buttons">
                      <img src="assets/delete.svg">
                      <img src="assets/favorite.svg>
                    </div>
                  </article>
                    `;
  photoSection.insertAdjacentHTML('afterbegin', photoCard);

}

function clearInputFields() {
  titleInput.value = '';
  bodyInput.value = '';
}





























