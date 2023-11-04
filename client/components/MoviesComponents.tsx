import React from "react";
import { View, Text } from "./Themed";
import MovieComponent from "./MovieComponent";
import { FlatList, StyleSheet } from "react-native";
import { MoviesComponentProps } from "../constants/interface";

const MoviesComponents: React.FC<MoviesComponentProps> = ({ movies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <MovieComponent movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#000",
  },
  headerText: {
    marginBottom: 10,
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
    fontSize: 14,
  },
});

export default MoviesComponents;
