import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  //   Modal
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 22,
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
    // alignItems: "center",
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
    // padding: 15,
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
