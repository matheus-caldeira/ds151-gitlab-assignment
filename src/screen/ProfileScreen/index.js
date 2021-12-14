import React from "react";
import { View, ActivityIndicator } from 'react-native';
import { Image, Text } from 'react-native-elements';

import { useAuth } from '../../context/auth'

import styles from "./styles";

function ProfileScreen() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text h3 style={styles.name}>{user.name}</Text>
      <Image
        source={{ uri: user.avatar_url }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text h5 style={styles.name}>
        Username: {user.username}
      </Text>
      <Text h5 style={styles.name}>
        Public email: {user.public_email}
      </Text>
      <Text h5 style={styles.name}>
        Email: {user.email}
      </Text>
      <Text h5 style={styles.name}>
        Commit email: {user.commit_email}
      </Text>
    </View>
  )
}

export default ProfileScreen;