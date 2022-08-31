
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/homeScreen";
import AddToBasket from "../screens/addToBasket";
import { Button, Image, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { CommonActions } from '@react-navigation/native';
import BackButton from "../component/backButton/BackButton";
import OrderList from "../screens/orderList";
import OrderCompleteScreen from "../screens/orderCompleteScreen";
import TrackOrderScreen from "../screens/trackOrder";
import WelcomeScreen from "../screens/welcomeScreen";
import AuthenticationScreen from "../screens/authenticationScreen";
import CounterClock from "../component/counter/CounterClock";
import CounterToolkit from "../component/counter/CounterToolkit";


export type RootStackParamList = {
  Welcome: undefined;
  Authentication: undefined;
  Home: undefined;
  Details: { id: any };
  OrderList: undefined;
  OrderComplete: undefined;
  TrackOrder: undefined;
  CounterClock: undefined;
  CounterToolkit: undefined;
  // singleProduct: { id: string }
};

const Stack = createNativeStackNavigator<RootStackParamList>();



const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CounterToolkit">
        <Stack.Screen name="CounterClock" component={CounterClock}
          options={{
            // headerShown: false,
            headerTitle: '',
            orientation: "all",
            headerStyle: {
              backgroundColor: "#FFA451"
            },
            headerShadowVisible: false
          }}
        />
        <Stack.Screen name="CounterToolkit" component={CounterToolkit}
          options={{
            // headerShown: false,
            headerTitle: '',
            orientation: "all",
            headerStyle: {
              backgroundColor: "#FFA451"
            },
            headerShadowVisible: false
          }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen}
          options={{
            // headerShown: false,
            headerTitle: '',
            orientation: "all",
            headerStyle: {
              backgroundColor: "#FFA451"
            },
            headerShadowVisible: false
          }}
        />
        <Stack.Screen name="Authentication" component={AuthenticationScreen}
          options={{
            // headerShown: false,
            headerTitle: '',
            orientation: "all",
            headerStyle: {
              backgroundColor: "#FFA451"
            },
            headerShadowVisible: false,
            headerBackVisible: false

          }}
        />
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false,
            orientation: "all",

          }}
        />
        <Stack.Screen name="Details" component={AddToBasket}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#FFA451"
            },
            headerShadowVisible: false,
            orientation: "all",

            headerLeft: () => (
              <BackButton />
            ),
            // headerShown: false
          }}
        />
        <Stack.Screen name="OrderList" component={OrderList}
          options={{
            title: "My Basket",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#FFA451",

            },
            headerShadowVisible: false,
            orientation: "all",

            headerLeft: () => (
              <BackButton />
            ),
            // headerShown: false
          }}
        />
        <Stack.Screen name="OrderComplete" component={OrderCompleteScreen}
          options={{

            orientation: "all",
            headerShown: false
          }}
        />
        <Stack.Screen name="TrackOrder" component={TrackOrderScreen}
          options={{
            title: "Delivery Status",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#FFA451",
            },
            headerShadowVisible: false,
            orientation: "all",

            headerLeft: () => (
              <BackButton />
            ),
            // headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;