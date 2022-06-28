import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import { MainLayout } from "layouts";
import { OutlinedButton, ContainedButton } from "components";

const Following = () => {
  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Following",
      }}
    >
      <FlatList
        data={MOCK_COMMENTS}
        renderItem={({ item }) => <FollowingItem data={item} />}
        keyExtractor={(_, i) => i}
        contentContainerStyle={styles.list}
      />
    </MainLayout>
  );
};

const FollowingItem = ({ data }) => {
  const [isFollowing, setIsFollowing] = useState(true);

  const onToggleIsFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity activeOpacity={0.7} style={styles.info}>
        <Image style={styles.avatar} source={{ uri: data.userImageSrc }} />
        <Text style={styles.name}>{data.username}</Text>
      </TouchableOpacity>

      {isFollowing ? (
        <OutlinedButton
          onPress={onToggleIsFollowing}
          label="Unfollow"
          style={styles.gradientButton}
          labelWrapperProps={{ style: styles.labelWrapper }}
        />
      ) : (
        <ContainedButton
          onPress={onToggleIsFollowing}
          label="Follow"
          style={styles.gradientButton}
          labelProps={{ style: { paddingVertical: 4 } }}
        />
      )}
    </View>
  );
};

FollowingItem.propTypes = {
  data: PropTypes.shape({
    userImageSrc: PropTypes.string,
    username: PropTypes.string,
  }),
};

const MOCK_COMMENTS = Array.from(new Array(5)).map((_, i) => ({
  id: i + 1,
  userImageSrc:
    "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg",
  username: "Damian",
  status: "Following",
}));

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  item: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 12,
    color: "#262626",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#3A466480",
  },
  gradientButton: {
    width: 102,
    height: 30,
    marginLeft: 20,
  },
  labelWrapper: {
    height: 28,
    width: 100,
  },
});

export default Following;
