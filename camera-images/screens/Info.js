import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const Info = () => {
    
	return (

		<View style={styles.container}>
			<StatusBar style='auto'/>
			<Image source={require('./../assets/infoHeader.png')} style={styles.headerImage}/>
            <View style={styles.bodyWrapper}>
                <Text style={styles.textHead}>ExpoImages9000 &copy; 2023</Text>
                <Text style={styles.textBody}>KEA Corp. Ltd.</Text>
                <Text style={styles.textBody}>2200 Copenhagen N</Text>
                <View style={styles.mapWrapper}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: 55.6916035,
                            longitude: 12.552511,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: 55.6916035,
                                longitude: 12.552511
                            }}
                        />
                    </MapView>
                </View>
            </View>
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
		width: 95,
		paddingTop: 150,
        paddingRight: 20
    },
    bodyWrapper: {
        
    },
    textHead: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10
    },
    textBody: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    map: {
        width: 375,
        height: 465
    },
    mapWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    }

});


export default Info;