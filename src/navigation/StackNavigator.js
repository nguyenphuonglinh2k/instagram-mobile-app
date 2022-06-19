import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Timeline, SignIn } from "screens";

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Timeline} />
    </Stack.Navigator>
  );
};

function ProfileStack() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const ExploreStack = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
    </View>
  );
};

const CreatePostStack = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create</Text>
    </View>
  );
};

const ChatStack = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat</Text>
    </View>
  );
};

export {
  AuthStack,
  HomeStack,
  ProfileStack,
  ChatStack,
  CreatePostStack,
  ExploreStack,
};
