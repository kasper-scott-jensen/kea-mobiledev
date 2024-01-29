import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, FlatList, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { styles } from '../style/Style'
import { firebase } from '../util/firebase.config'
import { TouchableListItem } from '../components/TouchableListItem'

const Browse = () => {

    const nav = useNavigation()
    const isFocused = useIsFocused()

    const [recipes, setRecipes] = useState()
    const [userRecipes, setUserRecipes] = useState()

    const getRecipes = () => {
        firebase.firestore()
            .collection('recipes')
            .get()
            .then((snapshot) => {
                const result = []
                snapshot.forEach((doc) => {
                    result.push({...doc.data()})
                })
                const sortedArray = [...result].sort((a, b) => a.title.localeCompare(b.title))
                setRecipes(sortedArray)
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('Woops!', 'Something went wrong while fetching the recipes.')
            })
    }

    const getUserRecipes = () => {
        firebase.firestore()
            .collection('userRecipes')
            .get()
            .then((snapshot) => {
                const result = []
                snapshot.forEach((doc) => {
                    result.push({...doc.data()})
                })
                const sortedArray = [...result].sort((a, b) => a.title.localeCompare(b.title))
                setUserRecipes(sortedArray)
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('Woops!', 'Something went wrong while fetching your recipes.')
            })
    }

    useEffect(() => {
        if (isFocused) {
            getRecipes()
            getUserRecipes()
        }
    }, [isFocused])


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.browseRandomWrapper}>
                <View style={styles.browseHeader}>
                    <Text style={styles.browseHeaderText}>All recipes</Text>
                </View>
                <FlatList
                    style={styles.flatList}
                    data={recipes}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <TouchableListItem
                            image={item.imageUrl}
                            text={item.title}
                            onPress={() => nav.navigate('stackDetails', { item })}
                        />
                    )}
                />
            </View>
            <View style={styles.browseOwnWrapper}>
                <View style={styles.browseHeader}>
                    <Text style={styles.browseHeaderText}>Your recipes</Text>
                </View>
                <FlatList
                    style={styles.flatList}
                    data={userRecipes}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <TouchableListItem
                            image={item.imageUrl}
                            text={item.title}
                            onPress={() => nav.navigate('stackDetails', { item })}
                        />
                    )}
                />
            </View>
        </SafeAreaView>

    )
}

export { Browse }
