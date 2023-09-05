//AIzaSyBVX7tSMJO_-BnNRm4oR_Em2zpIy7mkQTY
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";


const MapScreen = ({route}) => {
  
  
console.log('route', route.params.data);
const fotoCoordsLatidude = route.params.data.latidude
const fotoCoordsLongitude = route.params.data.longitude
console.log('fotoCoords', fotoCoordsLatidude);
  
  const { params: {data} } = useRoute();
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>MapScreen</Text>
      {/* <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker
            title="I am here"
            coordinate={location}
            description="Hello"
          />
        )}
      </MapView> */}
      <MapView
        style={styles.mapStyle}
        region={{
          // latitude: 37.78825,
          latitude: fotoCoordsLatidude,
          // longitude: -122.4324,
          longitude: fotoCoordsLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        <Marker
          title="I am here"
          // coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          coordinate={{ latitude: fotoCoordsLatidude, longitude: fotoCoordsLongitude }}
          description='Hello'
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // justifyContent: "flex-end",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
