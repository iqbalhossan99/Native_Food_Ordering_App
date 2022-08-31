import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 228,
    width: "100%",
    // backgroundColor: "tomato",
  },
  map: {
    flex: 1,
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
  toolTip: {
    // backgroundColor: "transparent",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
});

export default styles;
