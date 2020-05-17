import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	icon: {
		color: '#fff',
		backgroundColor: 'transparent',
	},
	inputContainer: {
		marginTop: 12,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		paddingLeft: 10,
		fontSize: 16,
	},
	touch: {
		backgroundColor: 'red',
	},
});
export default styles;
