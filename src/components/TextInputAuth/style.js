import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	textInput: {
		width: Dimensions.get('window').width - 100,
		backgroundColor: 'transparent',
		borderBottomWidth: 1,
		borderBottomColor: '#3495db',
		color: '#3495db',
		marginVertical: 10,
		marginHorizontal: 5,
		paddingHorizontal: 20,
		fontSize: 17,
	},
});
export default styles;
