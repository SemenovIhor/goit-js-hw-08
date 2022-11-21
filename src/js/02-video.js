import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});


const timePlay = function(data) {
    console.log(data.seconds);
   localStorage.setItem("videoplayer-current-time", data.seconds);
};


player.on('timeupdate', throttle(timePlay, 1000));

const time = localStorage.getItem("videoplayer-current-time");

if (time) {
    player.setCurrentTime(time);
}


