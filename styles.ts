import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 32,
    },
    header: {
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    avatar: {
        height: 64,
        width: 64,
        borderRadius: 32,
    },
    greeting: {
        fontSize: 14,
        color: '#FFF',
    },
    username: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
  });
  