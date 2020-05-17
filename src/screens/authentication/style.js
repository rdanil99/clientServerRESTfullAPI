import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3495db',
	},

	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopRightRadius: 27,
		borderTopLeftRadius: 27,
		backgroundColor: '#fff',
	},
	logo: {
		width: Dimensions.get('screen').width / 2,
		height: Dimensions.get('screen').width / 2,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textInput: {
		width: Dimensions.get('window').width - 120,
		backgroundColor: 'transparent',
		borderBottomWidth: 1,
		borderBottomColor: '#3495db',
		color: '#3495db',
		marginVertical: 10,
		marginHorizontal: 5,
		paddingHorizontal: 20,
		fontSize: 18,
	},
	footerText: {
		fontSize: 16,
	},
	footerTextBlue: {
		color: '#3495db',
	},
	footerTextOrange: {
		color: '#ffa800',
	},
});
export default styles;
