import player from "@vimeo/player";
   import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    player.on('timeupdate', _.throttle(onPlay, 1000));
        
//    localStorage.setItem("videoplayer-current-time", "videoplayer-current-time");
    
    /*
    Вивчи документацію методу on() і почни відстежувати подію timeupdate - 
    оновлення часу відтворення.
Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде
 рядок "videoplayer-current-time".
Під час перезавантаження сторінки скористайся методом setCurrentTime() з 
метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час 
відтворення оновлювався у сховищі не частіше, ніж раз на секунду. */
