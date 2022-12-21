/**
 * modal El paseo de la lluvia
 */

const playerElPasoDeLaLluvia = setupPlayerRT(
  "player-modal-el-paso-de-la-lluvia"
);
playerElPasoDeLaLluvia.addTracks(["audios/audio5.mp3"]);

jQuery("#modal-el-paso-de-la-lluvia").on("hide.bs.modal", () =>
  playerElPasoDeLaLluvia.pause()
);

lyricsElPasoDeLaLluvia = new Lyricer({
  divID: "modal-el-paso-de-la-lluvia-transcription",
  showLines: 1,
  lineidPrefix: "lyrics-modal-el-paso-de-la-lluvia",
  clickable: false,
});

lyricsElPasoDeLaLluvia.setLrc(`
    [00:01.00]Linea de texto 1
    [00:03.21]Linea de texto 2
    [00:07.72]Linea de texto 3 
    [00:12.76]Linea de texto 4
    [00:17.48]Linea de texto 5
    [00:22.92]Linea de texto 6
    [00:27.78]Linea de texto 7
    [00:32.67]Linea de texto 8
    [00:36.00]Linea de texto 9
`);

jQuery("#player-modal-el-paso-de-la-lluvia audio").on("timeupdate", function () {
  lyricsElPasoDeLaLluvia.move(this.currentTime);
});

/**
 * El libro de las anticipaciones modal
 */

let playListElLibroDeLasAnticipaciones = [
  {
    name: "Audio 1",
    src: "./audios/audio1.mp3",
    duration: "03:01",
    transcription: `
        [00:01.00] Audio 1 Linea de texto 1
        [00:05.21] Audio 1 Linea de texto 2
        [00:09.72] Audio 1 Linea de texto 3 
    `,
  },
  {
    name: "Audio 2",
    src: "./audios/audio2.mp3",
    duration: "02:55",
    transcription: `
        [00:01.00] Audio 2 Linea de texto 1
        [00:05.21] Audio 2 Linea de texto 2
        [00:12.72] Audio 2 Linea de texto 3 
    `,
  },
  {
    name: "Audio 3",
    src: "./audios/audio3.mp3",
    duration: "03:00",
    transcription: `
        [00:01.00] Audio 3 Linea de texto 1
        [00:05.21] Audio 3 Linea de texto 2
        [00:08.72] Audio 3 Linea de texto 3 
    `,
  },
  {
    name: "Audio 4",
    src: "./audios/audio4.mp3",
    duration: "00:25",
    transcription: `
        [00:01.00] Audio 4 Linea de texto 1
        [00:05.21] Audio 4 Linea de texto 2
        [00:08.72] Audio 4 Linea de texto 3 
    `,
  },
  {
    name: "Audio 5",
    src: "./audios/audio5.mp3",
    duration: "02:51",
    transcription: `
        [00:01.00] Audio 5 Linea de texto 1
        [00:05.21] Audio 5 Linea de texto 2
        [00:08.72] Audio 5 Linea de texto 3 
    `,
  },
  {
    name: "Audio 6",
    src: "./audios/audio6.mp3",
    duration: "02:01",
    transcription: `
        [00:01.00] Audio 6 Linea de texto 1
        [00:05.21] Audio 6 Linea de texto 2
        [00:08.72] Audio 6 Linea de texto 3 
    `,
  },
];

const playerElLibroDeLasAnticipaciones = setupPlayerRT(
  "player-modal-el-Libro-de-las-anticipaciones"
);

let elLibroDeLasAnticipacionesCurrentPlaying = null;
let playlistLibroDeAnticipacionesHTML = "";
let modalPlaylistLibroDeAnticipaciones = jQuery("#playlist-modal-el-Libro-de-las-anticipaciones");

jQuery("#modal-el-Libro-de-las-anticipaciones").on("hide.bs.modal", () =>
  playerElLibroDeLasAnticipaciones.pause()
);

function setupPlaylistLyricsElLibroDeAnticipaciones(transcription) {
  jQuery("#player-modal-el-Libro-de-las-anticipaciones audio").off("timeupdate"); // Clean event
  const playlistLrc = new Lyricer({
    divID: "modal-el-Libro-de-las-anticipaciones-transcription",
    showLines: 1,
    lineidPrefix: "lyric-modal-el-Libro-de-las-anticipaciones",
    clickable: false,
  });

  playlistLrc.setLrc(transcription);

  jQuery("#player-modal-el-Libro-de-las-anticipaciones audio").on(
    "timeupdate",
    function () {
      playlistLrc.move(this.currentTime);
    }
  );
}

function playAudioPlaylistStatic(src, index) {
  if (elLibroDeLasAnticipacionesCurrentPlaying === index) return;
  playerElLibroDeLasAnticipaciones.stop();
  playerElLibroDeLasAnticipaciones.play(src);
  modalPlaylistLibroDeAnticipaciones.find("li").each((i, e) => jQuery(e).removeClass("active"));
  modalPlaylistLibroDeAnticipaciones.find(`li:nth-child(jQuery{index + 1})`).addClass("active");
  elLibroDeLasAnticipacionesCurrentPlaying = index;
  setupPlaylistLyricsElLibroDeAnticipaciones(playListElLibroDeLasAnticipaciones[index].transcription);
}

for (let [index, p] of playListElLibroDeLasAnticipaciones.entries()) {
  playlistLibroDeAnticipacionesHTML += `
        <li onclick="playAudioPlaylistStatic('jQuery{p.src}', jQuery{index})" 
            class="list-group-item list-group-item-action d-flex"
            style="cursor: pointer"
        >
            <span class="d-flex justify-content-between align-items-center flex-fill">
                jQuery{p.name}
                <span>jQuery{p.duration}</span>
            </span>
        </li>
    `;
}

setupPlaylistLyricsElLibroDeAnticipaciones(playListElLibroDeLasAnticipaciones[0].transcription);
modalPlaylistLibroDeAnticipaciones.html(playlistLibroDeAnticipacionesHTML);
