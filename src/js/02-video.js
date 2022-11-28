import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const saveTime = localStorage.getItem('videoplayer-current-time');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onSaveTimeHandler = function (data) {
  //   console.log('data!', data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onSaveTimeHandler, 1000));

player.setCurrentTime(saveTime);
