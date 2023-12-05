export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`} style={{color:"white"}}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 style={{color:"white",fontSize:"2rem"}}>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`} style={{color:"white"}}>{title}</h1>
}
