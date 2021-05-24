import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomList from './components/CustomList'

const HomeScreen = ({ navigation }) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Personal Chating App'
        })
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomList />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
