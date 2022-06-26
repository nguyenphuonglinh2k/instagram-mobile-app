import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Timeline, SignIn, CreatePost, Profile } from "screens";
import { RouteName } from "const/path.const";

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.SIGN_IN} component={SignIn} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.TIMELINE} component={Timeline} />
    </Stack.Navigator>
  );
};

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.PROFILE} component={Profile} />
    </Stack.Navigator>
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
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.CREATE_POST} component={CreatePost} />
    </Stack.Navigator>
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
