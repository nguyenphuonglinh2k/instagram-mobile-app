import { MainLayout } from "layouts";
import React, { useRef, useState } from "react";
import { AvatarChange, UserInfoChange, RedirectActions } from "components";
import { ScrollView, TouchableOpacity } from "react-native";
import { CheckIcon } from "icons";

const Setting = () => {
  const ref = useRef();

  const [imageUri, setImageUri] = useState();

  const onSaveChange = () => {
    ref.current.props.onPress(imageUri);
  };

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Setting",
        headerRight: (
          <TouchableOpacity onPress={onSaveChange}>
            <CheckIcon />
          </TouchableOpacity>
        ),
      }}
    >
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <AvatarChange
          imageUri={imageUri}
          setImageUri={setImageUri}
          style={{ alignSelf: "center", marginTop: 16 }}
        />
        <UserInfoChange style={{ marginVertical: 40 }} ref={ref} />
        <RedirectActions />
      </ScrollView>
    </MainLayout>
  );
};

export default Setting;
