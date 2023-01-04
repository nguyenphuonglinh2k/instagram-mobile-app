import React, { useRef, useState } from "react";
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
import { ContainedButton, TextButton, CommonTextInput } from "components";
import { RouteName } from "const/path.const";
import AuthActions from "../../reduxStore/auth.redux";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmOTPModal } from "components/sn-auth";
import { AuthService } from "services/index";
import { ApiConstant } from "const/index";
import { useEffect } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toastRef = useRef();

  const createdOtpTime = useSelector(
    ({ authRedux }) => authRedux.createdOtpTime,
  );

  const [email, onChangeEmail] = useState("andy@gmail.com");
  const [password, onChangePassword] = useState("123456");
  const [otp, onChangeOtp] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState();

  const onLogin = () => {
    dispatch(
      AuthActions.postLoginRequest({
        email,
        password,
      }),
    );
  };

  const onResendOtp = () => {
    onLogin();
    toastRef.current.show("The OTP code has been sent to your email!", {
      type: "warning",
    });
  };

  const onVerifyOTP = async () => {
    try {
      const response = await AuthService.confirmOtp({ otp, email });

      console.log("onVerifyOTP", response.status);

      if (response.status === ApiConstant.STT_OK) {
        // Login successfully
        dispatch(
          AuthActions.authSuccess({
            isLoggedIn: true,
          }),
        );
        setError("");
      } else {
        setError("The OTP is incorrect or The time is expired");
      }
    } catch (err) {
      setError("The OTP is incorrect or The time is expired");
    }
  };

  useEffect(() => {
    if (createdOtpTime) {
      setIsVisible(true);
    } else {
      setError("");
      onChangeOtp("");
    }
  }, [createdOtpTime]);

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

      <ConfirmOTPModal
        visible={isVisible}
        value={otp}
        onChangeText={onChangeOtp}
        onCancel={() => setIsVisible(false)}
        onVerify={onVerifyOTP}
        onResend={onResendOtp}
        error={error}
        createdOtpTime={createdOtpTime}
        ref={toastRef}
      />
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
