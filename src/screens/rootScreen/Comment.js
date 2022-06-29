import React, { useCallback, useEffect, useState } from "react";
import { MainLayout } from "layouts";
import { InputBox, Comments } from "components";
import { useRoute } from "@react-navigation/native";
import { PostService } from "services";
import { ApiConstant } from "const";

const Comment = () => {
  const route = useRoute();
  const postId = route.params?.postId;

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
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Comments",
      }}
    >
      <Comments comments={comments} />
      <InputBox postId={postId} onRefetchData={onGetComments} />
    </MainLayout>
  );
};

export default Comment;
