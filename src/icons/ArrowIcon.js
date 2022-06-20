import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const ArrowIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M9.57 18.82C9.38 18.82 9.19 18.75 9.04 18.6L2.97 12.53C2.68 12.24 2.68 11.76 2.97 11.47L9.04 5.4C9.33 5.11 9.81 5.11 10.1 5.4C10.39 5.69 10.39 6.17 10.1 6.46L4.56 12L10.1 17.54C10.39 17.83 10.39 18.31 10.1 18.6C9.96 18.75 9.76 18.82 9.57 18.82Z"
        fill={color}
      />
      <Path
        d="M20.5 12.75H3.67C3.26 12.75 2.92 12.41 2.92 12C2.92 11.59 3.26 11.25 3.67 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z"
        fill={color}
      />
    </Svg>
  );
};

ArrowIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ArrowIcon.defaultProps = {
  color: "#292D32",
  width: 21,
  height: 20,
};

export default ArrowIcon;
