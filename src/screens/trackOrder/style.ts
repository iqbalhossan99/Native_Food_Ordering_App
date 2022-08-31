import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tarckOrderContainer: {
    paddingTop: 40,
    paddingBottom: 50,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    height: "100%",
  },
  trackStep: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trackImgAndText: { flexDirection: "row", alignItems: "center" },
  imgContainer: {
    height: 64,
    width: 65,
    backgroundColor: "#FFFAEB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  prepared: {
    backgroundColor: "#F1EFF6",
  },
  deliver: {
    backgroundColor: "#FEF0F0",
  },
  received: { backgroundColor: "#F0FEF8" },
  trackImg: { width: 50, height: 50 },
  text: { fontSize: 16, lineHeight: 23, marginLeft: 16 },
  lineImgContainer: {
    width: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  lineImg: {
    width: 3,
    height: 50,
    backgroundColor: "#FFA451",
  },
});

export default styles;
