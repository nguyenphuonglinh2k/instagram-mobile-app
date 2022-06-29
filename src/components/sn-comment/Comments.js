import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet } from "react-native";
import CommentItem from "./CommentItem";

const Comments = ({ comments, ...otherProps }) => {
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
  comments: PropTypes.array,
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
