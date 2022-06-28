import React, { useContext, useState } from "react";

import {
  // StyleSheet,
  // Text,
  // StatusBar,

  View,
  FlatList,
  Pressable,
  Platform,
} from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.components";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  // margin-bottom: ${(props) => props.theme.space[5]};
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ResturantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouriteToggle={isToggled}
        onFavouritesToggle={() => setToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
