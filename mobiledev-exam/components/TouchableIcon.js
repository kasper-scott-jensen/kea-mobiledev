import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from '../style/Style'

const TouchableIcon = ({ name, onPress, size, text }) => {

    return (

        <TouchableOpacity style={styles.touchableIcon} onPress={onPress}>
            <Ionicons name={name} color={'#ff6347'} size={size}/>
            <Text style={styles.touchableIconText}>{text}</Text>
        </TouchableOpacity>
        
    )
}

export { TouchableIcon }
