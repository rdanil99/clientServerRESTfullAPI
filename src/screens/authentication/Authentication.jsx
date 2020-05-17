import React, { useState } from 'react';
import {
	Text,
	View,
	Image,
	TextInput,
	ScrollView,
	AsyncStorage,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RoundButton from '../../components/ButtonsAuth/index';
import styles from './style';
import { AuthContext } from '../../utils/context';

export default function Authentication({ navigation }) {
	const [state, setState] = useState({
		login: '',
		password: '',
	});

	const { singIn, singUp } = React.useContext(AuthContext);
	const loginChangeHandler = (data) => {
		setState({ ...state, login: data });
	};
	const passwordChangeHandler = (data) => {
		setState({ ...state, password: data });
	};

	const singUpHandler = async () => {
		try {
			const user = JSON.parse(await AsyncStorage.getItem(state.login));
			if (!user) {
				await AsyncStorage.setItem(
					state.login,
					JSON.stringify({
						login: state.login,
						password: state.password,
					})
				);
				console.log('user created!');
				return;
			}
			console.log('User with such login alreay exist!');
		} catch (err) {
			console.log(err);
		}
	};
	const singInHandler = async () => {
		try {
			const user = JSON.parse(await AsyncStorage.getItem(state.login));

			if (!user) {
				console.log('None authentication user!');
				return;
			}
			if (user.login === state.login && user.password === state.password) {
				console.log('user authentificate');
				singIn();
				//navigation.naviagte('HomePage');
			} else {
				console.log('Invalid login or password');
			}
		} catch (err) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					source={require('../../assets/images/cloud.png')}
					style={styles.logo}
					resizeMode="contain"
				></Image>
			</View>
			<ScrollView contentContainerStyle={styles.footer}>
				<View>
					<Text style={styles.footerText}>Login</Text>
					<View style={styles.row}>
						<FontAwesome name="user-o" size={21} />
						<TextInput
							maxLength={15}
							style={styles.textInput}
							autoCapitalize="none"
							onChangeText={loginChangeHandler}
						/>
					</View>
				</View>
				<View>
					<Text style={styles.footerText}>Password</Text>
					<View style={styles.row}>
						<FontAwesome name="lock" size={23} />
						<TextInput
							maxLength={20}
							secureTextEntry
							autoCapitalize="none"
							style={styles.textInput}
							onChangeText={passwordChangeHandler}
						/>
					</View>
				</View>
				<View
					style={[
						styles.row,
						{
							marginTop: 10,
						},
					]}
				>
					<RoundButton
						textStyle={styles.footerTextBlue}
						buttonText="Sing in"
						onPress={singInHandler}
					/>
					<RoundButton
						textStyle={styles.footerTextOrange}
						buttonText="Sing up"
						onPress={singUpHandler}
					/>
				</View>
			</ScrollView>
		</View>
	);
}
