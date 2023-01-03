import React, {
  memo,
  useEffect,
  useState,
  forwardRef,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import {
  CommonTextInput,
  ContainedButton,
  GreyButton,
  TextButton,
} from "components";
import { Modal, StyleSheet, Text, View } from "react-native";
import { AppConstant } from "const";
import Toast from "react-native-toast-notifications";

const ConfirmOTPModal = forwardRef(
  (
    {
      value,
      error,
      onChangeText,
      onCancel,
      onVerify,
      onResend,
      createdOtpTime,
      ...otherProps
    },
    ref,
  ) => {
    const [seconds, setSeconds] = useState(
      AppConstant.EXPIRED_TIME_OTP_IN_SECOND,
    );
    const [targetTime, setTargetTime] = useState(0);

    const onChangeSeconds = useCallback(() => {
      const remainTime = targetTime - new Date().getTime();
      const remainSeconds = Math.floor((remainTime % (1000 * 60)) / 1000);

      setSeconds(remainSeconds);
    }, [targetTime]);

    useEffect(() => {
      setTargetTime(
        new Date(createdOtpTime).getTime() +
          AppConstant.EXPIRED_TIME_OTP_IN_SECOND * 1000 -
          2000, // faster than 2s ?
      );
    }, [createdOtpTime]);

    useEffect(() => {
      if (!createdOtpTime) {
        setSeconds(AppConstant.EXPIRED_TIME_OTP_IN_SECOND);
        return;
      }

      onChangeSeconds();

      const interval = setInterval(() => {
        onChangeSeconds();
      }, 1000);

      return () => clearInterval(interval);
    }, [setSeconds, createdOtpTime, targetTime, onChangeSeconds]);

    return (
      <Modal
        animationType="slide"
        transparent={true}
        style={{ zIndex: 1 }}
        {...otherProps}
      >
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
              onPress={onResend}
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
        <Toast ref={ref} duration={2000} placement="top" />
      </Modal>
    );
  },
);

ConfirmOTPModal.displayName = "ConfirmOTPModal";

ConfirmOTPModal.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onVerify: PropTypes.func,
  onCancel: PropTypes.func,
  error: PropTypes.string,
  createdOtpTime: PropTypes.string,
  onResend: PropTypes.func,
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
