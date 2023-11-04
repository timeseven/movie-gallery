import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const HeaderComponent = ({ setSearchValue }: { setSearchValue: (values: string) => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/avatar-default.jpg")}
          resizeMode="contain"
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={{ fontSize: 14, color: "#474747" }}>Hello,</Text>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}>Guest</Text>
        </View>
      </View>
      <View style={{ marginVertical: 10, backgroundColor: "#000" }}>
        <View style={styles.searchInputContainer}>
          <AntDesign name="search1" size={20} color="#bebebe" style={styles.iconStyle} />
          <TextInput
            placeholder="Search your movie"
            placeholderTextColor="#bebebe"
            style={styles.inputStyle}
            onChangeText={setSearchValue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#000",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#000",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: 8,
    alignSelf: "center",
    backgroundColor: "#000",
  },
  searchInputContainer: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#000",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderColor: "#f5f5f5",
    height: 45,
  },
  iconStyle: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    color: "#fff",
    fontSize: 15,
    textDecorationLine: "none",
  },
});

export default HeaderComponent;
