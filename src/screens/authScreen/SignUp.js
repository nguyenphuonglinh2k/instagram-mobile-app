import React from "react";
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

const SignUp = () => {
    const navigation = useNavigation();
    const onLogin = () => {
        alert("Click Sign up");
    };

    const navigateScreen = () => {
        navigation.navigate("SignUp")
    }
    return (
        <ScrollView style={{ flex: 1, padding: 16 }}>
            <View style={styles.logoWrapper}>
                <Image style={styles.logo} source={ImageSource.LogoLargeImage} />
            </View>

            <Image style={styles.SignUpTextImage} source={ImageSource.SignUpTextImage} />

            <CommonTextInput label="Email" />
            <CommonTextInput label="Username" labelProps={{ style: { marginTop: 20 } }} />
            <CommonTextInput
                label="Password"
                secureTextEntry={true}
                style={{ marginBottom: 10 }}
                labelProps={{ style: { marginTop: 20 } }}
            />
            <CommonTextInput
                label="Confirm password"
                secureTextEntry
                style={{ marginBottom: 10 }}
                labelProps={{ style: { marginTop: 20 } }}
            />
            <ContainedButton
                onPress={onLogin}
                label="Sign up"
                style={styles.gradientButton}
            />
            <View style={styles.signInWrapper}>
                <Text style={{ color: "#3A4664" }}>Already have an account? </Text>
                <TouchableOpacity>
                    <Image
                        style={styles.signInText}
                        source={ImageSource.SignInTextImage}
                        onPress={navigateScreen}
                    />
                </TouchableOpacity>
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
    SignUpTextImage: {
        width: 70,
        height: 20,
        marginBottom: 18,
    },
    textButton: {
        color: "#9796F0",
        textAlign: "right",
    },
    gradientButton: {
        alignItems: "center",
        marginTop: 30,
    },
    signInText: {
        width: 47,
        height: 13,
    },
    signInWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
});

export default SignUp;
