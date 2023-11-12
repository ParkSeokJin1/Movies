import React from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import VMedia from "./VMedia";

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const HListSeparator = styled.View`
  width: 20px;
`;

const HList = ({ title, data }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    <FlatList
      data={data}
      horizontal // 가로모드
      contentContainerStyle={{ paddingHorizontal: 30 }}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={HListSeparator}
      keyExtractor={(item) => item.id + ""}
      renderItem={({ item }) => (
        <VMedia
          fullData={item}
          posterPath={item.poster_path}
          originalTitle={item.original_title ?? item.original_name}
          voteAverage={item.vote_average}
        />
      )}
    />
  </ListContainer>
);

export default HList;
