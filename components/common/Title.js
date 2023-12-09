export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`} style={{color:"white"}}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title }) => {
  return <h1 style={{color:"white"}} className="ios">{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className="our-expertise-title" style={{color:"white"}}>{title}</h1>
}
