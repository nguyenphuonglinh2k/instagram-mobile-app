import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const VideoIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M14.9999 22.75H8.99994C3.56994 22.75 1.24994 20.43 1.24994 15V9C1.24994 3.57 3.56994 1.25 8.99994 1.25H14.9999C20.4299 1.25 22.7499 3.57 22.7499 9V15C22.7499 20.43 20.4299 22.75 14.9999 22.75ZM8.99994 2.75C4.38994 2.75 2.74994 4.39 2.74994 9V15C2.74994 19.61 4.38994 21.25 8.99994 21.25H14.9999C19.6099 21.25 21.2499 19.61 21.2499 15V9C21.2499 4.39 19.6099 2.75 14.9999 2.75H8.99994Z"
        fill={color}
      />
      <Path
        d="M10.76 16.3698C10.34 16.3698 9.94997 16.2698 9.59997 16.0698C8.79997 15.6098 8.33997 14.6698 8.33997 13.4798V10.5198C8.33997 9.33981 8.79997 8.3898 9.59997 7.9298C10.4 7.4698 11.44 7.53981 12.47 8.13981L15.04 9.6198C16.06 10.2098 16.65 11.0798 16.65 11.9998C16.65 12.9198 16.06 13.7898 15.04 14.3798L12.47 15.8598C11.89 16.1998 11.3 16.3698 10.76 16.3698ZM10.77 9.12981C10.61 9.12981 10.47 9.1598 10.36 9.2298C10.04 9.4198 9.84997 9.88981 9.84997 10.5198V13.4798C9.84997 14.1098 10.03 14.5798 10.36 14.7698C10.68 14.9598 11.18 14.8798 11.73 14.5598L14.3 13.0798C14.85 12.7598 15.16 12.3698 15.16 11.9998C15.16 11.6298 14.85 11.2298 14.3 10.9198L11.73 9.4398C11.37 9.2298 11.04 9.12981 10.77 9.12981Z"
        fill={color}
      />
    </Svg>
  );
};

VideoIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

VideoIcon.defaultProps = {
  color: "#292D32",
  width: 24,
  height: 24,
};

export default VideoIcon;