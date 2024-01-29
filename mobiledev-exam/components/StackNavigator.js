import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { Browse } from '../screens/Browse'
import { Details } from '../screens/Details'
import { Random } from '../screens/Random'
import { Add } from '../screens/Add'
import { About } from '../screens/About'
import { Edit } from '../screens/Edit'

const snav = createStackNavigator()

const StackHome = () => {

    return (

        <snav.Navigator>
            <snav.Screen
                name='stackHome'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <snav.Screen
                name='stackRandom'
                component={Random}
                options={{
                    headerShown: false
                }}
            />
        </snav.Navigator>

    )
}

const StackBrowse = () => {

    return (
    
        <snav.Navigator>
            <snav.Screen
                name='stackBrowse'
                component={Browse}
                options={{
                    headerShown: false
                }}
            />
            <snav.Screen
                name='stackDetails'
                component={Details}
                options={{
                    headerShown: false
                }}
            />
            <snav.Screen
                name='stackEdit'
                component={Edit}
                options={{
                    headerShown: false
                }}
            />
        </snav.Navigator>

    )
}

const StackAdd = () => {

    return (

        <snav.Navigator>
            <snav.Screen
                name='stackAdd'
                component={Add}
                options={{
                    headerShown: false
                }}
            />
        </snav.Navigator>

    )
}

const StackAbout = () => {

    return (

        <snav.Navigator>
            <snav.Screen
                name='stackAbout'
                component={About}
                options={{
                    headerShown: false
                }}
            />
        </snav.Navigator>
        
    )
}

const stackBundle = { StackHome, StackBrowse, StackAdd, StackAbout }

export { stackBundle }
