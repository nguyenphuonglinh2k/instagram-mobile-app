import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { MainLayout } from "layouts";
import {
  Avatar,
  ProfileStatistic,
  UserInfo,
  FollowAndChatAction,
  ProfileTabBar,
  Gallery,
  EmptyData,
} from "components";
import { PROFILE_TAB_VALUES } from "components/sn-profile/ProfileTabBar";
import { SettingIcon } from "icons";
import { useNavigation } from "@react-navigation/native";
import { RouteName } from "const/path.const";
import { PostService } from "services/";
import { useSelector } from "react-redux";
import { ApiConstant } from "const/";

const Profile = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(PROFILE_TAB_VALUES.photo);

  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const [posts, setPosts] = useState([]);

  const onGetMyPosts = useCallback(async () => {
    const response = await PostService.getMyPosts(authUser._id);

    if (response.status === ApiConstant.STT_OK) {
      setPosts(response.data);
    }
  }, [authUser]);

  useEffect(() => {
    onGetMyPosts();
  }, [onGetMyPosts]);

  return (
    <MainLayout
      headerProps={{
        headerRight: (
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.SETTING)}
          >
            <SettingIcon />
          </TouchableOpacity>
        ),
      }}
    >
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar />
          <ProfileStatistic
            totalPost={posts.length}
            style={{ flex: 1, marginLeft: 24 }}
          />
        </View>

        <UserInfo style={{ marginTop: 10, marginBottom: 20 }} />
        <FollowAndChatAction style={{ marginBottom: 16 }} />

        <ProfileTabBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === PROFILE_TAB_VALUES.photo && <Gallery data={posts} />}
        {selectedTab === PROFILE_TAB_VALUES.video && (
          <EmptyData title="No video here" />
        )}
      </ScrollView>
    </MainLayout>
  );
};

export default Profile;
