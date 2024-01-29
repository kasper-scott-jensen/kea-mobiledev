import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { stackBundle } from './components/StackNavigator'
import { TabBarIcon } from './components/TabBarIcon'

export default function App() {

	const btnav = createBottomTabNavigator()

	return (	

		<NavigationContainer>
			<btnav.Navigator
				initialRouteName='home'
				screenOptions={{
					headerShown: false,
					unmountOnBlur: true,
					tabBarStyle: {
						backgroundColor: '#ffffff',
						paddingTop: 5,
						paddingBottom: 5,
						height: 55
					},
					tabBarLabelStyle: {
						color: '#333333',
						fontSize: 14
					}
				}}
			>
				<btnav.Screen
					name={'home'}
					component={stackBundle.StackHome}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({focused}) => (
							<TabBarIcon
								name='home-outline'
								size={23}
								focused={focused}
							/>
						)
					}}
				/>
				<btnav.Screen
					name={'browse'}
					component={stackBundle.StackBrowse}
					options={{
						tabBarLabel: 'Browse',
						tabBarIcon: ({focused}) => (
							<TabBarIcon
								name='search'
								size={24}
								focused={focused}
							/>
						)
					}}
				/>
				<btnav.Screen
					name={'add'}
					component={stackBundle.StackAdd}
					options={{
						tabBarLabel: 'Add',
						tabBarIcon: ({focused}) => (
							<TabBarIcon
								name='add'
								size={28}
								focused={focused}
							/>
						)
					}}
				/>
				<btnav.Screen
					name={'about'}
					component={stackBundle.StackAbout}
					options={{
						tabBarLabel: 'About',
						tabBarIcon: ({focused}) => (
							<TabBarIcon
								name='help-outline'
								size={24}
								focused={focused}
							/>
						)
					}}
				/>
			</btnav.Navigator>
		</NavigationContainer>
		
	)
}
