import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

const KEY_USER = "@RN:DS151:GITLAB:user"
const KEY_TOKEN = "@RN:DS151:GITLAB:token"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStorageData() {
      const data = await AsyncStorage.multiGet([
        KEY_USER,
        KEY_TOKEN,
      ]);
      const storageUser = data[0][1];
      const storageToken = data[1][1];

      if (storageToken && storageUser) {
        const userCheck = JSON.parse(storageUser)

        if(!userCheck.state) {
          setUser(null)
        } else {
          setUser(userCheck);
          const token = JSON.parse(storageToken);
          api.defaults.headers.Authorization = `Bearer ${token}`;
        }
      }
    }

    loadStorageData();
  }, []);

  const singIn = useCallback(async (token) => {
    const { data } = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(data);
    await AsyncStorage.setItem(KEY_USER, JSON.stringify(data));
    await AsyncStorage.setItem(
      KEY_TOKEN,
      JSON.stringify(token),
    );
  }, []);

  const singOut = useCallback(async () => {
    AsyncStorage.multiRemove([KEY_USER, KEY_TOKEN]);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        singIn,
        singOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
