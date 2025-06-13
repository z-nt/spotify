


import song from "./data.js";

function showAllSongs (data){

	if(!data){
		console.log("there is no song to play");
		return 1; 
	}else{
		for(var i = 0 ; i < data.length ; i++){
			console.log(data[i]);
			return 0 ;
		}
	}
}

function showAlbums(artist) {
	const list = song;
	if(!artist){
	  console.log("please insert your artist name");
		return 1 ;
	}else{
	  const artistSongs = list.map(artist => {
		console.log(artist.albums.name);
		return 0;
	  });
	}
}

function showAlbumsSong(albumsName){
	const list = song;
	if(!albumsName){
		console.log("what album you need ?");
		return 1;
	}else{
		switch(albumsName){
				
			case "amir":		
				var getMusic = list[0].albums.songs.filter(
				song => song.albumsname === "amir"
					);
				console.log(getMusic);
			break;
			case "tatality":		
				var getMusic = list[0].albums.songs.filter(
				song => song.albumsname === "tatality"
					);
				console.log(getMusic);
			break;

			case "boht":		
				var getMusic = list[0].albums.songs.filter(
				song => song.albumsname === "boht"
					);
				console.log(getMusic);
			break;

			case "angel":		
				var getMusic = list[0].albums.songs.filter(
				song => song.albumsname === "angel"
					);
				console.log(getMusic);
			break;



		}
	}
}


function main (){
  // showAllSongs(song);
 //  showAlbums("tataloo");
     showAlbumsSong("tatality");

}

main();




