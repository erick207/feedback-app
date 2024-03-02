// all hooks start by 'use'
import { useState } from "react"

function FeedbackItem() {
  // to change a piece of state we have to call one of the `sets`
  // state in React is inmutable, meaning it has to be reset to be changed
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')

  return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
    </div>
  )
}

export default FeedbackItem
