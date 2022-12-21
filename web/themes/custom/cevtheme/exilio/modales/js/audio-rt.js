const setupPlayerRT = (containerId, config = {}) => {
    
    if (typeof containerId !== 'string') {
        throw Error('Container id must be string');
    }

    const playerContainer = $(containerId.startsWith('#') ? containerId : `#${containerId}`)

    const playButton = playerContainer.find('button[data-role="play"]')
    const pauseButton = playerContainer.find('button[data-role="pause"]')
    const prevButton = playerContainer.find('button[data-role="prev"]')
    const nextButton = playerContainer.find('button[data-role="next"]')
    const muteButton = playerContainer.find('button[data-role="mute"]')
    const volUpButton = playerContainer.find('button[data-role="volUp"]')
    const volDownButton = playerContainer.find('button[data-role="volDown"]')

    const progressContainer = playerContainer.find('.rt-time-indicartors .progress')
    const progressBar = playerContainer.find('div[data-role="player-progress-bar"]')
    const startTime = playerContainer.find('span[data-role="start"]')
    const endTime = playerContainer.find('span[data-role="end"]')
    let intervalId = null;
    
    const audioElement = playerContainer.find("audio");
    let currentAudio = null;
    let tracks = [];
    let currentTrack = 0;
    
    const addTracks = (arr) => {
        if (!Array.isArray(arr)) {
            throw Error("Tracks must be an array");
        }

        tracks = arr;
    }

    const pad = (num) => num < 10 ? `0${num}` : num

    const formatTime = (time) => {
        let duration = Math.round(time);
        let hours = pad(Math.floor(duration/3600));
        let minutes = pad(Math.floor((duration/60) % 60));
        let seconds = pad(Math.round(duration % 60));

        let timer = `${minutes}:${seconds}`;

        if(hours !== '00') timer = `${hours}:${timer}`;

        return timer;
    }

    const loadTimer = () => {
        currentAudio.onloadeddata = (e) => {
            endTime.text(formatTime(e.target.duration))
            togglePlay()
            intervalId = setInterval(setProgress, 1000)
        }

        currentAudio.onended = function() {
            if (config.autoNext) {
                next()
            }
            clearTimeUI();
        };
    }

    const clearTimeUI = () => {
        startTime.text('00:00')
        endTime.text('00:00')
        progressBar.width('0')
        togglePlay()
    }

    const setProgress = () => {
        if(currentAudio.ended || currentAudio.paused){
            clearInterval(intervalId);
        } else {
            let timer = formatTime(currentAudio.currentTime)
            startTime.text(timer)
            progressBar.width(`${(currentAudio.currentTime/currentAudio.duration) * 100}%`);
       }
    }

    const togglePlay = () => {
        if (currentAudio.paused) {
            pauseButton.addClass('d-none')
            playButton.removeClass('d-none')
        } else {
            playButton.addClass('d-none')
            pauseButton.removeClass('d-none')
        }
    }

    const play = (audio) => {
        if (!currentAudio && (audio || tracks.length)) {
            audio = audio || tracks[currentTrack];

            const source = $('<source></source>').attr({
                src: audio,
                preload: 'auto',
                type: "audio/mp3"
            });
    
            audioElement.append(source)
            currentAudio = audioElement.get(0);
        }

        if (currentAudio) {
            currentAudio.load();
            setTimeout(() => currentAudio.play(), 0);
            loadTimer();
        }
    }

    const pause = () => {
        if (!currentAudio) return
        currentAudio.pause()
        togglePlay()
    }

    const step = (step) => {
        stop()
        currentAudio = null;
        currentTrack = step;
        play(tracks[currentTrack]);
    }

    const dispatchStep = (direction) => {
        config.onStep && typeof config.onStep === 'function' && config.onStep(direction)
    }

    const prev = () => {
        if (tracks.length && currentTrack - 1 >= 0) {
            step(currentTrack - 1)
            dispatchStep('prev')
        }
    }

    const next = () => {
        if (tracks.length && (currentTrack + 1 < tracks.length)) {
            step(currentTrack + 1)
            dispatchStep('next')
        }
    }

    const stop = () => {
        if (!currentAudio) return
        pause()
        currentAudio = null;
        audioElement.empty()
    }

    const volUp = () => {
        if (!currentAudio) return
        currentAudio.volume += currentAudio.volume < 1 ?  0.1 : 0
    }

    const volDown = () => {
        if (!currentAudio) return
        currentAudio.volume -= currentAudio.volume >= 0.1 ?  0.1 : 0
    }

    const mute = () => {
        if (!currentAudio) return
        currentAudio.muted = !currentAudio.muted
        muteButton.toggleClass('active')
    }

    progressContainer.click(function (e) {
        if (!currentAudio) return
        let percent = e.offsetX / this.offsetWidth;
        currentAudio.currentTime = percent * currentAudio.duration;
    });

    playButton.click(() => play())
    pauseButton.click(pause)
    prevButton.click(prev)
    nextButton.click(next)
    volUpButton.click(volUp)
    volDownButton.click(volDown)
    muteButton.click(mute)

    return {play, pause, addTracks, next, prev, stop, volDown, volUp}
}





