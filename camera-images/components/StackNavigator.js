import { createStackNavigator } from '@react-navigation/stack';

import Home from './../screens/Home.js';
import Explore from './../screens/Explore.js';
import Upload from './../screens/Upload.js';
import Details from './../screens/Details.js';
import Info from './../screens/Info.js';


const Stack = createStackNavigator();    


const StackHome = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='stackHome'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};


export { StackHome };


const StackExplore = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='stackExplore'
                component={Explore}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='stackDetails'
                component={Details}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator> 
    );
};


export { StackExplore };


const StackUpload = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='stackUpload'
                component={Upload}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator> 
    );
};


export { StackUpload };


const StackInfo = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='stackInfo'
                component={Info}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator> 
    );
};


export { StackInfo };