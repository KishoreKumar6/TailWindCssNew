let emojis = [
  "⚽",
  "🎨",
  "🎵",
  "🎮",
  "🏋️‍♀️",
  "🍳",
  "✈️",
  "📖",
  "⚽",
  "🎨",
  "🎵",
  "🎮",
  "🏋️‍♀️",
  "🍳",
  "✈️",
  "📖",
];

let emoji_shuf = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));

let playerTurn = 1; // Track whose turn it is (1 or 2)
let scorePlayer1 = 0;
let scorePlayer2 = 0;

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = emoji_shuf[i];

  box.onclick = function () {
    this.classList.add("boxOpen");

    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ===
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          // Update score for the current player
          if (playerTurn === 1) {
            scorePlayer1++;
            document.querySelector(".ply1").innerHTML = ` ${scorePlayer1}`;
          } else {
            scorePlayer2++;
            document.querySelector(".ply2").innerHTML = ` ${scorePlayer2}`;
          }

          // Mark matched boxes
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");

          // Remove "boxOpen" class for matched boxes
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          // Check if the game is complete
          if (document.querySelectorAll(".boxMatch").length === emojis.length) {
            alert("Game Over!...");
          }
        } else {
          // Remove "boxOpen" class if not a match
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          // Switch the turn to the other player
          playerTurn = playerTurn === 1 ? 2 : 1;
          document.querySelector(
            ".turn"
          ).innerHTML = `Player ${playerTurn}'s Turn`;
        }
      }
    }, 1000);
  };
  document.querySelector(".game").appendChild(box);
}
