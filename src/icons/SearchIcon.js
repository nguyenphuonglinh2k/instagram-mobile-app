import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const SearchIcon = ({ height, width, color, isFocused, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M9.58335 17.0889C13.9556 17.0889 17.5 13.5445 17.5 9.17228C17.5 4.80003 13.9556 1.25562 9.58335 1.25562C5.2111 1.25562 1.66669 4.80003 1.66669 9.17228C1.66669 13.5445 5.2111 17.0889 9.58335 17.0889Z"
        stroke={color}
        strokeWidth={isFocused ? "2.5" : "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3333 17.9223L16.6666 16.2556"
        stroke={color}
        strokeWidth={isFocused ? "2.5" : "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

SearchIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  isFocused: PropTypes.bool,
};

SearchIcon.defaultProps = {
  color: "#292D32",
  width: 20,
  height: 20,
};

export default SearchIcon;
