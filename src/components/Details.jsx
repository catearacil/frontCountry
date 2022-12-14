import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryDetails, Vacio} from '../actions'
import { Link } from 'react-router-dom'
import styles from './Details.module.css'

export default function Details({ country  }) {
  const dispatch = useDispatch() //a este hook le pasamos el "nombre" de la store 
  const details = useSelector((state) => state.countryDetail) //este hook nos permite "recuperar" dato campo o atributo... es un amigazo del store

  useEffect(() => { //el componente tiene que hacer algo luego de renderizarse en este caso invoco a los detalles de los paises
    dispatch(getCountryDetails(country))

    return ()=>{
      dispatch(Vacio())
    }
 
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <div className={styles.imgContainer}>
          <img alt='flag' src={details.flag} className={styles.img} />
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.title}>
            {details.name} ({details.id})
          </h1>

          <h2 className={styles.subtitle}>
            {details.continents}
            {details.subregion ? ' | ' + details.subregion : null}
          </h2>

          <h4>Capital: {details.capital}</h4>

          <h4>Population: {details.population}</h4>

          <h4>Area: {details.area} km²</h4>

          <h4 className={styles.activities}>Activities:</h4>
          <ul>
            {details.activities &&
              details.activities.map((act) => (
                <li key={act.id}>
                  <p>
                    <strong>{act.name}</strong> ({act.season}) | Duration:{' '}
                    {act.duration} HS - Difficulty: {act.difficulty}
                  </p>
                </li>
              ))}
          </ul>

          <Link to='/countries'>
            <button className={styles.btn}>Go back at Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}