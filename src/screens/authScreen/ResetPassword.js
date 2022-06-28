import React from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { MainLayout } from "layouts";
import { ContainedButton, CommonTextInput } from "components";
import { ImageSource } from "assets";

const ResetPassword = ({ isBackScreen, ...otherProps }) => {
  return (
    <MainLayout
      headerProps={{
        title: "Reset Password",
      }}
      isBackScreen
      {...otherProps}
    >
      <ScrollView style={styles.wrapper}>
        {!isBackScreen && (
          <>
            <View style={styles.logoWrapper}>
              <Image style={styles.logo} source={ImageSource.LogoLargeImage} />
            </View>
            <Image
              style={styles.title}
              source={ImageSource.ResetPasswordText}
            />
          </>
        )}

        <CommonTextInput
          label="Old password"
          secureTextEntry
          style={{ marginBottom: 10 }}
          labelProps={{ style: { marginTop: 20 } }}
        />
        <CommonTextInput
          label="New password"
          secureTextEntry
          style={{ marginBottom: 10 }}
          labelProps={{ style: { marginTop: 20 } }}
        />
        <CommonTextInput
          label="Re-enter new password"
          secureTextEntry
          style={{ marginBottom: 10 }}
          labelProps={{ style: { marginTop: 20 } }}
        />

        <View style={{ alignSelf: "center" }}>
          <ContainedButton
            label="Reset password"
            style={styles.gradientButton}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

ResetPassword.propTypes = {
  isBackScreen: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  logoWrapper: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  logo: {
    height: 70,
    width: 70,
  },
  title: {
    width: 160,
    height: 20,
    marginBottom: 20,
  },
  gradientButton: {
    alignItems: "center",
    marginTop: 30,
  },
});

export default ResetPassword;
