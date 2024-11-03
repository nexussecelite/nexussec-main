// components/ui/alert.jsx
import React from 'react'

export const Alert = ({ className, ...props }) => {
  return (
    <div
      role="alert"
      className={`relative w-full rounded-lg border p-4 ${className}`}
      {...props}
    />
  )
}

export const AlertTitle = ({ className, ...props }) => {
  return (
    <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`} {...props} />
  )
}

export const AlertDescription = ({ className, ...props }) => {
  return (
    <div className={`text-sm opacity-90 ${className}`} {...props} />
  )
}
