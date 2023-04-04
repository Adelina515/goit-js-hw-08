import player from "@vimeo/player";
   import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', _.throttle(onPlay, 1000))
        
   localStorage.setItem("videoplayer-current-time", "videoplayer-current-time");
    
    player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    });
    /*
    Вивчи документацію методу on() і почни відстежувати подію timeupdate - 
    оновлення часу відтворення.
Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде
 рядок "videoplayer-current-time".
Під час перезавантаження сторінки скористайся методом setCurrentTime() з 
метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час 
відтворення оновлювався у сховищі не частіше, ніж раз на секунду. */
