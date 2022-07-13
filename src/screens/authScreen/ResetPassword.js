import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { MainLayout } from "layouts";
import { ContainedButton, CommonTextInput, LoadingSpinner } from "components";
import { ImageSource } from "assets";
import { useToast } from "react-native-toast-notifications";
import { useCallback } from "react";
import { UserService } from "services";
import { useSelector } from "react-redux";
import { ApiConstant } from "const/";

const ResetPassword = ({ isBackScreen, ...otherProps }) => {
  const toast = useToast();

  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const [oldPassword, onChangeOldPassword] = useState("");
  const [newPassword, onChangeNewPassword] = useState("");
  const [reEnterNewPassword, onChangeReEnterNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onResetData = useCallback(() => {
    onChangeOldPassword("");
    onChangeNewPassword("");
    onChangeReEnterNewPassword("");
  }, []);

  const onConfirmChangePassword = useCallback(async () => {
    if (!oldPassword || !newPassword || !reEnterNewPassword) {
      toast.show("Please enter all field", {
        type: "warning",
      });
      return;
    } else if (newPassword !== reEnterNewPassword) {
      toast.show("Password is not match", {
        type: "warning",
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await UserService.putPasswordChangeAction(authUser._id, {
        oldPassword,
        newPassword,
        reEnterNewPassword,
      });

      if (response.status === ApiConstant.STT_OK) {
        toast.show("Reset password successfully", {
          type: "success",
        });
        onResetData();
      } else {
        const errorMsg = response?.data?.error;
        if (errorMsg) {
          toast.show(errorMsg, { type: "danger" });
        }
      }
    } catch (error) {
      toast.show("Cannot reset password. Please try again!", {
        type: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  }, [
    oldPassword,
    newPassword,
    reEnterNewPassword,
    authUser?._id,
    toast,
    onResetData,
  ]);

  useEffect(() => {
    return () => onResetData();
  }, [onResetData]);

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
          value={oldPassword}
          onChangeText={onChangeOldPassword}
          label="Old password"
          secureTextEntry
          style={{ marginBottom: 10 }}
          labelProps={{ style: { marginTop: 20 } }}
        />
        <CommonTextInput
          value={newPassword}
          onChangeText={onChangeNewPassword}
          label="New password"
          secureTextEntry
          style={{ marginBottom: 10 }}
          labelProps={{ style: { marginTop: 20 } }}
        />
        <CommonTextInput
          value={reEnterNewPassword}
          onChangeText={onChangeReEnterNewPassword}
          label="Re-enter new password"
          secureTextEntry
          style={{ marginBottom: 10 }}
          labelProps={{ style: { marginTop: 20 } }}
        />

        <View style={{ alignSelf: "center" }}>
          <ContainedButton
            label="Reset password"
            style={styles.gradientButton}
            onPress={onConfirmChangePassword}
          />
        </View>
      </ScrollView>

      <LoadingSpinner isVisible={isLoading} />
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
