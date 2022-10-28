import React from "react";
import "../styles/modal-contents.scss";

function TicTacToeModalContents() {

  return (
    <div id="tic-tac-toeCarousel" className="carousel slide carousel-fade d-flex align-items-center w-100">
      <div className="carousel-inner py-3">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#tic-tac-toeCarousel" data-bs-slide-to="0" className="active bi bi-1-circle" aria-current="true" aria-label="Character Select Slide"></button>
          <button type="button" data-bs-target="#tic-tac-toeCarousel" data-bs-slide-to="1" className="bi bi-2-circle" aria-label="Game Slide"></button>
          <button type="button" data-bs-target="#tic-tac-toeCarousel" data-bs-slide-to="2" className="bi bi-3-circle" aria-label="Results Slide"></button>
        </div>
        <button className="carousel-control-prev w-auto" type="button" data-bs-target="#tic-tac-toeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon fa-solid fa-angle-left" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next w-auto" type="button" data-bs-target="#tic-tac-toeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon fa-solid fa-angle-right" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-item active">
          <img src={require("../assets/tic-tac-toe-contents/character-select.png")} alt="Character Select Screen" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              CHARACTER SELECT
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require("../assets/tic-tac-toe-contents/game.png")} alt="Game Screen" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              GAME BOARD
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require("../assets/tic-tac-toe-contents/results.png")} alt="Results Screen" loading="lazy" />
          <div className="carousel-caption">
            <div className="content-title">
              RESULTS SCREEN
            </div>
            <div className="content-description">
              The results screen shows the current score. 
              The game keeps track of all the games played so far and displays the wins and ties.
              Clicking rematch takes the player back to the game screen, while quit takes the player back to the start screen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToeModalContents;

