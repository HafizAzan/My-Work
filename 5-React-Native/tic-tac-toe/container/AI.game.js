import { useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CustomButton from "../components/CustomButton";
import {
  Box,
  CustomSafeAreaView,
  CustomText,
  ScoreContainer,
  ScoreText,
  WinnerText,
  WrapperCon,
} from "../styles/style-service";
import CustomBgCard from "../components/CustomBgCard";

export default function AiGame({ route }) {
  const { selectedOption } = route.params;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const aiSymbol = selectedOption === "X" ? "O" : "X";
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFirstTurn, setIsFirstTurn] = useState(true);

  const CheckWinner = (squares) => {
    const winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombo) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], combo: [a, b, c] };
      }
    }
    return { winner: null, combo: [] };
  };

  const clickBtnHandler = (index) => {
    if (board[index] || winner || isDisabled) return;
    const newBoard = board.slice();
    newBoard[index] = selectedOption;
    setBoard(newBoard);
    setIsNext(false);
    setIsDisabled(true);
  };

  const minimax = (newBoard, isMaximizing) => {
    const { winner } = CheckWinner(newBoard);
    if (winner === selectedOption) return -10;
    if (winner === aiSymbol) return 10;
    if (!newBoard.includes(null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      newBoard.forEach((cell, index) => {
        if (cell === null) {
          newBoard[index] = aiSymbol; // AI's turn
          const score = minimax(newBoard, false);
          newBoard[index] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      newBoard.forEach((cell, index) => {
        if (cell === null) {
          newBoard[index] = selectedOption; // Player's turn
          const score = minimax(newBoard, true);
          newBoard[index] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const computerMove = () => {
    let bestScore = -Infinity;
    let move;
    board.forEach((cell, index) => {
      if (cell === null) {
        const newBoard = board.slice();
        newBoard[index] = aiSymbol; // AI's turn
        const score = minimax(newBoard, false);
        if (score > bestScore) {
          bestScore = score;
          move = index;
        }
      }
    });
    const newBoard = board.slice();
    newBoard[move] = aiSymbol; // AI's move
    setBoard(newBoard);
    setIsNext(true);
    setIsDisabled(false);
    setIsFirstTurn(false);
  };

  useEffect(() => {
    const { winner, combo } = CheckWinner(board);

    if (winner) {
      setWinner(winner);
      setWinningCombo(combo);

      if (winner === selectedOption) {
        setScoreX(scoreX + 10);
      } else if (winner === aiSymbol) {
        setScoreO(scoreO + 10);
      }

      Alert.alert("Game Over", `Player ${winner} Wins!`, [
        { text: "OK", onPress: resetGame },
      ]);
    } else if (!board.includes(null)) {
      setWinner("Draw");
      Alert.alert("Game Over", "It's a draw!", [
        { text: "OK", onPress: resetGame },
      ]);
    } else {
      if (board.filter((square) => square === null).length <= 1) {
        Alert.alert("Game Reset", "The game will reset due to imminent draw.", [
          { text: "OK", onPress: resetGame },
        ]);
      } else if (winner || board.every((square) => square !== null)) {
        return;
      }

      if (!isNext) {
        const computerMoveTimeout = setTimeout(
          () => {
            computerMove();
          },
          isFirstTurn ? 0 : 400
        );
        return () => clearTimeout(computerMoveTimeout);
      }
    }
  }, [board, isNext]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setWinner(null);
    setWinningCombo([]);
    setIsDisabled(false);
  };

  const handleResetButton = () => {
    Alert.alert(
      "Confirm Reset",
      "Are you sure you want to reset the game?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: resetGame,
        },
      ],
      { cancelable: false }
    );
  };

  const isWinningCell = (index) => winningCombo.includes(index);

  return (
    <CustomSafeAreaView>
      <CustomBgCard>
        <ScoreContainer>
          <ScoreText>Player X Score: {scoreX}</ScoreText>
          <ScoreText>Player O Score: {scoreO}</ScoreText>
        </ScoreContainer>
        <WrapperCon>
          {board.map((value, key) => (
            <Box key={key} isWinning={isWinningCell(key)}>
              <TouchableOpacity onPress={() => clickBtnHandler(key)}>
                <CustomText
                  style={`${value == "O" ? styles.Ovalue : styles.Xvalue}`}
                >
                  {value}
                </CustomText>
              </TouchableOpacity>
            </Box>
          ))}
        </WrapperCon>

        {winner ? (
          <WinnerText>Game Over: {winner}</WinnerText>
        ) : (
          <WinnerText>
            Next Turn: {isNext ? selectedOption : aiSymbol}
          </WinnerText>
        )}
      </CustomBgCard>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  Ovalue: {
    color: "orange",
    textShadowColor: "rgba(255, 165, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  Xvalue: {
    color: "blue",
    textShadowColor: "rgba(255, 165, 0, 0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
