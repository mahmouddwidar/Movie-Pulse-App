import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
			<Tabs.Screen name="Saved" options={{ title: 'Saved', headerShown: false }} />
			<Tabs.Screen name="Search" options={{ title: 'Search', headerShown: false }} />
		</Tabs>
	);
};

export default TabLayout;
