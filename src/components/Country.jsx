import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Country.module.css'


export function Country({ id, name, continent, flag }) {
  return (
    <div className={styles.cards} key={id}>

     
        <img className={styles.img} 
        src={flag} 
        alt='national-flag'
         />
  

      <div className={styles.textContainer}>

        <Link className={styles.link} to={`/countries/${id}`}>
          <h3 className={styles.country}>{name}</h3>

        </Link>
        
        <h4 className={styles.continent}>{continent}</h4>

      </div>

    </div>
  )
}

