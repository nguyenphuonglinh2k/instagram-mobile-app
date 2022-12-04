import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const EmailIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        opacity="0.4"
        d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z"
        fill={color}
      />
      <Path
        d="M21.4759 5.674C20.6099 4.042 18.9059 3 17.0299 3H7.04988C5.17388 3 3.46988 4.042 2.60388 5.674C2.40988 6.039 2.50188 6.49401 2.82488 6.752L10.2499 12.691C10.7699 13.111 11.3999 13.32 12.0299 13.32C12.0339 13.32 12.0369 13.32 12.0399 13.32C12.0429 13.32 12.0469 13.32 12.0499 13.32C12.6799 13.32 13.3099 13.111 13.8299 12.691L21.2549 6.752C21.5779 6.49401 21.6699 6.039 21.4759 5.674Z"
        fill={color}
      />
    </Svg>
  );
};

EmailIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

EmailIcon.defaultProps = {
  color: "#A19FA8",
  width: 24,
  height: 24,
};

export default EmailIcon;
