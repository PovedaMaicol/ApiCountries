import React from 'react'

export const CountryCard = ({country}) => {
  console.log(country);
  
  return (
    <article>
<header>
    <img 
    src={country?.flags.svg}
    // src={country?.name.common} 
    alt={country?.flags.alt} 
    />

</header>
    <h2>{country?.name.common}</h2>
<ul>
    <li>Capital: {country?.capital}</li>
    <li>Población: {country?.population}</li>
    <li>Continente:{country?.continents}</li>
    <li>Area:{country?.area}</li>

</ul>
 


    </article>
  )
}


export default CountryCard;