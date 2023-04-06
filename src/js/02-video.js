
    import Player from "@vimeo/player";
    import throttle from "lodash.throttle";
    
    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    
    const LOCALCURRENTTIME_KEY = "videoplayer-current-time";
    
    player.on('timeupdate', throttle(onPlay, 1000));
    function onPlay (data){
         const currentTime = data.seconds;
         localStorage.setItem(LOCALCURRENTTIME_KEY, currentTime);
     };
    setCurrentTime()
    function setCurrentTime() {
        if (!localStorage.getItem(LOCALCURRENTTIME_KEY)) {
            return;
        }
        player.setCurrentTime(localStorage.getItem(LOCALCURRENTTIME_KEY));   
    };
    
    /*
    Вивчи документацію методу on() і почни відстежувати подію timeupdate - 
    оновлення часу відтворення.^^^^^^
Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде
 рядок "videoplayer-current-time".^^^^^^^^
Під час перезавантаження сторінки скористайся методом setCurrentTime() з 
метою відновлення відтворення зі збереженої позиції.
Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час 
відтворення оновлювався у сховищі не частіше, ніж раз на секунду. */
