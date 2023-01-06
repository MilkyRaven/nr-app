import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from 'react';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from "react-native-heroicons/outline";
import Categories from '../../components/Categories';
import FeaturedRow from '../../components/FeaturedRow';

let mainColor = "#6AC284";
let pic = "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">

            {/* Header */}
            <View className="flex-row pb-3 pt-4 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574'
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color={mainColor}></ChevronDownIcon>
                    </Text>
                </View>
                <UserIcon size={35} color={mainColor}></UserIcon>
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" />
                    <TextInput
                        placeholder='Find healthy restaurants'
                        keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon color={mainColor}></AdjustmentsVerticalIcon>
            </View>

            {/* Content */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}>

                {/* Categories */}
                <Categories></Categories>
                {/* Featured Rows */}
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="paid placements from out partners"
                >
                </FeaturedRow>

                {/* Tasty Discounts*/}
                <FeaturedRow
                    id="2"
                    title="Featured"
                    description="paid placements from out partners"
                >
                </FeaturedRow>

                {/* Offers near you */}
                <FeaturedRow
                    id="3"
                    title="Featured"
                    description="paid placements from out partners"
                >
                </FeaturedRow>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen