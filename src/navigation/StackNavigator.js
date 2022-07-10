import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Timeline,
  SignIn,
  SignUp,
  CreatePost,
  Profile,
  Comment,
  Setting,
  ForgotPassword,
  ResetPassword,
  Following,
  Followers,
  ExploreGallery,
} from "screens";
import { RouteName } from "const/path.const";

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={RouteName.SIGN_IN} component={SignIn} />
      <Stack.Screen name={RouteName.SIGN_UP} component={SignUp} />
      <Stack.Screen
        name={RouteName.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={RouteName.TIMELINE}
    >
      <Stack.Screen name={RouteName.TIMELINE} component={Timeline} />
      <Stack.Screen name={RouteName.COMMENT} component={Comment} />
      {renderCommonProfile()}
    </Stack.Navigator>
  );
};

const renderCommonProfile = () => {
  return (
    <Stack.Group>
      <Stack.Screen name={RouteName.PROFILE} component={Profile} />
      <Stack.Screen name={RouteName.FOLLOWING} component={Following} />
      <Stack.Screen name={RouteName.FOLLOWERS} component={Followers} />
    </Stack.Group>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={RouteName.PROFILE}
    >
      <Stack.Screen name={RouteName.SETTING} component={Setting} />
      <Stack.Screen name={RouteName.RESET_PASSWORD}>
        {props => <ResetPassword isBackScreen {...props} />}
      </Stack.Screen>
      {renderCommonProfile()}
    </Stack.Navigator>
  );
};

const ExploreStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={RouteName.EXPLORE_GALLERY}
        component={ExploreGallery}
      />
    </Stack.Navigator>
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
