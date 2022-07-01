import React from "react";
import { TextButton } from "components";
import { View } from "react-native";
import { RouteName } from "const/path.const";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import AuthActions from "reduxStore/auth.redux";
import clientStorage from "utils/clientStorage";
import { AppConstant } from "const/";

const RedirectActions = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogout = () => {
    clientStorage.remove(AppConstant.AUTH_TOKEN_KEY);
    dispatch(
      AuthActions.authSuccess({
        isLoggedIn: false,
      }),
    );
  };

  return (
    <View {...props}>
      <StyledTextButton
        label="Reset password"
        style={{ marginBottom: 20 }}
        onPress={() => navigation.navigate(RouteName.RESET_PASSWORD)}
      />
      <StyledTextButton label="Log out" onPress={onLogout} />
    </View>
  );
};

const StyledTextButton = props => {
  return <TextButton labelProps={{ style: { color: "#9796F0" } }} {...props} />;
};

export default RedirectActions;
