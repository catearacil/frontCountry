import axios from 'axios'

//acciones Redux como mensajeros que entregan información sobre los eventos que ocurren 
//en tu aplicación al almacén Redux. A continuación, el almacén se encarga de actualizar 
//el estado en función de la acción realizada.


export function getAllCountries() {
  return async (dispatch) => {
    const countries = await axios.get('http://api-country-catearacil.vercel.app/countries')
    return dispatch({
      type: 'GET_COUNTRIES',
      payload: countries.data,
    })
  }
}


export function getCountriesByName(name) {
  return async (dispatch) => {
    try {
      const countriesByName = await axios.get(
        `http://api-country-catearacil.vercel.app/countries?name=${name}`
      )
      return dispatch({
        type: 'GET_COUNTRIES_BY_NAME',
        payload: countriesByName.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getCountryDetails(id) {
  return async (dispatch) => {
    try {
      const details = await axios.get(`http://api-country-catearacil.vercel.app/countries/${id}`)
      return dispatch({
        type: 'GET_COUNTRY_DETAILS',
        payload: details.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function createActivity(details) {
  return async function () {
    const newActivity = await axios.post(
      'http://api-country-catearacil.vercel.app/activity',
      details
    )
    console.log(newActivity)
    return newActivity
  }
}

//---------------------------- FILTRADOS Y ORDENADORES ------------------------------------

export function filterByContinent(payload) {
  return {
    type: 'FILTER_BY_CONTINENT',
    payload,
  }
}



export function setCurrentPage(page){
  return {
    type: 'CURRENT_PAGE',
    payload: page

  }
}



export function filterByActivity(payload) {
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload,
  }
}



export function sort(payload) {
  return {
    type: 'SORT',
    payload,
  }
}

export function Vacio(){
  return{
    type: 'DETAILS_COUNTRY'
  }
}





