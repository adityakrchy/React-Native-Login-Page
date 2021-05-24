import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
const CustomListItems = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri:
                        'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg',
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: 'bold'}}>Youtube Chat</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}
                ellipsizeMode="tail" >This is a test subtitle. For more information, please click on this link.</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}
export default CustomListItems

const styles = StyleSheet.create({})
