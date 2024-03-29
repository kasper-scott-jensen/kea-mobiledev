import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';


const Home = () => {

	return (

		<View style={styles.container}>
			<StatusBar style='auto'/>
			<Image source={require('./../assets/homeHeader.png')} style={styles.headerImage}/>
		</View>

	);

};


const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#00bfff',
		alignItems: 'center'
	},
	headerImage: {
		resizeMode: 'contain',
		width: 300,
		position: 'absolute',
		top: '40%'
    }

});


export default Home;