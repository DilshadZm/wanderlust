import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet} from "react-native";

function DestinationDiscovery({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={{ uri: "https://example.com/header-image.png" }}
      />
      <Text style={styles.title}>Popular Destinations</Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("DestinationDetail")} style={styles.destinationItem}>
          <Image
            style={styles.destinationImage}
            source={{ uri: "https://example.com/destination-1.png" }}
          />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationTitle}>Destination 1</Text>
            <Text style={styles.destinationSubtitle}>Lorem ipsum dolor sit amet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DestinationDetail")} style={styles.destinationItem}>
          <Image
            style={styles.destinationImage}
            source={{ uri: "https://example.com/destination-2.png" }}
          />
          <View style={styles.destinationDetails}>
            <Text style={styles.destinationTitle}>Destination 2</Text>
            <Text style={styles.destinationSubtitle}>Consectetur adipiscing elit</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")} style={styles.bottomMenuItem}>
          <Icon name="home" size={30} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DestinationDiscovery")} style={styles.bottomMenuItem}>
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
  contentContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  destinationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  destinationImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
  },
  destinationDetails: {
    flex: 1,
  },
  destinationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  destinationSubtitle: {
    fontSize: 14,
    color: "#555",
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

export default DestinationDiscovery;
