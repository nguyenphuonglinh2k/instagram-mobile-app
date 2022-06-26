import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MainLayout } from "layouts";
import {
  Avatar,
  ProfileStatistic,
  UserInfo,
  FollowAndChatAction,
  ProfileTabBar,
  Gallery,
} from "components";
import { PROFILE_TAB_VALUES } from "components/sn-profile/ProfileTabBar";
import { SettingIcon } from "icons";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(PROFILE_TAB_VALUES.photo);

  return (
    <MainLayout
      headerProps={{
        headerRight: (
          <TouchableOpacity>
            <SettingIcon />
          </TouchableOpacity>
        ),
      }}
    >
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar />
          <ProfileStatistic style={{ flex: 1, marginLeft: 24 }} />
        </View>

        <UserInfo style={{ marginTop: 10, marginBottom: 20 }} />
        <FollowAndChatAction style={{ marginBottom: 16 }} />

        <ProfileTabBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === PROFILE_TAB_VALUES.photo && <Gallery />}
      </ScrollView>
    </MainLayout>
  );
};

export default Profile;
