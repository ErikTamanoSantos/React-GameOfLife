import React, { Component } from 'react';

const maxBoardSize = 32;

class BoardPage extends Component {

    boardSize = maxBoardSize;
    board = []

    render() {
        this.updateBoardSize()
        console.log(this.board)
        return (
            <div></div>
        )
    }

    updateBoardSize() {
        console.log(this.board.length < this.boardSize)
        if (this.board.length < this.boardSize) {
            for (let i = this.board.length; i < this.boardSize; i++) {
                let array = []
                for (let j = 0; j < this.boardSize; j++) {
                    array.push("")
                }
                this.board.push (array)
            }
        } else if (this.board.length > this.boardSize) {
            this.board.length = this.boardSize 
        }
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                let adjacentCells = 0
                if (row !== 0 && this.board[row-1][col] === "C") {
                    adjacentCells++
                }
                if (col !== 0 && this.board[row][col-1] === "C") {
                    adjacentCells++
                }
                if (row !== this.boardSize-1 && this.board[row+1][col] === "C") {
                    adjacentCells++
                }
                if (col !== this.boardSize-1 && this.board[row][col+1] === "C") {
                    adjacentCells++
                }
                if (adjacentCells < 2 || adjacentCells > 4) {
                    this.board[row][col] = ""
                } else if (adjacentCells === 3) {
                    this.board[row][col] = "C"
                }
            }
        }
    }
}

export default BoardPage