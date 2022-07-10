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
import { PathConstant } from "const";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const AvatarIcon = ({ isFocused }) => {
  const authUser = useSelector(({ authRedux }) => authRedux.user);

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
        uri:
          authUser.userImageUrl ||
          "https://i.pinimg.com/736x/10/c9/c0/10c9c02224ae9c08ba781bae2a856675.jpg",
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
        name={PathConstant.TabName.home}
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <HomeIcon isFocused={focused} />,
        })}
      />

      <Tab.Screen
        name={PathConstant.TabName.explore}
        component={ExploreStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <SearchIcon isFocused={focused} />,
        })}
      />

      <Tab.Screen
        name={PathConstant.TabName.post}
        component={CreatePostStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <RoundPlusIcon isFocused={focused} />,
        })}
      />

      <Tab.Screen
        name={PathConstant.TabName.chat}
        component={ChatStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <MessageIcon isFocused={focused} />,
        })}
      />
      <Tab.Screen
        name={PathConstant.TabName.profile}
        component={ProfileStack}
        options={() => ({
          tabBarIcon: ({ focused }) => <AvatarIcon isFocused={focused} />,
        })}
      />
    </Tab.Navigator>
  );
}
