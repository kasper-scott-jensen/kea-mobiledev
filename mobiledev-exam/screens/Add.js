import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, View, TouchableOpacity, Text, Keyboard, Image, Alert } from 'react-native'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { TouchableIcon } from '../components/TouchableIcon'
import { styles } from '../style/Style'
import { firebase } from '../util/firebase.config'


const Add = () => {

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [guide, setGuide] = useState()
    const [imageUri, setImageUri] = useState()

    const handleSavePress = () => {
        Keyboard.dismiss()
        if (!title || !body || !guide || !imageUri) {
			return Alert.alert(
				'Missing information!',
				'Please fill out all the fields before saving.'
			)
		}
        handleUpload()
    }

    const handleCancelPress = () => {
        setTitle()
        setBody()
        setGuide()
        setImageUri()
        Keyboard.dismiss()
    }

    const handleImageSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true
        })
        setImageUri({ uri: result.uri })
    }

    const handleImageCapture = async () => {
		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true
		})
		setImageUri({ uri: result.uri })
    }

    const handleImageCancel = () => {
        if (!imageUri) {
            return Alert.alert(
                'No image selected.',
                'Please select an image from your gallery or capture one with your camera.'
            )
        }
        setImageUri()
    }

    const handleUpload = async () => {
        const filepath = imageUri.uri
		const response = await fetch(filepath)
		const blob = await response.blob()
		const filename = filepath.substring(filepath.lastIndexOf('/') + 1)
		const storageRef = firebase.storage()
			.ref()
			.child(filename)
		storageRef.put(blob)
			.then(async (snapshot) => {
				const imageUrl = await snapshot.ref.getDownloadURL()
				firebase.firestore()
					.collection('userRecipes')
					.add({
                        imageUrl: imageUrl,
                        filename: filename,
                        title: title,
                        body: body,
                        guide: guide
                    })
			})
			.catch((error) => {
                console.log(error)
				Alert.alert('Woops!', 'Something went wrong.')
			})
		Alert.alert('Success!', 'Your recipe has been successfully uploaded.')
		handleCancelPress()
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.addIconsWrapper}>
                <TouchableIcon
                    name={'folder-open'}
                    size={30}
                    text={'Select'}
                    onPress={() => handleImageSelect()}
                />
                <TouchableIcon
                    name={'camera'}
                    size={30}
                    text={'Capture'}
                    onPress={() => handleImageCapture()}
                />
                <TouchableIcon
                    name={'close-circle'}
                    size={30}
                    text={'Delete'}
                    onPress={() => handleImageCancel()}
                />
            </View>
            <View style={styles.addImageWrapper}>
                <Image
                    source={imageUri ? { uri: imageUri.uri } : require('../assets/imageicon.png')}
                    style={styles.addImage}
                />
            </View>        
            <View style={styles.addTextWrapper}>
                <TextInput
                    placeholder='Link a guide here!'
                    value={guide}
                    onChangeText={(text) => setGuide(text)}
                    style={styles.smallTextInput}
                />
                <TextInput
                    placeholder='What are you even making?'
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    style={styles.smallTextInput}
                />
                <TextInput
                    placeholder='Sounds yummy! What is in it?'
                    value={body}
                    onChangeText={(text) => setBody(text)}
                    multiline={true}
                    numberOfLines={5}
                    style={styles.bigTextInput}
                />
            </View>
            <View style={styles.addButtonWrapper}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleSavePress()}
                >
                    <Text style={styles.addButtonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addCancelButton}
                    onPress={() => handleCancelPress()}
                >
                    <Text style={styles.addButtonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export { Add }
