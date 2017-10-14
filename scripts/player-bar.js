$( document ).ready(function() {
  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').click( function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
  $("button#previous").click( function() {

    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex >= album.songs.length) { return; }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);

  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);

$("#volume-control input").on("input", function (event){
  player.setVolume(event.target.value);
});

setInterval(()=> {
  const currentVolume = player.getVolume();
  const max = player.getMax();
  const percent = (currentVolume / max) * 100;
  $("#volume-control .current-Volume").text( currentVolume)
  $("#volume-control input").val(percent);
}, 1000);



});
