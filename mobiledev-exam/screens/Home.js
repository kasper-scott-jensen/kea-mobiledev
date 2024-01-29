import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../style/Style'
import { TouchableCard } from '../components/TouchableCard'

const Home = () => {

    const nav = useNavigation()

    return (

        <SafeAreaView style={styles.container}>
            <TouchableCard
                imageSource={require('../assets/southasia.png')}
                cardText={'South Asia'}
                onPress={() => nav.navigate('stackRandom', { region : 'South Asia' } )}
            />
            <TouchableCard
                imageSource={require('../assets/eastasia.png')}
                cardText={'East Asia'}
                onPress={() => nav.navigate('stackRandom', { region : 'East Asia' } )}
            />
            <TouchableCard
                imageSource={require('../assets/greece.jpeg')}
                cardText={'Greece'}
                onPress={() => nav.navigate('stackRandom', { region : 'Greece' } )}
            />
            <View style={styles.horizontalCardCenter}>
                <Text style={styles.centerText}>Choose a region</Text>
            </View>
            <TouchableCard
                imageSource={require('../assets/italy.png')}
                cardText={'Italy'}
                onPress={() => nav.navigate('stackRandom', { region : 'Italy' } )}
            />
            <TouchableCard
                imageSource={require('../assets/france.jpg')}
                cardText={'France'}
                onPress={() => nav.navigate('stackRandom', { region : 'France' } )}
            />
            <TouchableCard
                imageSource={require('../assets/southamerica.jpg')}
                cardText={'South America'}
                onPress={() => nav.navigate('stackRandom', { region : 'South America' } )}
            />
        </SafeAreaView>

    )
}

export { Home }
