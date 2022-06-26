import React from "react";
import {
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    View,
    Text
} from "react-native";
import { MainLayout } from "layouts";

import { LocationArrowIcon } from "../../../icons";



const Comment = () => {
    return (
        <MainLayout isBackScreen >
            <LocationArrowIcon style={styles.shareIcon} />
            <ScrollView style={styles.wrapper}>
                <View style={styles.test}>
                    <View style={styles.commentItem}>
                        <Image style={styles.avatar} source={{ uri: "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg" }} />
                        <View>
                            <View className={styles.commentContent}>
                                <Text style={styles.commentAuth}>Elizaberth</Text>
                                <Text style={styles.commentAuth}>Wow!</Text>
                            </View>
                            <Text>3h</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.commentInput}>
                <Image style={styles.avatar} source={{ uri: "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg" }} />
                <View style={styles.commentText}>
                    <TextInput
                        style={styles.input}
                        backgroundColor="rgba(196, 196, 196, 0.35)"
                        borderColor="transparent"
                        placeholderTextColor="#3A4664B2"
                        placeholder="Write comment here"
                    />
                </View>
            </View>
        </MainLayout>
    )
};

const styles = StyleSheet.create({

    wrapper: {
        padding: 16,
    },
    shareIcon: {
        position: "absolute",
        top: 15,
        right: 18
    },
    commentInput: {
        position: "absolute",
        bottom: 0,
        left: 18,
        flexDirection: "row",
        alignItems: "center",
    },
    commentText: {
        width: "90%",
    },
    input: {
        margin: 15,
        height: 40,
        width: 320,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 20,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },

});

export default Comment;
