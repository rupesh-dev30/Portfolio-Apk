import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ProjectCard from "./components/ProjectCard";

// function DisplayInsets() {
//   const insets = useSafeAreaInsets();

//   return (
//     <Text>
//       Insets: {insets.bottom} - {insets.top}
//     </Text>
//   );
// }

export default function App() {
  const links = {
    github: "https://github.com/rupesh-dev30",
    linkedin: "https://www.linkedin.com/in/rupeshkumar30",
  };

  const onContactMe = () => {
    Linking.openURL("mailto:cgcrupesh@gmail.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar style="auto" />
            {/* Remote Image : uri*/}
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2019/05/09/03/21/students-4190327_1280.jpg",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />

            {/* Local Image : require*/}
            <Image
              source={require("./assets/rupesh.png")}
              style={styles.image}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Rupesh Kumar
            </Text>
            {/* <DisplayInsets /> */}
            <Text>BTech Student</Text>

            <View style={{ flexDirection: "row", marginVertical: 8, gap: 10 }}>
              {links.github && (
                <FontAwesome5 name="github" size={24} color="black" />
              )}
              {links.linkedin && (
                <FontAwesome5 name="linkedin" size={24} color="black" />
              )}
              {links.x && (
                <FontAwesome6 name="x-twitter" size={24} color="black" />
              )}
            </View>

            <View style={{marginTop: 10}}>
              <Button title="Contact me" onPress={onContactMe} />
            </View>

            <Text style={styles.text}>
              I am a B.Tech student with expertise in ReactJS, NextJS, C++,
              Java, NodeJS, ExpressJS, and MongoDB. Currently, I am focused on
              mastering NextJS to further enhance my full-stack development
              skills. I am passionate about leveraging technology to build
              innovative solutions and contribute to the open-source community.
            </Text>

            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
              Projects
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 20 }}
            >
              <ProjectCard
                image={require("./assets/DevForum.png")}
                title="DevForum"
              />
              <ProjectCard
                image={require("./assets/storeit.png")}
                title="Store Karle"
              />
              <ProjectCard
                image={require("./assets/Vinext.png")}
                title="ViNext"
              />
            </ScrollView>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: "white",
    marginTop: -75,
  },
  text: {
    padding: 8,
    fontSize: 16,
    lineHeight: 20,
    marginTop: 15,
  },
});
