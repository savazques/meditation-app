import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import meditationImages from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import { router, useLocalSearchParams } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '@/components/CustomButton'
import { useState, useEffect} from 'react'

const Meditate = () => {
  const { id } = useLocalSearchParams(); 

  const [secondsRemaining, setSecondsRemaining] = useState(10)
  const [isMeditating, setMeditating] = useState(false)

  useEffect (() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      setMeditating(false)
      return;
    }
    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining-1);
      }, 1000)

    }


    return () => {
      clearTimeout(timerId)
    }
  }, [secondsRemaining, isMeditating])


  const formattedTimeMinutes = String(Math.floor(secondsRemaining/60)).padStart(2,'0')
  const formatedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0')


  return (
    <View className='flex-1'>
      <ImageBackground source={meditationImages[Number(id) - 1]} resizeMode='cover' className='flex-1'>
      <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]} >
        <Pressable onPress={() => router.back()} className=' absolute top-16 left-6 z-10'>
          <AntDesign name="leftcircleo" size={24} color="white" />
        </Pressable>
          <View className='flex-1 justify-center'> 
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-blue-800 text-4xl font-rmono">
                {formattedTimeMinutes}:{formatedTimeSeconds}
                </Text>
            </View>
          </View>
          <View className='mb-5'>
            <CustomButton title="Start Meditation" onPress={() => setMeditating(true)} />
            <CustomButton title="Adjust Duration" onPress={() => setMeditating(true)} containerStyles='mt-4'/>

          </View>
      </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate