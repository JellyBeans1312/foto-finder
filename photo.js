class Photo {
  constructor(id, title, image, body, favorite = false) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.favorite = favorite;
  }
  saveToStorage(newArr) {
    var stringPhotos = JSON.stringify(newArr);
    localStorage.setItem('stringifiedPhotos', stringPhotos);
  }
  deleteFromStorage(index) {
    allPhtoos.splice(index, 1);
    this.saveToStorage(allPhotos);
  }
  updatePhoto() {

  }
}
