import React from "react";
import { TextButton } from "components";
import { View } from "react-native";

const RedirectActions = props => {
  return (
    <View {...props}>
      <StyledTextButton label="Reset password" style={{ marginBottom: 20 }} />
      <StyledTextButton label="Log out" />
    </View>
  );
};

const StyledTextButton = props => {
  return <TextButton labelProps={{ style: { color: "#9796F0" } }} {...props} />;
};

export default RedirectActions;
