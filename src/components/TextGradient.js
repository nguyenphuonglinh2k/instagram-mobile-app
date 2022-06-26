import React, { memo } from "react";
import PropTypes from "prop-types";
import MaskedView from "@react-native-masked-view/masked-view";
import { StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const TextGradient = ({
  label,
  labelProps,
  gradientProps,
  style,
  ...otherProps
}) => {
  const { style: labelStyle, ...otherLabelProps } = labelProps;

  return (
    <MaskedView
      maskElement={
        <Text
          style={[{ backgroundColor: "transparent" }, styles.label, labelStyle]}
          {...otherLabelProps}
        >
          {label}
        </Text>
      }
      {...otherProps}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.3]}
        colors={["#9796F0", "#FBC7D4"]}
        {...gradientProps}
      >
        <Text
          style={[{ opacity: 0 }, styles.label, labelStyle]}
          {...otherLabelProps}
        >
          {label}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

TextGradient.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  gradientProps: PropTypes.object,
  labelProps: PropTypes.shape({
    style: PropTypes.object,
  }),
};

TextGradient.defaultProps = {
  labelProps: { style: {} },
};

export default memo(TextGradient);

const styles = StyleSheet.create({
  label: {
    fontWeight: "700",
  },
});
