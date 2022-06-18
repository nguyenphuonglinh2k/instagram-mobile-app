import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { ImageSource } from "assets";
import { useNavigation } from "@react-navigation/native";
import { PathConstant } from "const";

const SignIn = () => {
  const navigation = useNavigation();

  const onLogin = () => {
    // eslint-disable-next-line no-alert
    alert("click sign in");
  };

  return (
    <ScrollView>
      <Image style={styles.logo} source={ImageSource.LogoLargeImage} />

      <Image style={styles.signInText} source={ImageSource.SignInTextImage} />

      <TouchableOpacity
        onPress={() => navigation.navigate(PathConstant.FORGOT_PASSWORD)}
      >
        <Text style={{ color: "#9796F0" }}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 70,
  },
  signInText: {
    height: 63,
    width: 23,
  },
});

export default SignIn;
