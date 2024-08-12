const videos = (() => {
    // Función para recibir la url e id de los videos
    function UrlId(url, id){
        const reproductor = document.getElementById(id);
        reproductor.setAttribute('src', url);
    }
    // return de url e id
    return function(url, id){
        UrlId(url, id);
    }
})();

// Clase padre 
class Multimedia {
    constructor(url){
        this._url = url;
    }

    get url(){
        return this._url;
    }

    setInicio(){
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hijo 
class Reproductor extends Multimedia {
    constructor(url, id){
        super(url);
        this._id = id;
    }

    get id(){
        return this._id;
    }

    playMultimedia(){
        videos(this._url, this._id);
    }

    setPlay(secondPlaying){
        this._url = `${this._url}&start=${secondPlaying}`;
    }
}

// reproducir los videos
function crearReproductor(url, id, secondPlaying) {
    const reproductor = new Reproductor(url, id);
    reproductor.setPlay(secondPlaying);
    reproductor.playMultimedia();
}

// los vídeos, usan la id del html: 'musica', 'peliculas', 'series'
crearReproductor('https://www.youtube.com/embed/fqOsMwXH7QM?si=0pBewi-XQ0icmPvc', 'musica', 8);
crearReproductor('https://www.youtube.com/embed/1ZLExvVztaQ?si=1c5G2KSqqR7QWCRk', 'peliculas', 10);
crearReproductor('https://www.youtube.com/embed/oxX-Pd5KQHQ?si=qPuRz6ksrqK2ZsHY', 'series', 20);
