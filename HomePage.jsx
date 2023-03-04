import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={{ uri: "https://example.com/header-image.png" }}
      />
      <Text style={styles.title}>Welcome to TravelApp</Text>
      <View style={styles.contentContainer}>
        {/* Add some content here */}
      </View>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Icon name="home" size={30} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomMenuItem}
          onPress={() => navigation.navigate("DestinationDiscovery")}
        >
          <Icon name="map" size={30} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Icon name="share" size={30} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuItem}>
          <Icon name="star" size={30} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    height: 400,
  },
  contentContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  topBar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomMenu: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  bottomMenuItem: {
    flex: 1,
    alignItems: "center",
  },
});

export default HomePage;
