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
import { ContainedButton, CommonTextInput } from "components";
import { RouteName } from "const/path.const";
import { useCallback } from "react";
import { useToast } from "react-native-toast-notifications";
import { AuthService } from "services";
import { ApiConstant } from "const/";

const SignUp = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [reEnterNewPassword, onChangeReEnterNewPassword] = useState("");

  const onSignUp = useCallback(async () => {
    if (!name || !email || !password || !reEnterNewPassword) {
      toast.show("Please enter all field", { type: "warning" });
      return;
    }

    if (password !== reEnterNewPassword) {
      toast.show("Password is not match", { type: "warning" });
      return;
    }

    try {
      const response = await AuthService.postSignUp({
        name,
        email,
        password,
      });

      if (response.status === ApiConstant.STT_OK) {
        toast.show("Create account successfully", { type: "success" });
        navigation.navigate(RouteName.SIGN_IN);
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    }
  }, [email, name, navigation, password, reEnterNewPassword, toast]);

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={ImageSource.LogoLargeImage} />
      </View>

      <Image
        style={styles.SignUpTextImage}
        source={ImageSource.SignUpTextImage}
      />

      <CommonTextInput
        label="Email"
        value={email}
        onChangeText={onChangeEmail}
      />
      <CommonTextInput
        value={name}
        onChangeText={onChangeName}
        label="Username"
        labelProps={{ style: { marginTop: 10 } }}
      />
      <CommonTextInput
        value={password}
        onChangeText={onChangePassword}
        label="Password"
        secureTextEntry
        style={{ marginBottom: 10 }}
        labelProps={{ style: { marginTop: 10 } }}
      />
      <CommonTextInput
        label="Confirm password"
        value={reEnterNewPassword}
        onChangeText={onChangeReEnterNewPassword}
        secureTextEntry
        style={{ marginBottom: 10 }}
        labelProps={{ style: { marginTop: 10 } }}
      />

      <View style={{ display: "flex", alignSelf: "center" }}>
        <ContainedButton
          label="Sign Up"
          style={styles.gradientButton}
          onPress={onSignUp}
        />
      </View>

      <View style={styles.signInWrapper}>
        <Text style={{ color: "#3A4664" }}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.SIGN_IN)}
        >
          <Image
            style={styles.signInText}
            source={ImageSource.SignInTextImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  logo: {
    height: 70,
    width: 70,
  },
  SignUpTextImage: {
    width: 70,
    height: 20,
    marginBottom: 18,
  },
  gradientButton: {
    marginTop: 30,
  },
  signInText: {
    width: 45,
    height: 13,
  },
  signInWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});

export default SignUp;
