import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
	return (
		<>
			<StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
			</Stack>
		</>
	);
}
