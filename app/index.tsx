import { View, Text, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import beachImage from '@/assets/meditation-images/beach.webp'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import AppGradient from '@/components/AppGradient'
const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center ">
        <ImageBackground
            source={beachImage}
            resizeMode='cover'
            className='flex-1 w-full'
        >
        
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]} >
        
                <SafeAreaView className='flex-1 px-1 justify-between'>
                  <View>
                    <Text className="text-center text-white font-bold text-4xl">
                      Simple Meditation
                    </Text>
                    <Text className="text-center text-white text-regular text-2xl mt-3 "> Simplify Meditation for Everyone </Text>
                  </View>
                  <StatusBar barStyle={'light-content'}/>
                  <View>
                    <CustomButton
                    onPress={() => router.push('/nature-meditate')}
                    title="Get Started"/>
                  </View>
                </SafeAreaView>
          </AppGradient>
        </ImageBackground>
        
    </View>
  )
}

export default App