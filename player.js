class Player
{
    /**
     * Constructs a blank Player class and attaches a Board object.
     * @constructor
     * @param {number} playerID 
     * @param {Board} board 
     */
    constructor(playerID, board)
    {
        // Array to hold ships
        this.ships = [];
        // If Player 1, isTurn is true, if not, isTurn is false
        this.isTurn = (playerID == 1 ? true : false);
        this.board = board;
        this.placedShips = 0;
        this.isPlayer1 = (playerID == 1 ? true : false);
    }
};

// Create a board for each player
let player1Board = new Board();
let player2Board = new Board();

// Create a player and attach each board
let player1 = new Player(1, player1Board);
let player2 = new Player(2, player2Board);


/* origin version of player.js
class player(){ 
 val player1.numberOfShips(); 
 val player2.numberOfShips(); 
 Boolean player1.(getHit) = false; 
 Boolean player2.(getHit) = false; 
 do{ 
 if(Player2.GetHit() = true){ 
 document.showPlayer1.getClickEvent(); 
 } 
 else if(Player2.GetHit() = false){ 
 document.showPlayer2.getClickEvent(); 
 } 
 else if(Player1.GetHit() = false){ 
 document.showPlayer2.getClickEvent(); 
 } 
 else if(Player1.GetHit() = true){ 
 document.showPlayer1.getClickEvent(); 
 } 
   } while (player1.numberOfShips() > 0 && player2.numberOfShips() >0); 
   if(showPlayer2.numberOfShips() >0 && showPlayer1.numberOfShips() == 0){ 
 alert('Player2 Win!'); 
 return showPlayer2(win); 
 } 
 else if(showPlayer2.numberOfShips() == 0 && showPlayer1.numberOfShips() > 0){ 
 alert('Player1 Win!');  
 return showPlayer1(win); 
 } 
 else{ 
 alert('Draw!'); 
 return draw; 
 } 
 }; 
 
 */
