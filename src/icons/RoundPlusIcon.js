import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const RoundPlusIcon = ({ height, width, color, ...otherProps }) => {
  return (
    <Svg height={height} width={width} {...otherProps}>
      <Path
        d="M13.3334 10.625H6.66669C6.32502 10.625 6.04169 10.3417 6.04169 10C6.04169 9.65833 6.32502 9.375 6.66669 9.375H13.3334C13.675 9.375 13.9584 9.65833 13.9584 10C13.9584 10.3417 13.675 10.625 13.3334 10.625Z"
        fill={color}
      />
      <Path
        d="M10 13.9584C9.65833 13.9584 9.375 13.6751 9.375 13.3334V6.66675C9.375 6.32508 9.65833 6.04175 10 6.04175C10.3417 6.04175 10.625 6.32508 10.625 6.66675V13.3334C10.625 13.6751 10.3417 13.9584 10 13.9584Z"
        fill={color}
      />
      <Path
        d="M12.5 18.9584H7.50002C2.97502 18.9584 1.04169 17.0251 1.04169 12.5001V7.50008C1.04169 2.97508 2.97502 1.04175 7.50002 1.04175H12.5C17.025 1.04175 18.9584 2.97508 18.9584 7.50008V12.5001C18.9584 17.0251 17.025 18.9584 12.5 18.9584ZM7.50002 2.29175C3.65835 2.29175 2.29169 3.65841 2.29169 7.50008V12.5001C2.29169 16.3417 3.65835 17.7084 7.50002 17.7084H12.5C16.3417 17.7084 17.7084 16.3417 17.7084 12.5001V7.50008C17.7084 3.65841 16.3417 2.29175 12.5 2.29175H7.50002Z"
        fill={color}
      />
    </Svg>
  );
};

RoundPlusIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

RoundPlusIcon.defaultProps = {
  color: "#292D32",
  width: 20,
  height: 20,
};

export default RoundPlusIcon;
