import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productDetailsContainer: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginTop: -16,
  },

  //   productImgContainer: {
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   productImg: {
  //     height: 80,
  //     width: 80,
  //     borderRadius: 40,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  productName: {
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 32,
  },

  priceAndQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingVertical: 32,
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Icon: {
    backgroundColor: "#FFFAEB",
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  quantityText: {
    marginHorizontal: 24,
    fontSize: 24,
    lineHeight: 32,
  },
  productPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    marginLeft: 4,
    fontSize: 25,
  },
  //   Pack contains
  packContains: {
    paddingTop: 32,
    paddingBottom: 20,
  },
  packTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  packDetails: {
    fontSize: 16,
    lineHeight: 24,
  },

  //   Bottom Details
  bottomDetails: {
    paddingTop: 24,
    paddingBottom: 16,
  },

  addToBasketContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-end",
    marginTop: 40,
  },
  saveIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFAEB",
    alignItems: "center",
    justifyContent: "center",
  },
  addToBasketBtn: {
    flex: 1,
    marginLeft: 60,
  },
});

export default styles;
