import { Text, View } from "../../components/Themed";
import { ScrollView, StyleSheet } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import TopMoviesComponents from "../../components/TopMoviesComponents";
import MoviesComponents from "../../components/MoviesComponents";
import FavoriteMoviesComponents from "../../components/FavoriteMoviesComponents";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { MovieProps } from "../../constants/interface";

const GET_MOVIES = gql`
  query allMovies {
    findAll {
      id
      title
      image
      genre
      imdb
      movieTrailerLink
      description
    }
  }
`;

export default function TabOneScreen() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [searchValue, setSearchValue] = useState<string>("");

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }

  const moviesDataGraphql = data?.findAll;

  const filteredResult = moviesDataGraphql.filter((movie: MovieProps) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent setSearchValue={setSearchValue} />
      <MoviesComponents movies={filteredResult} />
      <TopMoviesComponents movies={filteredResult} />
      <FavoriteMoviesComponents movies={filteredResult} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
