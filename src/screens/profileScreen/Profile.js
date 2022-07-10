import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteName } from "const/path.const";
import { PostService } from "services/";
import { useDispatch, useSelector } from "react-redux";
import { ApiConstant } from "const/";
import UserActions from "reduxStore/user.redux";
import { useIsFocused } from "@react-navigation/native";

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const router = useRoute();
  const userIdParams = router.params?.userId;
  const username = router.params?.name;

  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const [posts, setPosts] = useState([]);
  const [selectedTab, setSelectedTab] = useState(PROFILE_TAB_VALUES.photo);

  // Memo
  const isBackScreen = useMemo(() => {
    return Boolean(userIdParams && userIdParams !== authUser._id);
  }, [userIdParams, authUser]);

  const userId = useMemo(() => {
    return userIdParams || authUser._id;
  }, [userIdParams, authUser]);

  // Function
  const onGetMyPosts = useCallback(async () => {
    const response = await PostService.getMyPosts(userId);

    if (response.status === ApiConstant.STT_OK) {
      setPosts(response.data);
    }
  }, [userId]);

  const onGetFollowersAndFollowing = useCallback(async () => {
    dispatch(UserActions.getFollowersRequest(userId));
    dispatch(UserActions.getFollowingRequest(userId));
  }, [userId, dispatch]);

  const onGetUserInfo = useCallback(() => {
    if (!userId) return;
    dispatch(UserActions.getUserInfoRequest(userId));
  }, [userId, dispatch]);

  useEffect(() => {
    if (!isFocused) return;
    onGetMyPosts();
    onGetFollowersAndFollowing();
    onGetUserInfo();
  }, [isFocused, onGetMyPosts, onGetFollowersAndFollowing, onGetUserInfo]);

  return (
    <MainLayout
      isBackScreen={isBackScreen}
      headerProps={{
        title: isBackScreen ? username : "",
        headerRight: !isBackScreen && (
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.SETTING)}
          >
            <SettingIcon />
          </TouchableOpacity>
        ),
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingTop: isBackScreen ? 12 : 0,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar />
          <ProfileStatistic
            totalPost={posts.length}
            style={{ flex: 1, marginLeft: 24 }}
          />
        </View>

        <UserInfo userId={userId} style={{ marginTop: 10, marginBottom: 20 }} />
        {Boolean(userIdParams) && (
          <FollowAndChatAction style={{ marginBottom: 16 }} />
        )}

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
