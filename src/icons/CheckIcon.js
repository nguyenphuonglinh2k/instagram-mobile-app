import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const CheckIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M6.25 16.25L11.25 21.25L23.75 8.75"
        stroke="#1A73E9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

CheckIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CheckIcon.defaultProps = {
  color: "#1A73E9",
  width: 30,
  height: 30,
};

export default CheckIcon;
