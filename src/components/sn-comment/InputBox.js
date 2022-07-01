import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { useToast } from "react-native-toast-notifications";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FaceIcon, LocationArrowIcon } from "icons";
import { PostService } from "services";
import { useSelector } from "react-redux";
import { ApiConstant } from "const/";

const InputBox = ({ style, postId, onRefetchData, ...otherProps }) => {
  const toast = useToast();
  const [message, onChangeMessage] = useState("");

  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const onPostComment = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || !postId || !authUser._id) return;

    try {
      const response = await PostService.postComment(
        { caption: trimmedMessage },
        postId,
        authUser._id,
      );

      if (response.status === ApiConstant.STT_OK) {
        onRefetchData();
        onChangeMessage("");
      }
    } catch (error) {
      // TODO: Display error msg
      toast.show("Cannot comment. Please try again!", { type: "danger" });
    }
  };

  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <TouchableOpacity>
        <FaceIcon />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={onChangeMessage}
        placeholderTextColor="#3A4664B2"
        placeholder="Write comment here"
        multiline
      />
      <TouchableOpacity onPress={onPostComment}>
        <LocationArrowIcon style={styles.rotate} />
      </TouchableOpacity>
    </View>
  );
};

InputBox.propTypes = {
  style: PropTypes.object,
  postId: PropTypes.string.isRequired,
  onRefetchData: PropTypes.func,
};

InputBox.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#C4C4C4",
  },
  input: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.35)",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    maxHeight: 75,
    overflow: "hidden",
    marginLeft: 8,
  },
  rotate: {
    transform: [{ rotate: "45deg" }],
  },
});

export default memo(InputBox);
