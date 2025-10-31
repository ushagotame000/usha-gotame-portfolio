import React from 'react'
import { Project } from '../components/admin/Project'
import ProtectedRoute from '../components/admin/ProtectedRoute'

const page = () => {
  return (
    <>
    <ProtectedRoute>
        <Project/>
    </ProtectedRoute>
    </>
  )
}

export default page