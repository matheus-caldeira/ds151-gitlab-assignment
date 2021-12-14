import React from 'react'

import { AuthProvider } from './auth'

function Context({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default Context;