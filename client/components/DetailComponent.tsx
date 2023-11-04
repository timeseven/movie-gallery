import { View, Text, StyleSheet, ScrollView, Image, Pressable, Linking } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { MovieComponentProps } from "../constants/interface";

const DetailComponent: React.FC<MovieComponentProps> = ({ movie }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <View style={styles.playButtonContainer}>
        <Pressable style={styles.playButton} onPress={() => Linking.openURL(movie.movieTrailerLink)}>
          <AntDesign name="play" size={60} color={"rgba(255,255,255,0.3)"} />
        </Pressable>
      </View>
      <Pressable style={styles.iconContainer} onPress={goBack}>
        <AntDesign name="left" size={24} color="#fff" style={styles.iconStyle} />
      </Pressable>
      <View style={styles.imdbContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>IMBD {movie.imdb}</Text>
        </View>
      </View>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.descriptionStyle}>
        <Text style={styles.descriptionText}>{movie.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    overflow: "hidden",
  },
  playButtonContainer: {
    position: "absolute",
    top: "25%",
    left: "40%",
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    left: 5,
  },
  iconStyle: {
    fontWeight: "bold",
  },
  imdbContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#333",
    backgroundColor: "#f3ce13",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#eee",
  },
  descriptionStyle: {
    paddingHorizontal: 10,
  },
  descriptionText: {
    color: "#eee",
  },
});

export default DetailComponent;
