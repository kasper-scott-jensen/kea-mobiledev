import { TouchableOpacity, Image, Text } from 'react-native'
import { styles} from '../style/Style'

const TouchableListItem = ({ image, text, onPress }) => {

    return (

        <TouchableOpacity
            style={styles.listItem}
            onPress={onPress}
        >
            <Image
                style={styles.listItemImage}
                source={{ uri: image }}
            />
            <Text style={styles.listItemText}>{text}</Text>
        </TouchableOpacity>

    )
}

export { TouchableListItem }
