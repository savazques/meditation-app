import { Stack, Slot, SplashScreen } from 'expo-router';
import {useFonts} from 'expo-font'
import { useEffect } from 'react';

// this will prevent the splash screen from auto hiding until loading all font assets
SplashScreen.preventAutoHideAsync(); 

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error
        if (fontsLoaded) SplashScreen.hideAsync(); 
    }, [fontsLoaded, error])


    if (!fontsLoaded) return null;
    if (!fontsLoaded && !error) return null; 
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}} />
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name='meditate/[id]' options={{headerShown:false}} />
            <Stack.Screen name='(modal)/adjust-meditation-duration' options={{headerShown:false, presentation:'modal'}} />

        </Stack>
    )
};

export default RootLayout;
