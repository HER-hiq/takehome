const team1Score = document.querySelector(".timl_poin .poinl");
const team2Score = document.querySelector(".timr_poin .poinr");

team1Score.addEventListener("pointerdown", handlePointerDown);
team1Score.addEventListener("pointerup", handlePointerUp);

team2Score.addEventListener("pointerdown", handlePointerDown);
team2Score.addEventListener("pointerup", handlePointerUp);

let initialY = null;

function handlePointerDown(event) {
  initialY = event.clientY;
}

function handlePointerUp(event) {
  if (initialY === null) {
    return;
  }

  const currentY = event.clientY;
  const diffY = initialY - currentY;

  if (diffY > 0) {
    
    if (event.target.classList.contains("poinl")) {
      if (team1Score.textContent < 21) {
        team1Score.textContent = parseInt(team1Score.textContent) + 1;
      }
    } else if (event.target.classList.contains("poinr")) {
      if (team2Score.textContent < 21) {
        team2Score.textContent = parseInt(team2Score.textContent) + 1;
      }
    }
    
  } else {
    
    if (event.target.classList.contains("poinl")) {
      if (team1Score.textContent > 0) {
        team1Score.textContent = parseInt(team1Score.textContent) - 1;
      }
    } else if (event.target.classList.contains("poinr")) {
      if (team2Score.textContent > 0) {
        team2Score.textContent = parseInt(team2Score.textContent) - 1;
      }
    }
  }

  initialY = null;
}


team1Score.addEventListener("touchstart", handleTouchStart);
team1Score.addEventListener("touchend", handleTouchEnd);

team2Score.addEventListener("touchstart", handleTouchStart);
team2Score.addEventListener("touchend", handleTouchEnd);

function handleTouchStart(event) {
  initialY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  if (initialY === null) {
    return;
  }

  const currentY = event.changedTouches[0].clientY;
  const diffY = initialY - currentY;

  if (diffY > 0) {
    
    if (event.target.classList.contains("poinl")) {
      if (team1Score.textContent < 21) {
        team1Score.textContent = parseInt(team1Score.textContent) + 1;
      }
    } else if (event.target.classList.contains("poinr")) {
      if (team2Score.textContent < 21) {
        team2Score.textContent = parseInt(team2Score.textContent) + 1;
      }
    }
    
  } else {
    
    if (event.target.classList.contains("poinl")) {
      if (team1Score.textContent > 0) {
        team1Score.textContent = parseInt(team1Score.textContent) - 1;
      }
    } else if (event.target.classList.contains("poinr")) {
      if (team2Score.textContent > 0) {
        team2Score.textContent = parseInt(team2Score.textContent) - 1;
      }
    }
  }

  initialY = null;
}