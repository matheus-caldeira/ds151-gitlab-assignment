import React from 'react';

import { useAuth } from '../context/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

function Routes() {
  const { signed } = useAuth();

  if (signed)
    return <AppRoutes />
  return <AuthRoutes />
}

export default Routes;