import { TouchableOpacity, Image, View, Text } from 'react-native'
import { styles } from '../style/Style'

const TouchableCard = ({ imageSource, cardText, onPress }) => {

    return (

        <TouchableOpacity style={styles.horizontalCard} onPress={onPress}>
            <Image style={styles.cardImage} source={imageSource}/>
            <View style={styles.cardOverlay}/>
            <Text style={styles.cardText}>{cardText}</Text>
        </TouchableOpacity>
        
    )
}

export { TouchableCard }
