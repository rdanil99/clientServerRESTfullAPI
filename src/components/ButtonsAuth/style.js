import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	button: {
		width: Dimensions.get('screen').width / 3.2,
		height: 45,
		borderRadius: 20,
		borderColor: '#000',
		borderWidth: 1,
		marginHorizontal: 10,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#000',
		fontSize: 17,
		fontWeight: 'bold',
	},
});
export default styles;
