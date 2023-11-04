import React from "react";
import { View, Text } from "./Themed";
import { Image, StyleSheet, useWindowDimensions } from "react-native";
import { MovieComponentProps } from "../constants/interface";
import { Link } from "expo-router";

const MovieComponent: React.FC<MovieComponentProps> = ({ movie }) => {
  const width = useWindowDimensions().width;
  return (
    <Link href={`/movie/${movie.id}`}>
      <View style={[styles.container, { width: width - 200 }]}>
        <Image source={{ uri: movie.image }} style={styles.image} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 3,
    resizeMode: "cover",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },
});

export default MovieComponent;
