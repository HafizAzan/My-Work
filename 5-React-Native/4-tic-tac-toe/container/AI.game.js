import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Box,
  CustomSafeAreaView,
  CustomText,
  ScoreContainer,
  StyledText,
  WinnerText,
  WrapperCon,
} from "../styles/style-service";
import CustomDrawer from "./CustomDrawer";
import { SCREEN_ROUTE } from "../RouteConstant/ScreenRoute";

export default function AiGame({ route, navigation }) {
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
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [volumeMuted, setVolumeMuted] = useState(false);

  // New state for the timer
  const [timer, setTimer] = useState(15);

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
    resetTimer(); // Reset the timer after AI's move
  };

  // Timer countdown logic
  useEffect(() => {
    if (timer === 0) {
      if (isNext) {
        Alert.alert("Time's Up!", "AI Wins by timeout!", [
          { text: "OK", onPress: resetGame },
        ]);
      } else {
        computerMove(); // Let AI play when player times out
      }
      return;
    }

    const countdown = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, isNext]);

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
      if (winner || board.every((square) => square !== null)) {
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
    setDrawerVisible(false);
    resetTimer(); // Reset timer on game reset
  };

  const resetTimer = () => {
    setTimer(15); // Reset the timer back to 15 seconds
  };

  const isWinningCell = (index) => winningCombo.includes(index);

  return (
    <CustomSafeAreaView style={styles.safeArea}>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "90%",
          marginBottom: 50,
        }}
      >
        <CustomDrawer
          handleResetButton={resetGame}
          goBack={() => navigation.navigate(`${SCREEN_ROUTE.HOME}`)}
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
          volumeMuted={volumeMuted}
          setVolumeMuted={setVolumeMuted}
        />
      </View>
      <ScoreContainer>
        <StyledText style={styles.height}>Player X</StyledText>
        <View style={styles.scoreCon}>
          <Text style={styles.text}>{scoreX}</Text>
          <Text style={{ fontSize: 10 }}>-</Text>
          <Text style={styles.text}>{scoreO}</Text>
        </View>
        <StyledText style={styles.height}>O Player</StyledText>
      </ScoreContainer>
      <WrapperCon>
        {board.map((value, index) => (
          <Box
            key={index}
            isWinning={isWinningCell(index)}
            isTwoChild={index === 1}
            isFiveChild={index === 4}
            isEightChild={index === 7}
            isThirdChild={index === 2 || index === 3 || index === 0}
            isSixChild={index === 5}
            isSevenChild={index === 6}
            isNineChild={index === 8}
          >
            <TouchableOpacity onPress={() => clickBtnHandler(index)}>
              <CustomText style={value == "O" ? styles.Ovalue : styles.Xvalue}>
                {value}
              </CustomText>
            </TouchableOpacity>
          </Box>
        ))}
      </WrapperCon>

      {winner ? (
        <WinnerText style={styles.onHeight}>Game Over: {winner}</WinnerText>
      ) : (
        <>
          <StyledText style={styles.onHeight}>
            Next Turn: {isNext ? selectedOption : aiSymbol}
          </StyledText>
          <View style={styles.timerView}>
            <StyledText style={styles.timerText}>{timer}s</StyledText>
          </View>
        </>
      )}
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
  scoreCon: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  height: {
    height: 20,
  },
  onHeight: {
    height: 60,
    fontSize: 50,
    marginTop: 20,
  },
  safeArea: {
    marginTop: 50,
  },
  timerText: {
    fontSize: 30,
    color: "blue",
  },
  timerView: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "black",
  },
});
