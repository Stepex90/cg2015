//implement a MusicBox object that should make the following code work well:

(function() {
// Write your code here  
  function MusicBox(){
    
    var album=new Album();
      MusicBox.prototype.addAlbum=function(album){
        this.album=album;
      };

 /*    MusicBox.prototype.favoriteAlbum=function(){
        console.log("dentro favoriteAlbum ");
        for (var album in box){
        if (album.favorite === 1)
          console.log("dentro if");
          return album.artista+album.titolo;
        }
      };
*/
  };

  function Album(artista , titolo){
      
      this.artista=artista;
      this.titolo=titolo;
      this.favorite=0;
      
        Album.prototype.play = function(){
        console.log("Playing artista: " + this.artista + " - song: " + this.titolo + " - favorite: "+ this.favorite);
    };

  } ;
    

  var box = new MusicBox();
  var a1 = new Album("The Who", "Tommy");
  var a2 = new Album("Tom Waits", "Closing Time");
  var a3 = new Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  console.log("set del preferito");
  a1.favorite=1; //set del favorite album
  a1.play() ;

  //favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  //console.log("favorite album is " + favorite); 
}());
