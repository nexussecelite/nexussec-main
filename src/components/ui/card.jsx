// components/ui/card.jsx
import React from 'react'

export const Card = ({ className, ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
  )
}

export const CardHeader = ({ className, ...props }) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
}

export const CardContent = ({ className, ...props }) => {
  return <div className={`p-6 pt-0 ${className}`} {...props} />
}

export const CardFooter = ({ className, ...props }) => {
  return <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
}

export const CardTitle = ({ className, ...props }) => {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
}

export const CardDescription = ({ className, ...props }) => {
  return <p className={`text-sm text-muted-foreground ${className}`} {...props} />
}
