import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
 
          <div className='flex items-center'>
        <img src={USER_ICON} className='h-8'/>
        <span className='text-sm font-bold p-1'>{name}</span>
        <span className='text-sm'>{message}</span>
        </div>
  )
}

export default ChatMessage