import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from './src/screens/authentication/Authentication';
import { AuthContext } from './src/utils/context';
import Home from './src/screens/home/HomePage';

const AuthStack = createStackNavigator();

export default function App() {
	const [token, setToken] = React.useState(null);

	const authContext = React.useMemo(() => {
		return {
			singIn: () => setToken('asd'),
			singUp: () => setToken('asd'),
			singOut: () => setToken(null),
		};
	}, []);
	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<AuthStack.Navigator headerMode="none">
					{token ? (
						<AuthStack.Screen name="HomePage" component={Home} />
					) : (
						<AuthStack.Screen
							name="Authentication"
							component={Authentication}
						/>
					)}
				</AuthStack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
