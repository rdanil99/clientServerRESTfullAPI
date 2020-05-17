import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export default function SearchBar({ textChange, searchButtonPress }) {
	return (
		<View style={styles.inputContainer}>
			<TouchableOpacity onPress={searchButtonPress} style={styles.touch}>
				<Icon name="search" size={20} style={styles.icon} />
			</TouchableOpacity>
			<TextInput
				style={styles.input}
				placeholder="Type city..."
				onChangeText={textChange}
				underlineColorAndroid="transparent"
			/>
		</View>
	);
}
