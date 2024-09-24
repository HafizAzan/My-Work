import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  StyledText,
} from "../styles/style-service";
import CustomDrawer from "./CustomDrawer";
import { SCREEN_ROUTE } from "../RouteConstant/ScreenRoute";

export default function TicTacToe({ route, navigation }) {
  const { selectedOption } = route.params;
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [timer, setTimer] = useState(15); // Timer state
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [volumeMuted, setVolumeMuted] = useState(false);

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
    setTimer(15); // Reset the timer after a valid move
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
    }
  }, [board]);

  // Timer Logic
  useEffect(() => {
    if (!winner) {
      const timeout = setTimeout(() => {
        setTimer((prev) => {
          if (prev === 1) {
            // Timer ran out, the other player wins
            const losingPlayer = isNext
              ? selectedOption
              : selectedOption === "X"
              ? "O"
              : "X";
            setWinner(losingPlayer);
            Alert.alert("Time Out", `Player ${losingPlayer} Wins by Timeout!`, [
              { text: "OK", onPress: resetGame },
            ]);
            return 15; // Reset timer
          } else {
            return prev - 1;
          }
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [timer, isNext, winner]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setWinner(null);
    setTimer(15); // Reset timer
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

  const goBack = () => {
    navigation.navigate(`${SCREEN_ROUTE.HOME}`);
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
          handleResetButton={handleResetButton}
          goBack={goBack}
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
          <Text style={{ fontSize: 30 }}>-</Text>
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
            Next Turn:{" "}
            {isNext ? selectedOption : selectedOption === "X" ? "O" : "X"}
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
