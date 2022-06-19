import React from "react";
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
import { PathConstant } from "const";
import { ContainedButton, TextButton, CommonTextInput } from "components";

const SignIn = () => {
  const navigation = useNavigation();

  const onLogin = () => {
    // eslint-disable-next-line no-alert
    alert("click log in");
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={ImageSource.LogoLargeImage} />
      </View>

      <Image style={styles.signInText} source={ImageSource.SignInTextImage} />

      <CommonTextInput label="Email" />
      <CommonTextInput
        label="Password"
        secureTextEntry
        style={{ marginBottom: 10 }}
        labelProps={{ style: { marginTop: 20 } }}
      />

      <TextButton
        onPress={() => navigation.navigate(PathConstant.FORGOT_PASSWORD)}
        label="Forgot Password?"
        labelProps={{ style: styles.textButton }}
      />
      <ContainedButton
        onPress={onLogin}
        label="Login"
        style={styles.gradientButton}
      />
      <View style={styles.signUpWrapper}>
        <Text style={{ color: "#3A4664" }}>Don’t have an account? </Text>
        <TouchableOpacity>
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
    alignItems: "center",
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
