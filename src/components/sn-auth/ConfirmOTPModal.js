import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import {
  CommonTextInput,
  ContainedButton,
  GreyButton,
  TextButton,
} from "components";
import { Modal, StyleSheet, Text, View } from "react-native";
import { AppConstant } from "const";
import { useState } from "react";

const ConfirmOTPModal = ({
  value,
  error,
  onChangeText,
  onCancel,
  onVerify,
  createdOtpTime,
  ...otherProps
}) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (!createdOtpTime) return;

    const targetTime =
      new Date(createdOtpTime).getTime() +
      AppConstant.EXPIRED_TIME_OTP_IN_SECOND * 1000;

    const interval = setInterval(() => {
      const remainTime = targetTime - new Date().getTime();
      const remainSeconds = Math.floor((remainTime % (1000 * 60)) / 1000);

      setSeconds(remainSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [setSeconds, createdOtpTime]);

  return (
    <Modal animationType="slide" transparent={true} {...otherProps}>
      <View style={styles.centeredView}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={{ marginBottom: 12, marginTop: 4 }}>
            We are sending you an OTP code to your email.
          </Text>

          {error && (
            <View style={styles.alertWrapper}>
              <Text style={styles.alertText}>{error}</Text>
            </View>
          )}

          <CommonTextInput
            label="OTP Code"
            value={value}
            onChangeText={onChangeText}
            placeholder="Please enter your code here"
          />

          <Text style={styles.otpNotification}>
            The OTP will expire after {seconds >= 0 ? seconds : 0}s
          </Text>

          <TextButton
            label="Resend OTP"
            style={{ marginTop: 20, marginBottom: 12 }}
            labelProps={{ style: styles.textButtonLabel }}
          />

          <View style={styles.actions}>
            <GreyButton
              label="Cancel"
              style={{ flex: 1, marginRight: 4 }}
              onPress={onCancel}
            />
            <ContainedButton
              label="Verify"
              style={{ flex: 1, marginLeft: 4 }}
              onPress={onVerify}
              disabled={value?.length !== AppConstant.OTP_LENGTH}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

ConfirmOTPModal.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onVerify: PropTypes.func,
  onCancel: PropTypes.func,
  error: PropTypes.string,
  createdOtpTime: PropTypes.string,
};

ConfirmOTPModal.defaultProps = {};

const styles = StyleSheet.create({
  modal: {
    height: "auto",
    width: "auto",
  },
  alertWrapper: {
    marginBottom: 10,
    backgroundColor: "#fdeded",
    padding: 8,
    borderRadius: 4,
  },
  alertText: {
    fontSize: 12,
    color: "#5f2120",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A1A2A8B2",
  },
  wrapper: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    padding: 16,
    borderRadius: 15,

    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#262626",
  },
  otpNotification: {
    fontSize: 12,
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textButtonLabel: {
    color: "#BEA9E5",
    fontWeight: "700",
    fontSize: 12,
    textAlign: "center",
  },
});

export default memo(ConfirmOTPModal);
