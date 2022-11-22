const options = document.querySelectorAll(".options");

      let pScore = 0;
      let cScore = 0;

      options.forEach((option) => {
        option.addEventListener("click", function () {
          const pInput = this.textContent;
  
          const cOptions = ["Rock", "Paper", "Scissors"];
          const cInput = cOptions[Math.floor(Math.random() * 3)];
  
          compareInputs(pInput, cInput);
          updateScore();
            if (checkWinner()) {
              pScore = cScore = 0;
              updateScore();
            }
        });
      });
  
      function compareInputs(pInput, cInput) {
        const currentMatch = `${pInput} vs ${cInput}`;
  
        // Tie check
        if (pInput === cInput) {
          alert(`${currentMatch} is a Tie`);
          return;
        }
  
        // Rock
        if (pInput === "Rock") {
          if (cInput === "Scissors") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        // Paper
        else if (pInput === "Paper") {
          if (cInput === "Rock") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
        // Scissors
        else if (pInput === "Scissors") {
          if (cInput === "Paper") {
            alert(`${currentMatch} = You Win`);
            pScore++;
          } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
          }
        }
      }
      function updateScore() {
        document.getElementById("p-score").textContent = pScore;
        document.getElementById("c-score").textContent = cScore;
      }
      function checkWinner() {
        if (pScore === 3 || cScore === 3) {
          const winner =
            pScore === 3
              ? "You win the game! Congratulations!"
              : "Computer wins the game! Try again next time!";
          alert(winner);
          alert("GAME OVER!")
          hide();
          return true;
        }
        return false;
      }
      
      function hide(){
        document.getElementById("buttons").style.display = "none"
      }