
jQuery(function ($) {
    // Audio Playlist
    var audios = document.querySelectorAll('#audio-track');
    let playListAudios = [];
    let transcripcion = [];
    for (var i = 0; i < audios.length; i++) {
        transcripcion = [];
        const elecciones2 = Array.from(document.querySelectorAll('.cs' + i))
        elecciones2.forEach(eleccion2 => {
            transcripcion.push($(eleccion2).data('transcription'));
        });
        audioTrack = $(audios[i]).data('track');
        audioName = $(audios[i]).data('title');
        audioDuration = $(audios[i]).data('duration');
        audioId = $(audios[i]).data('id');
        playListAudios.push({
            name: audioName,
            src: audioTrack,
            duration: audioDuration,
            transcription: transcripcion,
            id: audioId,
        });
    }
    let modal = $('#modalInfoCev')
    //Audio automatico
    var comprobacion = document.getElementById("audio-playlist-modal");
    if (comprobacion) {
        let playlistCurrentPlaying = null

        let modalAudioPlaylist = $('#audio-playlist-modal')
        const itemsLength = modalAudioPlaylist.find('.carousel-item').length
        const nextBtn = modalAudioPlaylist.find('.carousel-control-next');
        const prevBtn = modalAudioPlaylist.find('.carousel-control-prev');
        prevBtn.hide();

        const playerAudioPlaylist = setupPlayerRT("player-audio-playlist");
        playerAudioPlaylist.addTracks([playListAudios[0].src])

        modalAudioPlaylist.on('hide.bs.modal', () => playerAudioPlaylist.pause());
        modal.on('hide.bs.modal', () => playerAudioPlaylist.pause());
        modalAudioPlaylist.on('slide.bs.carousel', function (e) {
            prevBtn.show();

            if (e.to === itemsLength - 1) {
                nextBtn.hide()
                prevBtn.show()
            } else if (e.to === 0) {
                prevBtn.hide()
                nextBtn.show()
            }

            playAudioPlaylist(playListAudios[e.to].src, e.to)

        });

        let playlistHTML = '';
        let modalPlaylist = $('#playlist-modal-playlist');

        function setupPlaylistLrc(transcription) {
            $("#player-audio-playlist audio").off("timeupdate"); // Clean event

            const playlistLrc = new Lyricer({
                "divID": "audio-playlist-transcription",
                "showLines": 1,
                "lineidPrefix": 'lyric-audio-playlist-modal',
                "clickable": false
            });

            playlistLrc.setLrc(transcription)

            $("#player-audio-playlist audio").on("timeupdate", function () {
                playlistLrc.move(this.currentTime);
            });
        }

        function playAudioPlaylist(src, index) {
            if (playlistCurrentPlaying === index) return
            if (playListAudios[index].transcription[0] == null) {
                document.getElementById('language-selector').classList.add('hidden');
                document.getElementById('audio-playlist-transcription').style.display = 'none';
            } else {
                document.getElementById('language-selector').classList.remove('hidden');
                document.getElementById('audio-playlist-transcription').style.display = '';
                setupPlaylistLrc(playListAudios[index].transcription[0])
                const elecciones1 = Array.from(document.querySelectorAll('.controlSeleccion'))
                elecciones1.forEach(eleccion1 => {
                    eleccion1.classList.add('hidden');
                });
                $("#seleccion").val($("#seleccion option:first").val());
            }
            playerAudioPlaylist.stop()
            playerAudioPlaylist.play(src)
            modalPlaylist.find('li').each((i, e) => $(e).removeClass('active'))
            modalPlaylist.find(`li:nth-child(${index + 1})`).addClass('active')
            playlistCurrentPlaying = index;
            if (playListAudios[index].transcription[0] != null) {
                const elecciones = Array.from(document.querySelectorAll('.cs' + index))
                elecciones.forEach(eleccion => {
                    eleccion.classList.remove('hidden');
                });
                const select = document.getElementById('seleccion');
                select.addEventListener('change', (event) => {
                    setupPlaylistLrc(playListAudios[index].transcription[event.target.value]);
                })
            }
        }

        for (let [index, p] of playListAudios.entries()) {
            playlistHTML += `
                <li onclick="playAudioPlaylist('${p.src}', ${index})" 
                    class="list-group-item list-group-item-action d-flex"
                    data-bs-target="#carousel-audio-playlist-modal-${p.id}"
                    data-bs-slide-to="${index}"
                    style="cursor: pointer"
                    data-bs-interval="false"
                >
                    <span class="d-flex justify-content-between align-items-center flex-fill">
                    &nbsp; ${p.name}
                        <span>${p.duration}</span>
                    </span>
                </li>
            `
        }
        
        if (playListAudios[0].transcription[0] != null) {
            //setupPlaylistLrc(playListAudios[0].transcription[0]);
            document.getElementById('language-selector').classList.remove('hidden');
            document.getElementById('audio-playlist-transcription').style.display = '';
            const elecciones = Array.from(document.querySelectorAll('.cs' + 0))
            elecciones.forEach(eleccion => {
                eleccion.classList.remove('hidden');
            });
            const select = document.getElementById('seleccion');
            select.addEventListener('change', (event) => {
                setupPlaylistLrc(playListAudios[0].transcription[event.target.value]);
            })
        }
        modalPlaylist.html(playlistHTML)
        var btnClose = document.querySelectorAll('.btn-close');
        for (var i = 0; i < btnClose.length; i++) {
            btnClose[i].addEventListener('click', function () {
                playerAudioPlaylist.pause();
                playlistCurrentPlaying = 0;
                playlistHTML = '';
                deteIntervalo();
            })
        }
    }


    var comprobacionstatic = document.getElementById("audio-playlist-static-modal");
    // Audio Playlist Static
    if (comprobacionstatic) {

        const playerAudioplaylistStatic = setupPlayerRT("player-audio-playlist-static");

        let playlistStaticCurrentPlaying = null
        let playlistStaticHTML = '';
        let modalPlaylistStatic = $('#playlist-modal-playlist-static');

        $('#audio-playlist-static-modal').on('hide.bs.modal', () => playerAudioplaylistStatic.pause());
        modal.on('hide.bs.modal', () => playerAudioplaylistStatic.pause());
        playerAudioplaylistStatic.addTracks([playListAudios[0].src])

        function setupPlaylistLrcStatic(transcription) {
            $("#player-audio-playlist-static audio").off("timeupdate"); // Clean event

            const playlistLrc = new Lyricer({
                "divID": "audio-playlist-static-transcription",
                "showLines": 1,
                "lineidPrefix": 'lyric-audio-playlist-static',
                "clickable": false
            });

            playlistLrc.setLrc(transcription)

            $("#player-audio-playlist-static audio").on("timeupdate", function () {
                playlistLrc.move(this.currentTime);
            });
        }

        function playAudioPlaylistStatic(src, index) {
            if (playlistStaticCurrentPlaying === index) return

            if (playListAudios[index].transcription[0] == null) {
                document.getElementById('language-selector').classList.add('hidden');
                document.getElementById('audio-playlist-static-transcription').style.display = 'none';
            } else {
                document.getElementById('language-selector').classList.remove('hidden');
                document.getElementById('audio-playlist-static-transcription').style.display = '';
                setupPlaylistLrcStatic(playListAudios[index].transcription[0])
                const elecciones1 = Array.from(document.querySelectorAll('.controlSeleccion'))
                elecciones1.forEach(eleccion1 => {
                    eleccion1.classList.add('hidden');
                });
                $("#seleccion").val($("#seleccion option:first").val());
            }
            playerAudioplaylistStatic.stop()
            playerAudioplaylistStatic.play(src)
            modalPlaylistStatic.find('li').each((i, e) => $(e).removeClass('active'))
            modalPlaylistStatic.find(`li:nth-child(${index + 1})`).addClass('active')
            playlistStaticCurrentPlaying = index;
            if (playListAudios[index].transcription[0] != null) {
                const elecciones = Array.from(document.querySelectorAll('.cs' + index))
                elecciones.forEach(eleccion => {
                    eleccion.classList.remove('hidden');
                });
                const select = document.getElementById('seleccion');
                select.addEventListener('change', (event) => {
                    setupPlaylistLrcStatic(playListAudios[index].transcription[event.target.value]);
                })
            }
        }
        for (let [index, p] of playListAudios.entries()) {
            playlistStaticHTML += `
                <li class="list-group-item list-group-item-action d-flex control_audio"
                    style="cursor: pointer" data-src="${p.src}" data-ind="${index}">
                    <span class="d-flex justify-content-between align-items-center flex-fill">
                        &nbsp;  ${p.name}
                        <span>${p.duration}</span>
                    </span>
                </li>
                `
        }

        jQuery("body").on("click", '.control_audio', function (e) { playAudioPlaylistStatic($(this).data('src'), $(this).data('ind')); });


        if (playListAudios[0].transcription[0] != null) {
            //setupPlaylistLrcStatic(playListAudios[0].transcription[0]);
            document.getElementById('language-selector').classList.remove('hidden');
            document.getElementById('audio-playlist-static-transcription').style.display = '';
            const elecciones = Array.from(document.querySelectorAll('.cs' + 0))
            elecciones.forEach(eleccion => {
                eleccion.classList.remove('hidden');
            });
            const select = document.getElementById('seleccion');
            select.addEventListener('change', (event) => {
                setupPlaylistLrcStatic(playListAudios[0].transcription[event.target.value]);
            })
        }
        modalPlaylistStatic.html(playlistStaticHTML)
        

    }

});




