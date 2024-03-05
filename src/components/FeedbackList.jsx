import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
  if(!feedback || feedback.length === 0) return <p>No feedback yet</p>
  

  return (
  <div className="feedback-list">
    {feedback.map((item) => ( 
      <FeedbackItem 
        key = {item.id} 
        item = {item} 
        handleDelete = {handleDelete} 
      />
    ))}
  </div>
  )
}

// TODO: fix animation
/*  return (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item) => ( 
        <motion.div
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity:0}}
        >
          <FeedbackItem 
            key = {item.id} 
            item = {item} 
            handleDelete = {handleDelete} 
          />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  ) */

FeedbackList.propTypes = {
  // we could simple do:
  // feedback: PropTypes.array
  // but we can also set the shape of the array:
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ),
}

export default FeedbackList
