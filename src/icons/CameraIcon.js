import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const CameraIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M8.08125 3H11.9187C12.5656 3 13.1375 3.41312 13.3406 4.02562L13.6656 5H16C17.1031 5 18 5.89688 18 7V15C18 16.1031 17.1031 17 16 17H4C2.89531 17 2 16.1031 2 15V7C2 5.89688 2.89531 5 4 5H6.33437L6.65938 4.02562C6.8625 3.41312 7.43438 3 8.08125 3ZM10 14C11.6562 14 13 12.6562 13 11C13 9.31562 11.6562 8 10 8C8.31562 8 7 9.31562 7 11C7 12.6562 8.31562 14 10 14Z"
        fill={color}
      />
    </Svg>
  );
};

CameraIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CameraIcon.defaultProps = {
  color: "#292D32",
  width: 20,
  height: 20,
};

export default CameraIcon;
