import * as React from "react";
import { Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, SearchIcon, RoundPlusIcon, MessageIcon } from "icons";
import { Timeline } from "../screen";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Timeline} />
    </HomeStack.Navigator>
  );
};

const AvatarIcon = () => {
  return (
    <Image
      style={{ height: 24, width: 24, borderRadius: 20 }}
      source={{
        uri: "https://i.pinimg.com/736x/10/c9/c0/10c9c02224ae9c08ba781bae2a856675.jpg",
      }}
    />
  );
};

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
    </View>
  );
};

const CreateScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Create</Text>
    </View>
  );
};

const ChatScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat</Text>
    </View>
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
        component={HomeStackScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => <HomeIcon />,
        })}
      />

      <Tab.Screen
        name="Explore"
        component={SearchScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => <SearchIcon />,
        })}
      />

      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => <RoundPlusIcon />,
        })}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => <MessageIcon />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => <AvatarIcon />,
        })}
      />
    </Tab.Navigator>
  );
}
