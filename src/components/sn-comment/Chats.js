import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Chat from "./Chat";

const Chats = props => {
  return (
    <FlatList
      data={MOCK_COMMENTS}
      renderItem={({ item }) => <Chat data={item} style={styles.item} />}
      keyExtractor={(_, idx) => idx}
      contentContainerStyle={styles.list}
      {...props}
    />
  );
};

const MOCK_COMMENTS = Array.from(new Array(10)).map((_, i) => ({
  id: i + 1,
  userImageSrc:
    "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg",
  name: "Damian",
  content: "You're so cute!",
  time: "3h",
}));

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingBottom: 0,
  },
  item: {
    marginBottom: 8,
  },
});

export default Chats;
