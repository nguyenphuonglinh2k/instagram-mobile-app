import React from "react";
import { TextButton } from "components";
import { View } from "react-native";
import { RouteName } from "const/path.const";
import { useNavigation } from "@react-navigation/core";

const RedirectActions = props => {
  const navigation = useNavigation();

  return (
    <View {...props}>
      <StyledTextButton
        label="Reset password"
        style={{ marginBottom: 20 }}
        onPress={() => navigation.navigate(RouteName.RESET_PASSWORD)}
      />
      <StyledTextButton label="Log out" />
    </View>
  );
};

const StyledTextButton = props => {
  return <TextButton labelProps={{ style: { color: "#9796F0" } }} {...props} />;
};

export default RedirectActions;
