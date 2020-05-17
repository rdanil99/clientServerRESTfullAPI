import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const RoundButton = ({ onPress, buttonText, textStyle }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={{ ...styles.text, ...textStyle }}>{buttonText}</Text>
		</TouchableOpacity>
	);
};
export default RoundButton;
