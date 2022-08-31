import { StyleSheet } from "react-native";

interface StyleInterface {}

const styles = StyleSheet.create({
  hpntContainer: {
    // marginBottom: 24,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 24,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 16,
    lineHeight: 23,
    color: "#938DB5",
  },
  active: {
    fontSize: 24,
    lineHeight: 35,
    color: "#27214D",
    position: "relative",
  },

  emptyProduct: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    marginTop: 24,
    width: "70%",
    borderRadius: 16,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "#F08626",
    fontSize: 20,
  },
  separator: {
    height: "100%",
    width: 16,
  },
});

export default styles;
