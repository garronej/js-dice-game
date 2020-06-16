// Import stylesheets
import './style.scss';

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GL0BAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

type Dice= 1 | 2 | 3 | 4 | 5 | 6;

namespace Dice {

  export function generateRandom(): Dice{
    return ~~(Math.random()*5) + 1 as any;
  }

}


function getDiceImageUrl(diceNumber: Dice ){
  return `//garronej.github.io/js-dice-game/dice-${diceNumber}.png`;
}


class Player {

  private static playerCount = 0

  private currentScore= 0;
  private globalScore= 0;

  public getCurrentScore(){
    return this.currentScore;
  }

  public getGlobalScore(){
    return this.globalScore;
  }

  constructor(
    public readonly playerName= `Player ${++Player.playerCount}`,
  ){}


  public rollDice(): Dice {

    const dice = Dice.generateRandom();

    if( dice === 1 ){

      this.currentScore = 0;

      return dice;


    }

    this.currentScore+= dice;

    return dice;

  }

  public hold(): void{

    this.globalScore+= this.currentScore;
    this.currentScore=0;

  }




}

class Game {

  private static readonly scoreToWin= 100;

  private readonly player1: Player;
  private readonly player2: Player;

  private playerPlaying: 1 | 2 | undefined;


  constructor(htmlElement: HTMLElement){

    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");

  }

  private render(){

  }




}

document.addEventListener(
  "DOMContentLoaded", 
  ()=>new Game(document.querySelector(".wrapper")), 
  false
);






