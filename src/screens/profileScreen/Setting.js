import { MainLayout } from "layouts";
import React from "react";
import { AvatarChange, UserInfoChange, RedirectActions } from "components";
import { ScrollView, TouchableOpacity } from "react-native";
import { CheckIcon } from "icons";

const Setting = () => {
  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Setting",
        headerRight: (
          <TouchableOpacity>
            <CheckIcon />
          </TouchableOpacity>
        ),
      }}
    >
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <AvatarChange style={{ alignSelf: "center", marginTop: 16 }} />
        <UserInfoChange style={{ marginVertical: 40 }} />
        <RedirectActions />
      </ScrollView>
    </MainLayout>
  );
};

export default Setting;
