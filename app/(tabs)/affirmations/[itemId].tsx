import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router} from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const AffirmationPractice = () => {

    const {itemId} = useLocalSearchParams(); 
    const [affirmation, setAffirmation] = useState<GalleryPreviewData>(); 
    const [sentences, setSentence] = useState<string[]>([])
    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data; 
            

            const affirmationToStart = affirmationData.find(
                (a) => a.id === Number(itemId) 
            )

            if(affirmationToStart) {
                setAffirmation(affirmationToStart);

                const affirmationArray = affirmationToStart.text.split(".")

                if (affirmationArray[affirmationArray.length-1] === ''){
                    affirmationArray.pop()
                }

                setSentence(affirmationArray)
                return;
            } 
        }  
        
    },[])
    
    return (
        <View className="flex-1">
            <ImageBackground source={affirmation?.image} resizeMode='cover' className='flex-1 w-full'>
                <AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}>
                    <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
                        <AntDesign name="leftcircleo" size={24} color='white'/>
                    </Pressable>
                    <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                        <View className='h-full justify-center'>
                            <View className='h-4/5 justify-center'>
                                {sentences.map((sentence, idx) => 
                                    <Text key={idx} className='text-white text-3xl font-bold mb-12 text-center'>
                                        {sentence}.
                                    </Text>
                                )}

                            </View>
                        </View>
                    </ScrollView>
                </AppGradient>
            </ImageBackground>
        </View>
  )
}

export default AffirmationPractice