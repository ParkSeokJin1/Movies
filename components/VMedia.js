import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import Votes from "./Votes";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Movie = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

const VMedia = ({ posterPath, originalTitle, voteAverage, fullData }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stacks", {
      screen: "Detail",
      params: {
        ...fullData,
      },
    });
  };

  return (
    <TouchableOpacity onPress={goToDetail}>
      <Movie>
        <Poster path={posterPath} />
        <Title>
          {originalTitle.slice(0, 12)}
          {originalTitle.length > 12 ? "..." : null}
        </Title>
        <Votes votes={voteAverage} />
      </Movie>
    </TouchableOpacity>
  );
};

export default VMedia;
