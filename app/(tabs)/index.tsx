import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
} from "react-native";

export default function Index() {
	const router = useRouter();
	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
	} = useFetch(() => fetchMovies({ query: "" }));

	// console.log(movies.results[0]);

	return (
		<View className="flex-1 bg-primary">
			<Image source={images.bg} className="absolute w-full z-0" />

			<View className="flex-1 px-5">
				<ScrollView
					className="flex-1 px-5"
					contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
					showsVerticalScrollIndicator={false}
				>
					<Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5" />

					{moviesLoading ? (
						<ActivityIndicator
							size="large"
							color={"#0000ff"}
							className="mt-10 self-center"
						/>
					) : moviesError ? (
						<Text>Error: {moviesError?.message}</Text>
					) : (
						<View className="flex-1 mt-5">
							<SearchBar
								placeholder="Search for a movie"
								onPress={() => router.push("/Search")}
							/>

							<Text
								style={{
									fontSize: 18,
									color: "white",
									fontWeight: "bold",
									marginTop: 20,
									marginBottom: 10,
								}}
							>
								Latest Movies
							</Text>

							<FlatList
								data={movies}
								renderItem={({ item }) => (
									<View className="flex-1 m-1">
										<Image
											source={{
												uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
											}}
											className="w-full h-48 rounded-lg"
											resizeMode="cover"
										/>
										<Text className="text-white text-sm mt-2" numberOfLines={1}>
											{item.title}
										</Text>
									</View>
								)}
								keyExtractor={(item) => item.id.toString()}
								numColumns={3}
								columnWrapperStyle={{
									gap: 8,
								}}
								contentContainerStyle={{
									padding: 4,
								}}
							/>
						</View>
					)}
				</ScrollView>
			</View>
		</View>
	);
}
