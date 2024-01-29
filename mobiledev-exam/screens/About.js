import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker } from 'react-native-maps'
import { styles } from '../style/Style'

const About = () => {

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.aboutMapWrapper}>
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
            <View style={styles.aboutTextWrapper}>
                <Text style={styles.aboutHeader}>foodi &copy; {new Date().getFullYear()}</Text>
                <Text style={styles.aboutBody}>KEA Corp. Ltd.</Text>
                <Text style={styles.aboutBody}>2200 Copenhagen N, Denmark</Text>
            </View>
        </SafeAreaView>

    )
}

export { About }
