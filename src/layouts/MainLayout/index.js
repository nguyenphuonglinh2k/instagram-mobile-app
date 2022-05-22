import React, { memo } from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";

const MainLayout = ({ children, containerProps, ...otherProps }) => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["right", "top", "left"]}
      {...containerProps}
    >
      <Header {...otherProps} />
      {children}
    </SafeAreaView>
  );
};

export default memo(MainLayout);

MainLayout.propTypes = {
  children: PropTypes.node,
  containerProps: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
