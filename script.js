document.addEventListener("DOMContentLoaded", () => {

  const doorScreen = document.getElementById("door-screen");
  const darkRoom = document.getElementById("dark-room");
  const litRoom = document.getElementById("lit-room");

  const key = document.getElementById("key");
  const door = document.getElementById("door");
  const creak = document.getElementById("door-creak");

  const lightSwitch = document.getElementById("light-switch");

  const tv = document.getElementById("tv");
  const tvMessage = document.getElementById("tv-message");

  const letter = document.getElementById("letter");
  const letterText = document.getElementById("letter-text");

  // 1. გასაღების აღება → კარის გაღება
  key.addEventListener("click", () => {
    key.style.opacity = "0";
    key.style.pointerEvents = "none";

    setTimeout(() => {
      door.classList.add("open");
      creak.currentTime = 0;
      creak.play().catch(e => console.log("ხმა არ ისმის", e));

      setTimeout(() => {
        doorScreen.classList.remove("active");
        darkRoom.classList.add("active");
      }, 1600);
    }, 400);
  });

  // 2. ლამპის ანთება
  lightSwitch.addEventListener("click", () => {
    darkRoom.classList.remove("active");
    litRoom.classList.add("active");
  });

  // 3. ტელევიზორის ჩართვა
  tv.addEventListener("click", () => {
    tv.classList.remove("off");
    tv.innerHTML = ""; // წაშლის "ჩართე"-ს
    tvMessage.classList.remove("hidden");
    tvMessage.style.opacity = "1";
  });

  // 4. წერილის გახსნა
  letter.addEventListener("click", () => {
    letter.classList.remove("closed");
    letter.innerHTML = "";
    letterText.classList.remove("hidden");
    letterText.style.opacity = "1";
  });

});
