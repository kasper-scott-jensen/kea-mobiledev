import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, Text, View, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../style/Style'
import { DetailedView } from '../components/DetailedView'
import { firebase } from '../util/firebase.config'

const Details = ({ route }) => {

    const { item } = route.params

    const nav = useNavigation()

    const handleDeleteUserRecipe = () => {
        const storageRef = firebase.storage()
            .ref()
            .child(item.filename)
        storageRef.delete()
            .then(async () => {
                const docRef = await firebase.firestore()
                    .collection('userRecipes')
                    .where('filename', '==', item.filename)
                    .get()
                    .then((snapshot) => {
                        snapshot.forEach((doc) => {
                            doc.ref.delete()
                        })
                    })
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('Woops!', 'Something went wrong while deleting your recipe.')
            })
        Alert.alert('Success!', 'Your recipe has been successfully deleted.')
        nav.navigate('stackBrowse')
    }

    return (
        
        <SafeAreaView style={styles.container}>
            <DetailedView
                imageUrl={item.imageUrl}
                title={item.title}
                body={item.body}
                guide={item.guide}
                region={item.region ? item.region : 'Home made'}
            />
            {!item.region && (
                <View style={styles.detailsButtonWrapper}>
                    <TouchableOpacity
                        style={styles.detailsEditButton}
                        onPress={() => nav.navigate('stackEdit', { item })}
                    >
                        <Text style={styles.detailsButtonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.detailsDeleteButton}
                        onPress={() => handleDeleteUserRecipe()}
                    >
                        <Text style={styles.detailsButtonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>

    )
}

export { Details }
