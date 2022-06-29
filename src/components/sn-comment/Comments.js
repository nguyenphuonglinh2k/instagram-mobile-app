import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet } from "react-native";
import CommentItem from "./CommentItem";
import { PostService } from "services";
import { ApiConstant } from "const";

const Comments = ({ postId, ...otherProps }) => {
  const [comments, setComments] = useState([]);

  const onGetComments = useCallback(async () => {
    if (!postId) return;

    try {
      const response = await PostService.getComments(postId);

      if (response.status === ApiConstant.STT_OK) {
        const responseData = response.data;
        setComments(responseData);
      }
    } catch (error) {
      console.error(error);
    }
  }, [postId]);

  useEffect(() => {
    onGetComments();
  }, [onGetComments]);

  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <CommentItem data={item} style={styles.item} />}
      keyExtractor={(_, idx) => idx}
      contentContainerStyle={styles.list}
      {...otherProps}
    />
  );
};

Comments.propTypes = {
  postId: PropTypes.string,
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingBottom: 0,
  },
  item: {
    marginBottom: 8,
  },
});

export default Comments;
