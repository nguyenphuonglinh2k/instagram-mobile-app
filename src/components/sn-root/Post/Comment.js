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
import { ImageSource } from "assets";
import { MainLayout } from "layouts";

// const CommentDetail = () => {
//     return (
//         <View style={styles.commentItem}>
//             <View>
//                 <Image style={styles.avatar} source={{ uri: "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg" }} />
//             </View>
//             <View>
//                 <View style={styles.commentFull}>
//                     <Text style={styles.usernameComment}>Elizabeth</Text>
//                     <Text>Beautiful !</Text>
//                 </View>
//                 <View>
//                     <Text>3h</Text>
//                 </View>
//             </View>
//         </View>
//     )
// }


const Comment = () => {
    return (
        <MainLayout isBackScreen>
            <ScrollView style={styles.wrapper}>
                {/* <CommentDetail /> */}
                <View style={styles.floatBottom}>
                    <View style={styles.comment}>
                        <Image style={styles.avatar} source={{ uri: "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg" }} />
                        <View style={styles.commentText}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#3A4664B2"
                                placeholder="Write comment here"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

        </MainLayout>
    )
};

const styles = StyleSheet.create({

    comment: {
        height: 70,
        flexDirection: "row",
        alignItems: "center",
    },
    commentText: {
        width: "90%",
    },
    floatBottom: {
        marginTop: "154%"
    }
    ,
    input: {
        margin: 15,
        height: 40,
        width: 320,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: 20,
    },
    wrapper: {
        flex: 1,
        flexDirection: "column",
        padding: 16,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },

});

export default Comment;
