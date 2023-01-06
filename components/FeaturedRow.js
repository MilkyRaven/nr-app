import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

let pic = "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color={"green"} />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            // Restaurant Cards
            >
                  <RestaurantCard
                      id={123}
                      imgUrl={pic}
                      title="Title"
                      rating={5}
                      genre="Chinese"
                      address="Street x"
                      short_description="description"
                      dishes="dishes"
                      long="long"
                      lat="lat"/>
            </ScrollView>
        </View>
    )
}

export default FeaturedRow