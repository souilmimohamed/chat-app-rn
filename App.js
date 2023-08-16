import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddToChatScreen,
  ChatScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SignUpScreen,
  SplashScreen,
} from "./screens";
import { Provider } from "react-redux";
import Store from "./context/store";
const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="SplashScreen" component={SplashScreen} />
          <stack.Screen name="LoginScreen" component={LoginScreen} />
          <stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <stack.Screen name="HomeScreen" component={HomeScreen} />
          <stack.Screen name="AddToChatScreen" component={AddToChatScreen} />
          <stack.Screen name="ChatScreen" component={ChatScreen} />
          <stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
