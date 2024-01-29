import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, Text, View, Alert, Image, TextInput } from 'react-native'
import { useState } from 'react'
import { styles } from '../style/Style'
import { firebase } from '../util/firebase.config'

const Edit = ({ route }) => {

    const nav = useNavigation()

    const { item } = route.params

    const [newBody, setNewBody] = useState(item.body)
    const [newGuide, setNewGuide] = useState(item.guide)

    const handleSavePress = () => {
        firebase.firestore()
            .collection('userRecipes')
            .where('title', '==', item.title)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    doc.ref.update({
                        body: newBody,
                        guide: newGuide
                    })
                })
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('Woops!', 'Something went wrong while updating your recipe.')
            })
        Alert.alert('Success!', 'Your recipe has been successfully updated.')
        nav.navigate('stackBrowse')
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.editImageWrapper}>
                <Image
                    source={item.imageUrl ? { uri: item.imageUrl } : require('../assets/imageicon.png')}
                    style={styles.editImage}
                />
            </View>
            <View style={styles.detailTextWrapper}>
                <Text style={styles.editTitle}>{item.title}</Text>
                <TextInput
                    value={newGuide}
                    onChangeText={(text) => setNewGuide(text)}
                    style={styles.smallTextInput}
                />
                <TextInput
                    value={newBody}
                    onChangeText={(text) => setNewBody(text)}
                    multiline={true}
                    numberOfLines={5}
                    style={styles.bigTextInput}
                />
            </View>
            <View style={styles.editButtonWrapper}>
                <TouchableOpacity
                    style={styles.detailsEditButton}
                    onPress={() => handleSavePress()}
                >
                    <Text style={styles.detailsButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.detailsDeleteButton}
                    onPress={() => nav.goBack()}
                >
                    <Text style={styles.detailsButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export { Edit }
