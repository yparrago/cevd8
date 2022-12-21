// Basic Audio Modal
jQuery(function ($) {
    const playerAudioModal = setupPlayerRT("player-audio-modal");
    audioTrack = $('#audio-track').data('track');
    playerAudioModal.addTracks([audioTrack])
    $('#modalInfoCev').on('hide.bs.modal', (e) => playerAudioModal.pause());

    let transcripcion = [];
    const elecciones2 = Array.from(document.querySelectorAll('.cs'))
    elecciones2.forEach(eleccion2 => {
        transcripcion.push($(eleccion2).data('transcription'));
    });

    if (transcripcion[0] == null) {
        document.getElementById('language-selector').classList.add('hidden');
        document.getElementById('basic-audio-transcription').style.display = 'none';
    } else {
        document.getElementById('language-selector').classList.remove('hidden');
        document.getElementById('basic-audio-transcription').style.display = '';
        $("#seleccion").prop("selectedIndex", 0);
        $("[data-role=play]").click();
        setupLrc(transcripcion[0]);
        $(document).ready(function() {
            document.querySelector("[data-role=play]").classList.remove('d-none');
            document.querySelector("[data-role=pause]").classList.add('d-none');
        }); 
       
    }


    const select = document.getElementById('seleccion');
    select.addEventListener('change', (event) => {
        setupLrc(transcripcion[event.target.value]);
    })

    function setupLrc(transcription) {
        $("#player-audio-modal audio").off("timeupdate"); // Clean event

        let lrc = new Lyricer({
            "divID": "basic-audio-transcription",
            "showLines": 1,
            "lineidPrefix": 'lyric-basic-modal',
            "clickable": false
        });

        lrc.setLrc(transcription);

        $("#player-audio-modal audio").on("timeupdate", function () {
            lrc.move(this.currentTime);
        });
    }

});