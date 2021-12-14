import React from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Icon, Text, Divider, Button } from 'react-native-elements';

import { useAuth } from '../../context/auth'

import styles from './styles';

function DrawerContent(props) {
  const { user, singOut} = useAuth();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.contentAvatar}>
          <Avatar
            rounded
            size="medium"
            source={{ uri: user.avatar_url }}
          />
          <View >
            <Text h4>{user.name}</Text>
            <Text>@{user.username}</Text>
          </View>
        </View>
        <View style={styles.contentFollwers}>
          <Text h5><Text style={styles.boldText}>{user.following}</Text> Following</Text>
          <Text h5><Text style={styles.boldText}>{user.followers}</Text> Followers</Text>
        </View>
        <View style={styles.contentItems}>
          <DrawerItem 
            label="Profile"
            onPress={() => {props.navigation.navigate('Profile')}}
            icon={({color, size}) => (
              <Icon 
                name="user"
                type='feather'
                color={color}
                size={size}
              />
            )}
          />
        </View>
      </DrawerContentScrollView>
      <Divider orientation="horizontal" />
      <Button
        icon={
          <Icon
            name="log-out"
            type='feather'
            size={15}
            color="white"
          />
          
        }
        type="outline"
        title="Log out"
        onPress={singOut}
      />
    </View>
  );
}

export default DrawerContent;