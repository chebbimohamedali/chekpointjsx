import React from "react";

function Address(){

  const avenue= "Rue republique"
  const ville= "Mornaguia"
  const codePostal= "1110"
  const gouvernorat= "Mannouba"
  
    return(
<h4> {`${avenue} ${ville} ${codePostal} ${gouvernorat}`}</h4>
    )
}

export default Address;

