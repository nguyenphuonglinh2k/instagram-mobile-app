import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, SearchIcon, RoundPlusIcon, MessageIcon } from "icons";
import {
  HomeStack,
  ProfileStack,
  ChatStack,
  CreatePostStack,
  ExploreStack,
} from "./StackNavigator";

// eslint-disable-next-line react/prop-types
const AvatarIcon = ({ isFocused }) => {
  return (
    <Image
      style={{
        height: 24,
        width: 24,
        borderRadius: 20,
        borderColor: "#000",
        borderWidth: isFocused ? 2 : 0,
      }}
      source={{
        uri: "https://i.pinimg.com/736x/10/c9/c0/10c9c02224ae9c08ba781bae2a856675.jpg",
      }}
    />
  );
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 40,
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <HomeIcon isFocused={focused} />,
        })}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <SearchIcon isFocused={focused} />,
        })}
      />

      <Tab.Screen
        name="Create"
        component={CreatePostStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <RoundPlusIcon isFocused={focused} />,
        })}
      />

      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <MessageIcon isFocused={focused} />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <AvatarIcon isFocused={focused} />,
        })}
      />
    </Tab.Navigator>
  );
}
