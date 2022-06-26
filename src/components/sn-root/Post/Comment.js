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

const MOCK_COMMENTS = Array.from(new Array(2)).map((_, i) => ({
    id: i + 1,
    avatarSrc:
        "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg",
    username: "Damian",
    content:
        "You're so cute!",
    time:
        "3h",
}));



const Comment = () => {
    return (
        <MainLayout isBackScreen >
            <LocationArrowIcon style={styles.shareIcon} />
            <ScrollView style={styles.wrapper}>
                <View>
                    {MOCK_COMMENTS.map((data, index) => (
                        <View style={styles.commentItem} key={index}>
                            <Image style={styles.avatarComment} source={{ uri: data.avatarSrc }} />
                            <View>
                                <View
                                    className={styles.commentContent}
                                    backgroundColor="rgba(196, 196, 196, 0.35)"
                                    paddingVertical={8}
                                    paddingHorizontal={12}
                                    borderRadius={10}
                                >
                                    <Text style={styles.commentAuth}>{data.username}</Text>
                                    <Text style={styles.commentText}>{data.content}</Text>
                                </View>
                                <Text style={styles.commentTime}>{data.time}</Text>
                            </View>
                        </View>
                    ))}

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
        color: "#262626",
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
        height: 35,
        width: 35,
        borderRadius: 50,
    },
    commentItem: {
        flexDirection: "row",
        marginBottom: 10
    },
    avatarComment: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginRight: 16
    },
    commentAuth: {
        color: "#262626",
        fontWeight: "700",
    },
    commentTime: {
        marginTop: 8,
        marginLeft: 12
    }

});

export default Comment;
