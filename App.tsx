const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignUp from "./components/SignUp";
import Text1 from "./components/Text1";
import Frame3 from "./components/Frame3";
import Fling1 from "./components/Fling1";
import Line from "./components/Line";
import Component1 from "./components/Component1";
import Frame4 from "./components/Frame4";
import Frame2 from "./components/Frame2";
import Frame1 from "./components/Frame1";
import Frame from "./components/Frame";
import Vibe1 from "./components/Vibe1";
import Line2 from "./components/Line2";
import Nav from "./components/Nav";
import Text2 from "./components/Text2";
import Nav1 from "./components/Nav1";
import Component from "./components/Component";
import Line4 from "./components/Line4";
import Line1 from "./components/Line1";
import Component2 from "./components/Component2";
import Me2 from "./components/Me2";
import Text3 from "./components/Text3";
import Me1 from "./components/Me1";
import Line3 from "./components/Line3";
import EditContact from "./components/EditContact";
import PayAndService from "./components/PayAndService";
import VibesPage from "./components/VibesPage";
import PeopleNearby from "./components/PeopleNearby";
import Main from "./components/Main";
import Vibe from "./components/Vibe";
import MomentsPage from "./components/MomentsPage";
import VerificationCode from "./components/VerificationCode";
import Invite from "./components/Invite";
import AddTags1 from "./components/AddTags1";
import Homepage from "./components/Homepage";
import Login from "./screens/Login";
import Chat from "./components/Chat";
import Me from "./components/Me";
import ProfileMore from "./components/ProfileMore";
import UserProfile from "./components/UserProfile";
import Profile from "./components/Profile";
import UserMoments1 from "./components/UserMoments1";
import Fling from "./components/Fling";
import PaymentManagement from "./components/PaymentManagement";
import Money from "./components/Money";
import MyMoments from "./components/MyMoments";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
