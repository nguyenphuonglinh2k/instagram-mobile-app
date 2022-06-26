import React from "react";
import {
    Image,
    StyleSheet,
    ScrollView,
    View
} from "react-native";
import { ImageSource } from "assets";
import { useNavigation } from "@react-navigation/native";
import { ContainedButton, CommonTextInput } from "components";

const ForgotPw = () => {
    const navigation = useNavigation();

    const onLogin = () => {
        alert("click submit");
    };

    const navigateScreen = () => {
        navigation.navigate("SignUp");
    }

    return (
        <ScrollView style={{ flex: 1, padding: 16 }}>
            <View style={styles.logoWrapper}>
                <Image style={styles.logo} source={ImageSource.LogoLargeImage} />
            </View>
            <Image style={styles.signInText} source={ImageSource.ForgotPw} />
            <CommonTextInput label="Email" />
            <ContainedButton
                onPress={onLogin}
                label="Submit"
                style={styles.gradientButton}
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
        width: 160,
        height: 20,
        marginBottom: 18,
    },
    gradientButton: {
        alignItems: "center",
        marginTop: 30,
    },
});

export default ForgotPw;
