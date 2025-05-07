import React from "react";
import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
	if (focused) {
		return (
			<ImageBackground
				source={images.highlight}
				className="flex flex-row w-full min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
			>
				<Image source={icon} className="size-5" tintColor={`#151312`} />
				<Text className="font-semibold ml-2 text-secondary text-base">
					{title}
				</Text>
			</ImageBackground>
		);
	}

	return (
		<View className="size-full justify-center items-center mt-4 rounded-full">
			<Image source={icon} tintColor={`#A8B5DB`} className="size-5" />
		</View>
	);
};

const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				},
				tabBarStyle: {
					backgroundColor: "#0f0d23",
					borderRadius: 50,
					marginHorizontal: 20,
					marginBottom: 36,
					height: 52,
					position: "absolute",
					overflow: "hidden",
					borderWidth: 1,
					borderColor: "0f0d23",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.home} title={"Home"} />
					),
				}} 
			/>
			<Tabs.Screen
				name="Search"
				options={{
					title: "Search",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.search} title={"Search"} />
					),
				}}
			/>
			<Tabs.Screen
				name="Saved"
				options={{
					title: "Saved",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.save} title={"Saved"} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
