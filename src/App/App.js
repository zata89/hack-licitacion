import React from 'react'
import Filter from '../Components/Filter/Filter'
import FilterTable from '../Components/FilterTable/FilterTable'

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Filter />
                <FilterTable />
            </div>
        )
    }
}

module.exports = App