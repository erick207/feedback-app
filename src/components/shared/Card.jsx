function Card({children, reverse}) {
  // Conditional class
  /* return <div className={`card ${reverse && 'reverse'}`}>{children}</div> */

  // Conditional style, both methods are equivalent. This one makes the CSS redundant as it is now inline
  return ( 
    <div className="card" 
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
      }}>
        {children}
    </div>
  )
}

export default Card
