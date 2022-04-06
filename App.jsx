import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CartItem from "./components/CartItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CartItem
        title={"Model X"}
        subtitle="Order Online for"
        subtitleCTA={"Touchless Delivery"}
        backgroundImage={require("./assets/images/ModelX.jpeg")}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
