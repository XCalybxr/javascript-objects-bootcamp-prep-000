var playlist = {Michael: "ABC"};
function updatePlaylist(playlist,artistName,songTitle){
 //Object.assign({},playlist,{artistName: songTitle})
 playlist[artistName] = songTitle
 return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete artistName.playlist;
  return playlist
}