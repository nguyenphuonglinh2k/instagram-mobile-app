import React from "react";
import { TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";

const StoryView = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.divider}
    >
      {MOCK_USERS.map(({ uri }, index) => (
        <TouchableOpacity key={index} activeOpacity={0.8}>
          <Image style={styles.avatar} source={{ uri }} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const MOCK_USERS = Array.from(new Array(9)).map(() => ({
  uri: "https://gamek.mediacdn.vn/133514250583805952/2022/5/11/photo-1-16522444302841054531565.png",
}));

const styles = StyleSheet.create({
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#9796F0",
    marginRight: 15,
  },
  contentContainer: {
    paddingLeft: 16,
    paddingBottom: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(196, 196, 196, 0.5)",
  },
});

export default StoryView;
