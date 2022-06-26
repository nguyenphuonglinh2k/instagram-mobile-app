import React, { useState } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { CommonTextInput } from "components";

const UserInfoChange = props => {
  const [name, onChangeName] = useState("");
  const [bio, onChangeBio] = useState("");

  return (
    <View {...props}>
      <CommonTextInput
        label="Name"
        value={name}
        onChangeText={onChangeName}
        style={{ marginBottom: 16 }}
      />
      <CommonTextInput label="Bio" value={bio} onChangeText={onChangeBio} />
    </View>
  );
};

UserInfoChange.propTypes = {
  style: PropTypes.object,
};

export default UserInfoChange;
