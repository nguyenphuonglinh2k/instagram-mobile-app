import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { OutlinedButton, ContainedButton } from "components";

const FollowUserItem = ({ data }) => {
  const [isFollowing, setIsFollowing] = useState(true);

  const onToggleIsFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity activeOpacity={0.7} style={styles.info}>
        <Image style={styles.avatar} source={{ uri: data.userImageUrl }} />
        <Text style={styles.name}>{data.name}</Text>
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
          labelProps={{ style: { paddingVertical: 6 } }}
        />
      )}
    </View>
  );
};

FollowUserItem.propTypes = {
  data: PropTypes.shape({
    userImageUrl: PropTypes.string,
    name: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
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

export default FollowUserItem;
