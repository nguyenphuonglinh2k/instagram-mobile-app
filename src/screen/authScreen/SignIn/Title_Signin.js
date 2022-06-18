import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import TabNavigator from "../../../navigation/TabNavigator";

export default class Signin extends Component {
  state = {
    email: "",
    password: "",
    logined: false,
    viewPass: false,
    correctInfor: true,
  };

  checkAccount = () => {
    if (
      this.state.email === "abc@gmail.com" &&
      this.state.password === "123456"
    ) {
      this.setState({
        logined: true,
      });
    }
    if (
      this.state.email != "abc@gmail.com" ||
      this.state.password != "123456"
    ) {
      this.setState({
        correctInfor: false,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.logined === false && (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback
              style={styles.container}
              onPress={Keyboard.dismiss}
            >
              <View style={styles.signinContainer}>
                <View style={styles.logoImg}>
                  <Image source={require("./login_images/Icon_Camera.png")} />
                </View>
                <View style={styles.signIn}>
                  <Image source={require("./login_images/SignIn.png")} />
                </View>
                {this.state.correctInfor == false && (
                  <View style={{ right: 36, top: 148, position: "absolute" }}>
                    <Text style={styles.incorrectInfor}>
                      Information is incorrect !
                    </Text>
                  </View>
                )}

                <TextInput
                  style={styles.input}
                  value={this.state.email}
                  placeholder="Phone number or email"
                  placeholderTextColor="rgba(58, 70, 100, 0.5)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                  onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                  style={styles.input}
                  value={this.state.password}
                  placeholder="Password"
                  placeholderTextColor="rgba(58, 70, 100, 0.5)"
                  autoCorrect={false}
                  secureTextEntry={true}
                  ref={"txtPassword"}
                  onChangeText={text => this.setState({ password: text })}
                />

                <Image
                  onPress={() => this.setState({ viewPass: !viewPass })}
                  style={styles.viewPass}
                  source={require("./login_images/eye-slash.png")}
                />

                <View style={{ marginTop: -20, marginLeft: 262 }}>
                  <Text style={styles.forgotPass}>Forgot password ? </Text>
                </View>
                <View style={styles.buttonSignin_block}>
                  <TouchableOpacity
                    style={styles.buttonSignin}
                    onPress={this.checkAccount}
                  >
                    <Image source={require("./login_images/Buttons.png")} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        )}

        {this.state.logined && <TabNavigator />}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  logoImg: {
    alignItems: "center",
  },
  signinContainer: {
    padding: 24,
  },
  signIn: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 23,
    color: "rgb(255, 255, 255)",
    marginBottom: 18,
    marginTop: 35,
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
  input: {
    position: "relative",
    width: "100%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "white",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    color: "#3A4664",
    paddingHorizontal: 17,
    borderColor: "#9796F0",
    marginBottom: 31,
    borderWidth: 1,
  },
  viewPass: {
    position: "absolute",
    right: 40,
    top: 262,
  },
  buttonSignin_block: {
    alignItems: "center",
  },
  buttonSignin: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  textSingin: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
  },
  logined: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#pink",
    fontWeight: "700",
    fontSize: 24,
  },
  forgotPass: {
    color: "#9796F0",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
  },
  incorrectInfor: {
    color: "#DF1717",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
  },
});
