import React from "react";
import { View, Text } from "./Themed";
import FavoriteMovieComponent from "./FavoriteMovieComponent";
import { FlatList, StyleSheet } from "react-native";
import { MoviesComponentProps } from "../constants/interface";

const FavoriteMoviesComponents: React.FC<MoviesComponentProps> = ({ movies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Favorite Movies</Text>
      <FlatList
        data={movies.slice(4, 8)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <FavoriteMovieComponent movie={item} />}
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

export default FavoriteMoviesComponents;
