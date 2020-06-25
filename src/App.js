import React from 'react'
import Cards from './components/cards/Cards'
import Charts from './components/charts/Charts'
import CountryPicker from './components/countrypicker/CountryPicker'
import styles from './App.module.css' 
import { fetchData } from './api'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            country: ''
        }
    }
    
    async componentDidMount() {
        const datas = await fetchData();
        this.setState({ data: datas})
        // console.log(datas)
    }

    handleCountryChange = async (country) => {
        const fetchDatas = await fetchData(country);
        this.setState({
            data: fetchDatas,
            country: country
        })
    }

    render() {
        const {data, country} = this.state;
        return(
            <div className={styles.container} > 
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App;