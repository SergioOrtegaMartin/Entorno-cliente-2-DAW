// The Game (advanced)
// Pick one of three games: Chess, Poker, or Roshambo (rock, paper, scissors). Roshambo is the easiest, followed by Poker, then Chess.

// Your game should have a Game object shat should be responsible for keeping track of it's state
// State depends on the game, all games have players, but not all games have pieces, cards, or moves. 
// try to plan out what your state will be first
// Your game should keep a reference to players, and it should tell them whether or not they have won or lost
// Your game should be able to look at the state of the players and execute a turn- 
// this is where you put code that looks at the state of each player 
// and evaluates the results of what happens when that player changes it's state
// Some games will have multiple turns that will change the state of the game, 
// while others (like roshambo) only have one turn that determines a win or a loss.
// You should have Players for your game, which should be a class
// Each player should keep track of how many wins and losses it has
// Players should keep track of their pieces, cards, or hands
// You should have a class for each Piece, Card or Move
// It's up to you to do the rest of the design for this program! Ensure two players can be created in the console as classes, 
// join a game, execute methods with moves, and one player can win each game.

class Roshambo{
    constructor(){
    this.winner = null;
    this.resultadoj1 = null;
    this.jugador1 = null;
    this.resultadoj2 = null;
    this.jugador2 = null;

    }
    juega1(jugador){
        this.resultadoj1 = jugador.jugada;
        this.jugador1 = jugador.nombre;

    }
    juega2(jugador){
        this.resultadoj2 = jugador.jugada;
        this.jugador2 = jugador.nombre;
    }
    resultados(){
        if (this.resultadoj1 == 'PIEDRA' && this.resultadoj2 == 'TIJERA'){
            return `Gana ${this.jugador1}`
        }else if (this.resultadoj1 == 'PIEDRA' && this.resultadoj2 == 'PAPEL'){
            return `Gana ${this.jugador2}`
        }else if (this.resultadoj1 == 'PIEDRA' && this.resultadoj2 == 'PIEDRA'){
            return `Empate`
        }else if (this.resultadoj1 == 'PAPEL' && this.resultadoj2 == 'TIJERA'){
            return `Gana ${this.jugador2}`
        }else if (this.resultadoj1 == 'PAPEL' && this.resultadoj2 == 'PAPEL'){
            return `Empate`
        }else if (this.resultadoj1 == 'TIJERA' && this.resultadoj2 == 'TIJERA'){
            return `Empate`
        }
    }
}

class Jugador{
    constructor(){
    this.nombre = prompt('Introduce el nombre').toUpperCase();
    this.jugada = prompt('Piedra, papel o tijera').toUpperCase();
    }
}