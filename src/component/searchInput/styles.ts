import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F9",
    borderRadius: 16,
    paddingVertical: 17,
    flex: 5,
  },
  textIput: {
    marginLeft: 15,
  },
  searchRight: {
    flex: 1,
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});

export default styles;
