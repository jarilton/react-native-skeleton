import { StatusBar } from "expo-status-bar";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { styles } from "./styles";

import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      {loading ? (
        <ContentLoader
          viewBox={`0 0 ${width} ${height}`}
          backgroundColor="#333"
          foregroundColor="#999"
        >
          <Circle cx="38" cy="38" r="36" />
          <Rect x="80" y="17" rx="4" ry="4" width={30} height={12} />
          <Rect x="80" y="40" rx="4" ry="4" width={200} height={14} />
        </ContentLoader>
      ) : (
        <View style={styles.header}>
          <Image
            source={{ uri: "https://github.com/jarilton.png" }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.greeting}>Olá</Text>
            <Text style={styles.username}>Jamal</Text>
          </View>
        </View>
      )}
    </View>
  );
}
