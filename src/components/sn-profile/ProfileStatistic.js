import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";

const ProfileStatistic = ({ style = {}, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <StatisticItem number={40} label="Posts" />
      <StatisticItem number={40} label="Followers" />
      <StatisticItem number={40} label="Following" />
    </View>
  );
};

const StatisticItem = ({ number, label, style = {}, ...otherProps }) => {
  return (
    <View style={{ alignItems: "center", ...style }} {...otherProps}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

StatisticItem.propTypes = {
  number: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
};

ProfileStatistic.propTypes = {
  style: PropTypes.object,
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
