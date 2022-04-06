import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
     },
     carContainer: {
          height: Dimensions.get("window").height,
          width: "100%",
     },
     titleContainer: {
          marginTop: "30%",
          alignItems: "center",
          width: "100%",
     },
     title: {
          fontSize: 40,
          fontWeight: "500",
     },
     subtitle: {
          color: "#5c5e62",
          fontSize: 16,
     },
     backgroundImage: {
          height: "100%",
          width: "100%",
          position: "absolute",
          resizeMode: "cover",
     },
     buttonContainer: {
          position: "absolute",
          bottom: 50,
          width: "100%",
     },
     subtitleCTA: {
          textDecorationLine:"underline",
     }
});
