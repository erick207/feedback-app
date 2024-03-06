import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  // there are other ways of doing the state besides using useState
  // like using reducers but since this is a small app let's keep it simple
  
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])

  return (
    <FeedbackContext.Provider value={{
      feedback,
    }}
    >
    {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext