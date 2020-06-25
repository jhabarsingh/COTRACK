import React, {useState, useEffect} from 'react'
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchApi } from '../../api'
const CountryPicker = ({handleCountryChange}) => {
    fetchApi()
    const [ fetchCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchCountries(await fetchApi());
        }

        fetchCountries();
    })
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}} >
                <option value='Global'>Global</option>
                {
                    fetchCountries.map((country, i) => <option key={i} value={country} >{ country }</option>)
                }
            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker;