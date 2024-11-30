import { Image, Text, View } from "react-native";

export default function ProjectCard({ image, title }) {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 160, aspectRatio: 16 / 9, borderRadius: 10 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "dimgray",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
