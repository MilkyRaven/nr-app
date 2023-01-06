import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Category Card */}
            <CategoryCard imgUrl='https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vegan-kebabs-3322e41.jpg' title="testing" />
            <CategoryCard imgUrl='https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vegan-kebabs-3322e41.jpg' title="testing" />
            <CategoryCard imgUrl='https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vegan-kebabs-3322e41.jpg' title="testing" />
        </ScrollView>
    );
}

export default Categories