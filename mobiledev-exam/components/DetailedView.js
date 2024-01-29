import { Text, Image, View, TouchableOpacity, Linking } from 'react-native'
import { styles } from '../style/Style'

const DetailedView = ({ imageUrl, title, body, guide, region }) => {

    return (

        <View style={styles.detailWrapper}>
            <View style={styles.detailImageWrapper}>
                <Image
                    source={imageUrl ? { uri: imageUrl } : require('../assets/imageicon.png')}
                    style={styles.detailImage}
                />
            </View>
            <View style={styles.detailTextWrapper}>
                <Text style={styles.detailTitle}>{title}</Text>
                <Text style={styles.detailRegion}>{region}</Text>
                <Text style={styles.detailBody}>{body}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(guide)}>
                    <Text style={styles.detailGuide}>Click here to watch a full guide!</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export { DetailedView }
