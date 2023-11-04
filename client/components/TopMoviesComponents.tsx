import React from "react";
import { View, Text } from "./Themed";
import TopMovieComponent from "./TopMovieComponent";
import { FlatList, StyleSheet } from "react-native";
import { MoviesComponentProps } from "../constants/interface";

const TopMoviesComponents: React.FC<MoviesComponentProps> = ({ movies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Top 4 Movies</Text>
      <FlatList
        data={movies.slice(8, 12)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <TopMovieComponent movie={item} />}
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

export default TopMoviesComponents;
