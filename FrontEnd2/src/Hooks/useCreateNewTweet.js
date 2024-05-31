import { KeyboardEvent, useState } from 'react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  newTweet: z
    .string()
    .trim()
    .max(280, 'Máximo 280 caracteres para um tweet ')
    .min(3, 'Mínimo 3 caracteres para um tweet ')
})




export const useCreateNewTweet = (tweetsExisting) => {
  const [tweets, setTweets] = useState(tweetsExisting)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  const createNewTweet = (data) => {
    setTweets([data.newTweet, ...tweets])
    data.newTweet = ''
  }

  const handleHotKeySubmit = (event, data) => {
    if (event?.key === 'Enter' && (event?.ctrlKey || event?.metaKey)) {
      setTweets([data.newTweet, ...tweets])
      data.newTweet = ''
    }
  }

  return {
    tweets,
    createNewTweet,
    handleHotKeySubmit,
    register,
    handleSubmit,
    errors
  }
}
