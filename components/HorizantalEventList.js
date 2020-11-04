import React from "react";
import { View, StyleSheet, Text, Button, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListSpacer from "./ListSpacer";
import GridItem from "./GridItem";

export default function HorizantalEventsList(props) {
  const { title, onViewAll, data, loading } = props;
  // console.log(renderItem)
  //   if (!!loading) {
  //     return <Tecxt>loading</Tecxt>;
  //   }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionHeaderContainer}>
        <Text>{title}</Text>
        {/* <Button>View all</Button> */}
      </View>
      {!data.length ? (
        <View style={{ display: "flex", justifyContent: "center" }}>
          <Text>{title} no items to render </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <GridItem title={item.title} img={item.img} date={item.date} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          ItemSeparatorComponent={() => <ListSpacer horizantal />}
          contentContainerStyle={styles.listContainer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${title || "item"}-${item.id.toString()}`}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    marginVertical: 5,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  sectionHeaderContainer: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
