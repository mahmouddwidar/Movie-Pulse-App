import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface SearchBarProps {
	placeholder: string;
	onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
	return (
		<View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
			<Image
				source={icons.search}
				className="size-5"
				resizeMode="contain"
				tintColor={`#ab8bff`}
			/>
			<TextInput
				className="flex-1 ml-2 text-white"
				placeholder={placeholder}
				placeholderTextColor={"#a8b5db"}
				value=""
				onPress={onPress}
				onChangeText={() => {}}
			/>
		</View>
	);
};

export default SearchBar;
