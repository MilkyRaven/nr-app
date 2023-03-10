import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat  
}) => {
  return (
   <TouchableOpacity>
    <Image
    source={{
        uri: imgUrl,
    }}
    className='h-36 w-36 rounded-sm'>
    </Image>
    <View className="px-3 pb-4">
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
            <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{rating} </Text> 
                - {genre}</Text>
        </View>
        {/* Location Marker Icon */}
        <View>

        </View>
    </View>
   </TouchableOpacity>
  )
}

export default RestaurantCard