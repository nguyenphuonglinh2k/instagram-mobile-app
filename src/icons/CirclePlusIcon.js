import React, { memo } from "react";
import Svg, { Circle, Path } from "react-native-svg";
import PropTypes from "prop-types";

const CirclePlusIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Circle cx="9.5" cy="9.5" r="9.5" fill="white" />
      <Path
        d="M9.5 1C4.8165 1 1 4.8165 1 9.5C1 14.1835 4.8165 18 9.5 18C14.1835 18 18 14.1835 18 9.5C18 4.8165 14.1835 1 9.5 1ZM12.9 10.1375H10.1375V12.9C10.1375 13.2485 9.8485 13.5375 9.5 13.5375C9.1515 13.5375 8.8625 13.2485 8.8625 12.9V10.1375H6.1C5.7515 10.1375 5.4625 9.8485 5.4625 9.5C5.4625 9.1515 5.7515 8.8625 6.1 8.8625H8.8625V6.1C8.8625 5.7515 9.1515 5.4625 9.5 5.4625C9.8485 5.4625 10.1375 5.7515 10.1375 6.1V8.8625H12.9C13.2485 8.8625 13.5375 9.1515 13.5375 9.5C13.5375 9.8485 13.2485 10.1375 12.9 10.1375Z"
        fill={color}
      />
    </Svg>
  );
};

CirclePlusIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CirclePlusIcon.defaultProps = {
  color: "#1A73E9",
  width: 19,
  height: 19,
};

export default memo(CirclePlusIcon);
