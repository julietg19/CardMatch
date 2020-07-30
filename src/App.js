import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;

// get 10 paintings with equal size!! 200x300 96 res

// on level 1
// select 4 random paintings out of 10
// duplicate all 4
// arrange them randomly
// show them up side down

// once player wins the game
// add two more cards
// repeat level 1

// how to start
// timer start with 15 sec
// when user click a painting card
// it flip shows and stays
// then user has to click another card to match

// if cards match
// shows for 2 seconds
// then cards flip over
// add score++
// else cards not match
// show for 2 seconds
// flip over

// once all cards match then
// show them for 5 seconds
// then move to next level

// if timer done in 15 sec
// message says times up
// then start over game
