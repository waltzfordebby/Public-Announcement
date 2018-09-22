let videoContainer = document.querySelector(".video-container");
let video = document.querySelector(".video-container video");
let dateContainer = document.querySelector("#date h1");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let numberOfVideo = 1;
let currentDate = new Date();

video.onended = function() {
  numberOfVideo++;
  if (numberOfVideo <= 7) {
    videoContainer.innerHTML = `
    <video autoplay muted>
        <source src="video/${numberOfVideo}.mp4" type="video/mp4">
    </video>
      `;
  } else if (numberOfVideo == 7) {
    videoContainer.innerHTML = `
    <video autoplay muted>
        <source src="video/1.mp4" type="video/mp4">
    </video>
      `;
  }
};

dateContainer.innerHTML = `${
  monthNames[currentDate.getMonth()]
} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
