import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RouteName } from "const/path.const";
import { shallowEqual, useSelector } from "react-redux";

const ProfileStatistic = ({ totalPost, style = {}, ...otherProps }) => {
  const navigation = useNavigation();

  const [followers, following] = useSelector(
    ({ userRedux }) => [userRedux.followers, userRedux.following],
    shallowEqual,
  );

  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <StatisticItem number={totalPost} label="Posts" />
      <StatisticItem
        number={followers.length}
        label="Followers"
        onPress={() => navigation.navigate(RouteName.FOLLOWERS)}
      />
      <StatisticItem
        number={following.length}
        label="Following"
        onPress={() => navigation.navigate(RouteName.FOLLOWING)}
      />
    </View>
  );
};

const StatisticItem = ({ number, label, style = {}, ...otherProps }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ alignItems: "center", ...style }}
      {...otherProps}
    >
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

StatisticItem.propTypes = {
  number: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
};

ProfileStatistic.propTypes = {
  style: PropTypes.object,
  totalPost: PropTypes.number,
};

ProfileStatistic.defaultProps = {
  totalPost: 0,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  number: {
    fontSize: 16,
    fontWeight: "700",
    color: "#262626",
  },
  label: {
    color: "#262626",
    fontSize: 12,
    marginTop: 6,
  },
});

export default ProfileStatistic;
