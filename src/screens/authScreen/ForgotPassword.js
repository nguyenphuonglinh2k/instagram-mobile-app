import React, { useState } from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { ImageSource } from "assets";
import { ContainedButton, CommonTextInput } from "components";

const ForgotPassword = () => {
  const [email, onChangeEmail] = useState("");

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={ImageSource.LogoLargeImage} />
      </View>
      <Image style={styles.title} source={ImageSource.ForgotPasswordText} />
      <CommonTextInput
        value={email}
        onChangeText={onChangeEmail}
        label="Email"
      />
      <View style={{ alignSelf: "center" }}>
        <ContainedButton label="Submit" style={styles.gradientButton} />
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
  title: {
    width: 160,
    height: 20,
    marginBottom: 40,
  },
  gradientButton: {
    alignItems: "center",
    marginTop: 40,
  },
});

export default ForgotPassword;
