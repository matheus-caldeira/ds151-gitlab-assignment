import React, { useRef, useState, useCallback } from "react";
import { View } from 'react-native'
import { Input, Button } from 'react-native-elements';

import { useAuth } from '../../context/auth'

import styles from "./styles";

function SignInScreen() {
  const tokenRef = useRef();
  const { singIn } = useAuth();
  const [request, setRequest] = useState({
    loading: false,
    error: false,
  })

  const handle = useCallback(async () => {
    setRequest({
      loading: true,
      error: false,
    })
    try {
      await singIn(tokenRef.current)
    } catch {
      setRequest({
        loading: false,
        error: true,
      })
    }
  }, []);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Access token"
        leftIcon={{ type: 'feather', name: 'lock' }}
        secureTextEntry={true}
        label="Access Token"
        onChangeText={text => tokenRef.current = text}
        errorStyle={{ color: 'red' }}
        errorMessage={request.error ? "Invalid token" : ""}
      />
      <Button
        title="Login"
        type="outline"
        onPress={handle}
      />
    </View>
  )
}

export default SignInScreen;