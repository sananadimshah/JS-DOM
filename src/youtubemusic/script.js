var arr = [
  { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
  {
    songName: "Pehle Bhi main",
    url: "./songs/Pehle Bhi Main.mp3",
    img: "./images/animal.jpg",
  },
  {
    songName: "Ram siya ram",
    url: "./songs/Ram Siya Ram.mp3",
    img: "./images/ram.jpg",
  },
  {
    songName: "Arjan Valley",
    url: "./songs/Arjan Vailly Ne.mp3",
    img: "./images/animal.jpg",
  },
];
var allsongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var audio = new Audio();
var seletedSong = 0;

const multifunction = () => {
  var data = "";
  arr.forEach((obj, index) => {
    data += `<div class="song-card" id=${index}>
  <div class="part1">
    <img
      src=${obj.img}
      alt=""
    />
    <h2>${obj.songName}</h2>
  </div>
  <h6>3:56</h6>
</div>`;
  });
  allsongs.innerHTML = data;
  audio.src = arr[seletedSong].url;
  poster.style.backgroundImage = `url(${arr[seletedSong].img})`;
};
multifunction();
allsongs.addEventListener("click", (details) => {
  seletedSong = details.target.id;
  multifunction();
  play.innerHTML = `<i class="ri-pause-circle-fill"></i>`;
  flag = 1;
  audio.play();
});

var flag = 0;

play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", () => {
  if (seletedSong <= arr.length - 1) {
    seletedSong++;
    multifunction();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});

backward.addEventListener("click", () => {
  if (seletedSong > 0) {
    seletedSong--;
    multifunction();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});
