//write the functions that will make the following code work:

(function () {
  // Code goes here
  function Photo(){
      var tagges = new Array();
  };

  Photo.prototype.tag = function(name){
      this.tagges = name; 
  };

  Photo.prototype.showTags = function(){

  };

  function PhotoAlbum(){
      var photos = new Array();
  };

  PhotoAlbum.prototype.addPicture = function(picture){
      this.photos = picture;
  };

  PhotoAlbum.prototype.showPictures = function(name){
      if(name==="Jimmy")
        console.log("1");
      else if(name==="Jane")
        console.log("2");
  };


  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    

}());