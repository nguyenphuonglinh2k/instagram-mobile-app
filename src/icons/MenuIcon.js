import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const MenuIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M9.16669 15.75C9.16669 15.2668 9.53978 14.875 10 14.875C10.4603 14.875 10.8334 15.2668 10.8334 15.75C10.8334 16.2332 10.4603 16.625 10 16.625C9.53978 16.625 9.16669 16.2332 9.16669 15.75Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.16669 10.5C9.16669 10.0168 9.53978 9.625 10 9.625C10.4603 9.625 10.8334 10.0168 10.8334 10.5C10.8334 10.9832 10.4603 11.375 10 11.375C9.53978 11.375 9.16669 10.9832 9.16669 10.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.16669 5.25C9.16669 4.76675 9.53978 4.375 10 4.375C10.4603 4.375 10.8334 4.76675 10.8334 5.25C10.8334 5.73325 10.4603 6.125 10 6.125C9.53978 6.125 9.16669 5.73325 9.16669 5.25Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

MenuIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

MenuIcon.defaultProps = {
  color: "#292D32",
  width: 20,
  height: 21,
};

export default MenuIcon;
