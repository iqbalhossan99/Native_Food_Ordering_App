import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  orderListContainer: {
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 24,
  },

  orderListSection: { paddingTop: 8, height: 560 },
  orderList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 16,
    borderRadius: 10,
  },
  orderListImgContainer: {
    width: 65,
    height: 65,
    backgroundColor: "#FFFAEB",
    justifyContent: "center",
    alignItems: "center",
  },
  orderListImg: { height: 40, width: 40, borderRadius: 20 },
  orderListName: { fontSize: 16, fontWeight: "500", lineHeight: 23 },
  quantity: { fontSize: 14, lineHeight: 20 },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: { fontSize: 16 },

  // Total price and checkout button

  orderListBottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 100,
  },
  totalTitle: { fontSize: 14, lineHeight: 24 },
  totalPrice: { flexDirection: "row", alignItems: "center" },
  totalPriceText: { fontSize: 24 },
  checkoutBtn: {
    flex: 2.5,
  },

  //   Modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalView: {
    height: 450,
    width: "100%",
    backgroundColor: "white",
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    width: 60,
    height: 60,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonClose: {
    backgroundColor: "#fff",
    marginBottom: 30,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  // Payment btn in modal

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  payBtn: {
    padding: 16,
    borderColor: "#ffa451",
    borderWidth: 1,
    borderRadius: 10,
  },
  payBtnText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#FFA451",
  },
});

export default styles;
