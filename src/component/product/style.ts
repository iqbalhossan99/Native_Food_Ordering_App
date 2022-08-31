import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  product: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    width: 140,
    height: 221,
    flex: 1, // It's work when used numColumn in flatlist
    // marginHorizontal: 8,
    shadowColor: " #202020",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16.0,
    elevation: 12,
    marginTop: 24,
    marginBottom: 40,
  },

  comboGap: {
    marginHorizontal: 8,
  },
  itemSeparator: { height: "100%", width: 16 },
  productImgContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  productImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 23,
    // letterSpacing: 1,
    marginVertical: 8,
    textAlign: "left",
  },
  productPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    color: "#F08626",
    lineHeight: 20,
    marginLeft: 4,
  },
  productBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plusIcon: {
    backgroundColor: "#FFFAEB",
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});

export default styles;
