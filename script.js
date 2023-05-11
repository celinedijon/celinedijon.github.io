function openPopup() {
  var popup = document.querySelector(".popup");
  var audio = document.getElementById("myAudio");

  popup.classList.add("show");
  audio.play();
}

function closePopup() {
  var popup = document.querySelector(".popup");

  popup.classList.remove("show");
  audio.pause();
  audio.currentTime = 0;
}
