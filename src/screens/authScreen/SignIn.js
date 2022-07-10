import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { ImageSource } from "assets";
import { useNavigation } from "@react-navigation/native";
import { ApiConstant, AppConstant } from "const";
import { ContainedButton, TextButton, CommonTextInput } from "components";
import { AuthService } from "services";
import clientStorage from "utils/clientStorage";
import { RouteName } from "const/path.const";
import AuthActions from "reduxStore/auth.redux";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const onLogin = async () => {
    try {
      const response = await AuthService.postSignIn({
        email,
        password,
      });

      if (response.status === ApiConstant.STT_OK) {
        const { token, user } = response.data;

        const bearToken = `Bearer ${token}`;

        clientStorage.set(AppConstant.AUTH_TOKEN_KEY, bearToken);
        clientStorage.set(AppConstant.USER_KEY, JSON.stringify(user));

        dispatch(
          AuthActions.authSuccess({ token: bearToken, user, isLoggedIn: true }),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={ImageSource.LogoLargeImage} />
      </View>

      <Image style={styles.signInText} source={ImageSource.SignInTextImage} />

      <CommonTextInput
        label="Email"
        value={email}
        onChangeText={onChangeEmail}
        keyboardType="email-address"
      />
      <CommonTextInput
        label="Password"
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry
        style={{ marginBottom: 10 }}
        labelProps={{ style: { marginTop: 20 } }}
      />

      <TextButton
        label="Forgot Password?"
        labelProps={{ style: styles.textButton }}
      />
      <View style={{ display: "flex", alignSelf: "center" }}>
        <ContainedButton
          onPress={onLogin}
          label="Login"
          style={styles.gradientButton}
        />
      </View>

      <View style={styles.signUpWrapper}>
        <Text style={{ color: "#3A4664" }}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.SIGN_UP)}
        >
          <Image
            style={styles.signUpText}
            source={ImageSource.SignUpTextImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: "center",
    marginTop: 68,
    marginBottom: 50,
  },
  logo: {
    height: 70,
    width: 70,
  },
  signInText: {
    width: 70,
    height: 23,
    marginBottom: 18,
  },
  textButton: {
    color: "#9796F0",
    textAlign: "right",
  },
  gradientButton: {
    marginTop: 30,
  },
  signUpText: {
    width: 47,
    height: 13,
  },
  signUpWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default SignIn;
