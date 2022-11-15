export const Planets = (props) => {
  return(  
    <>
      {!props.isGasPlanet ? (
        <h1 key={props.key}> {props.name} </h1>
      ) : (
        <div></div>
      )}
    </>  
    
  )  
}