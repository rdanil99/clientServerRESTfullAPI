import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchPlugin/index';
import styles from './style';

export default function Home({}) {
	const [city, setCity] = useState({ data: '' });

	const searchBarTextHandler = (input) => {
		setCity({ ...city, data: input });
	};
	const searchBarButttonHandler = () => {
		console.log('search press');
		//call getCityApi
	};
	return (
		<SafeAreaView containerStyle={styles.parentCaontainer}>
			<ScrollView style={styles.container}>
				<View>
					<SearchBar
						searchButtonPress={searchBarButttonHandler}
						textChange={searchBarTextHandler}
					/>
				</View>
				<View style={styles.weatherContainer}></View>
				<View style={styles.form}></View>
			</ScrollView>
		</SafeAreaView>
	);
}
