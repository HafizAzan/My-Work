import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ResturantInfo from "./ResturantInfo";
import { List } from "react-native-paper";

export const RestaurantDetail = (props) => {
  const { SingleResturantInfo } = props?.route?.params;
  const [breakFast, setBreakFast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <ResturantInfo SingleResturantInfo={SingleResturantInfo} />
        <List.Accordion
          title="Break-Fast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={() => setBreakFast(!breakFast)}
          expanded={breakFast}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic BreakFast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={() => setLunch(!lunch)}
          expanded={lunch}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={() => setDinner(!dinner)}
          expanded={dinner}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={() => setDrinks(!drinks)}
          expanded={drinks}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};
