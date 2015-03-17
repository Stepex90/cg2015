//implement a MusicBox object that should make the following code work well:

(function() {

// Write your code here

/*    Questo per aggirare l'ostacolo del costruttore senza new
      function MusicBox(){
          if(!(this instanceof MusicBox)){
          return new MusicBox;
        }

      }
*/
 
  	function MusicBox(){
  	};

  	MusicBox.prototype.albums = new Array();
  	MusicBox.prototype.k = 0;

	MusicBox.prototype.addAlbum = function(album){
    
        //console.log("k: "+this.k);
        //console.log("addAlbum: "+ album.titolo + album.artista);
        this.albums[this.k] = album;
        //console.log("addAlbum: "+ this.albums[this.k].titolo + this.albums[this.k].artista);
        this.k++;
    };

    MusicBox.prototype.favoriteAlbum = function(){
        var index = 0;
        //	console.log("length "+this.k);
          for(var i=0, j=i+1;i<this.k;i++)
          {
         // 	console.log("prima if: " + this.albums[i].favorite +" "+this.albums[j].favorite)
            if(this.albums[i].favorite>this.albums[j].favorite)
              index=i;
           
         // 	console.log("index: "+index);
          }
        return this.albums[index];
    };

  

    function Album(artista , titolo){
      
      this.artista=artista;
      this.titolo=titolo;
      this.favorite=0;
    
    } ;

    Album.prototype.play = function(){
   
        this.favorite++;
        console.log("Playing artista: " + this.artista + " - song: " + this.titolo + " - favorite: "+ this.favorite);
   
    };

  	
    

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
  a3.play();

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is: " + favorite.titolo); 

}());
