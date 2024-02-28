import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  currentPlayer : string = 'X';
  board:string[][] = [["","",""],["","",""],["","",""]];

  rowindex : any;
  colindex : any;

  isStart: boolean = true;
  gameOver: boolean  = false; 

  winner:string = '';

  constructor(){}
 
  boxClick(rowindex:any, colindex:any){
    console.log(rowindex, colindex, 'iiiiiiiiiiii');
    if(!this.gameOver && this.board[rowindex][colindex] === ''){
       this.board[rowindex][colindex]  = this.currentPlayer;
      this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X' ;
      this.showResult()
    }
  }

  checkWinner(){
    // for rows
    for(let rowindex = 0; rowindex < 3 ; rowindex++){
      if(this.board[rowindex][0] === this.board[rowindex][1] && this.board[rowindex][1] == this.board[rowindex][2] && this.board[rowindex][0] != ""){
        this.winner = this.board[rowindex][0];
        this.gameOver = true;
        console.log(this.winner,'winnerrr=====');
        return this.board[rowindex][0];
      }
    }

    //for columns
    for(let colindex = 0; colindex < 3; colindex++){
      if(this.board[0][colindex] === this.board[1][colindex] && this.board[1][colindex] == this.board[2][colindex] && this.board[0][colindex] != ""){
        this.winner = this.board[0][colindex];
        this.gameOver = true;
        return this.board[0][colindex];

      }
    }

    // for diagnols
    if(this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] && this.board[0][0] != ""){
      this.winner = this.board[0][0];
      this.gameOver = true;
      return this.board[0][0];

    }
    if(this.board[0][2] == this.board[1][1] && this.board[1][1] == this.board[2][0] && this.board[0][2] != ""){
      this.winner = this.board[0][2];
      this.gameOver = true;
      return this.board[0][2];

    }
    return this.winner;

  }

  showResult(){
    const winner = this.checkWinner();
    console.log(winner,'qqqqqqqqqqqqqqqqqqqqq');

    if(winner){
      console.log(winner,'aaaaaaaaaaaaaa')
      this.winner = `${winner} Won the game !`
    }
    else{
      this.winner = `No Winner yet !`
    }
  }
  Reset(){    
      this.board = [["","",""],["","",""],["","",""]];
      this.winner = '';
      this.currentPlayer = 'X';
      this.gameOver = false;   
  }
}
