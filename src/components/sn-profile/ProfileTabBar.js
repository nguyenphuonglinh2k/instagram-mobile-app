import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { PhotoIcon, VideoIcon } from "icons";

const ProfileTabBar = ({ selectedTab, setSelectedTab }) => {
  const onChangeActivatedTab = value => () => {
    setSelectedTab(value);
  };

  return (
    <View style={styles.wrapper}>
      {TAB_DATA.map(({ icon: Icon, tabValue }) => {
        const isTabSelected = Boolean(selectedTab === tabValue);

        return (
          <TouchableOpacity
            activeOpacity={0.9}
            key={tabValue}
            onPress={onChangeActivatedTab(tabValue)}
            style={[styles.tab, isTabSelected && styles.selected]}
          >
            <Icon
              color={isTabSelected ? "#292D32" : "#3A466480"}
              style={styles.icon}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProfileTabBar;

ProfileTabBar.propTypes = {
  selectedTab: PropTypes.number,
  setSelectedTab: PropTypes.func,
};

export const PROFILE_TAB_VALUES = {
  photo: 1,
  video: 2,
};

export const TAB_DATA = [
  {
    icon: PhotoIcon,
    tabValue: PROFILE_TAB_VALUES.photo,
  },
  {
    icon: VideoIcon,
    tabValue: PROFILE_TAB_VALUES.video,
  },
];

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selected: {
    borderBottomColor: "#292D32",
  },
  tab: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#C4C4C4",
    paddingVertical: 8,
    flex: 1,
  },
  icon: {
    display: "flex",
    alignSelf: "center",
  },
});
