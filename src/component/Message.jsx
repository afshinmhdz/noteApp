
function Message({text,icon,children}) {
  return (
    <p>{icon} {text} {children}</p>
  )
}

export default Message