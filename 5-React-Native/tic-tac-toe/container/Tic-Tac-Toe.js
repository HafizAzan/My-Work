import { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import CustomButton from "../components/CustomButton";
import {
  Box,
  CusText,
  CustomSafeAreaView,
  CustomText,
  ScoreContainer,
  ScoreText,
  WinnerText,
  WrapperCon,
} from "../styles/style-service";
import CustomBgCard from "../components/CustomBgCard";

export default function TicTacToe({ route }) {
  const { selectedOption } = route.params;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

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
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isNext
      ? selectedOption
      : selectedOption === "X"
      ? "O"
      : "X";

    setBoard(newBoard);
    setIsNext(!isNext);
  };

  useEffect(() => {
    const { winner, combo } = CheckWinner(board);

    if (winner) {
      setWinner(winner);
      setWinningCombo(combo);

      if (winner === "X") {
        setScoreX(scoreX + 10);
      } else if (winner === "O") {
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
      }
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setWinner(null);
    setWinningCombo([]);
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
                <CustomText>{value}</CustomText>
              </TouchableOpacity>
            </Box>
          ))}
        </WrapperCon>

        {winner ? (
          <WinnerText>Game Over: {winner}</WinnerText>
        ) : (
          <WinnerText>Next Turn: {isNext ? "X" : "O"}</WinnerText>
        )}

        <CustomButton onPress={handleResetButton}>
          <CusText>Restart</CusText>
        </CustomButton>
      </CustomBgCard>
    </CustomSafeAreaView>
  );
}
