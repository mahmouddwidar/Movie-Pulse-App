import MovieCard from "@/components/MovieCard";
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
import { getTrendingMovies } from "@/services/appwrite";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
	const router = useRouter();

	// Fetch the trending movies
	const {
		data: trendingMovies,
		loading: trendingLoading,
		error: trendingError,
	} = useFetch(getTrendingMovies);

	// Fetch the latest movies
	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
	} = useFetch(() => fetchMovies({ query: "" }));

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

					{moviesLoading || trendingLoading ? (
						<ActivityIndicator
							size="large"
							color={"#0000ff"}
							className="mt-10 self-center"
						/>
					) : moviesError || trendingError ? (
						<Text>Error: {moviesError?.message || trendingError?.message}</Text>
					) : (
						<View className="flex-1 mt-5">
							<SearchBar
								placeholder="Search for a movie"
								onPress={() => router.push("/Search")}
							/>

							{/* Trending Movies */}
							{trendingMovies && (
								<View className="mt-10">
									<Text className="text-white text-lg font-bold mb-3">
										Trending Movies
									</Text>

									<FlatList
										data={trendingMovies}
										horizontal
										showsHorizontalScrollIndicator={false}
										ItemSeparatorComponent={() => <View className="w-4" />}
										renderItem={({ item, index }) => (
											<TrendingCard movie={item} index={index} />
										)}
										keyExtractor={(item) => item.movie_id.toString()}
									/>
								</View>
							)}

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
								renderItem={({ item }) => <MovieCard {...item} />}
								keyExtractor={(item) => item.id.toString()}
								numColumns={3}
								columnWrapperStyle={{
									justifyContent: "flex-start",
									gap: 20,
									paddingRight: 5,
									marginBottom: 10,
								}}
								contentContainerStyle={{
									padding: 4,
								}}
								className="mt-2 pb-32"
								scrollEnabled={false}
							/>
						</View>
					)}
				</ScrollView>
			</View>
		</View>
	);
}
