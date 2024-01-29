import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { styles } from '../style/Style'
import { DetailedView } from '../components/DetailedView'
import { firebase } from '../util/firebase.config'

const Random = ({ route }) => {

    const isFocused = useIsFocused()
    const region = route.params.region

    const [recipes, setRecipes] = useState()
    const [randomRecipe, setRandomRecipe] = useState()

    const getRecipes = () => {
        firebase.firestore()
            .collection('recipes')
            .get()
            .then((snapshot) => {
                const result = []
                snapshot.forEach((doc) => {
                    result.push({...doc.data()})
                })
                setRecipes(result)
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('Woops!', 'Something went wrong while fetching the recipes.')
            })
    }

    const getRandomRecipe = () => {
        if (recipes && recipes.length > 0) {
            const filteredRecipes = recipes.filter(
                (recipe) => recipe.region === region
            )
            if (filteredRecipes.length > 0) {
                const randomIndex = Math.floor(Math.random() * filteredRecipes.length)
                const recipe = filteredRecipes[randomIndex]
                setRandomRecipe(recipe)
            }
        }
    }

    useEffect(() => {
        if (isFocused) {
            getRecipes()
        }
    }, [isFocused])

    useEffect(() => {
        getRandomRecipe()
    }, [recipes])

    return (

        <SafeAreaView style={styles.container}>
            {randomRecipe && (
                <DetailedView
                    imageUrl={randomRecipe.imageUrl}
                    title={randomRecipe.title}
                    body={randomRecipe.body}
                    guide={randomRecipe.guide}
                    region={randomRecipe.region}
                />
            )}
        </SafeAreaView>

    )
}

export { Random }
