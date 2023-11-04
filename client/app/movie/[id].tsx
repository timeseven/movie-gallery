import { Text, StyleSheet } from "react-native";
import React from "react";
import DetailComponent from "../../components/DetailComponent";
import { useLocalSearchParams } from "expo-router";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE_BY_ID = gql`
  query movieById($id: Int!) {
    findOne(id: $id) {
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

const Detailed: React.FC = () => {
  const { id } = useLocalSearchParams();

  const { loading, error, data } = useQuery(GET_MOVIE_BY_ID, {
    variables: { id: Number(id) },
  });

  const movie = data?.findOne;

  if (!movie) {
    return <Text>Movie {id} not found</Text>;
  }

  return <DetailComponent movie={movie} />;
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

export default Detailed;
