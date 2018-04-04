import React from 'react'

class Filter extends React.Component {
    render(){
        return (
            <div className='jumbotron'>
                <form id='filter-form'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-12'>
                            <label htmlFor='tender-name'>Licitacion</label>
                            <input id='tender-name' />
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <label htmlFor='buyer-name'>Comprador</label>
                            <input id='buyer-name' />
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <label htmlFor='min-cost'>Costo mínimo</label>
                            <input id='min-cost' />
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <label htmlFor='max-cost'>Costo máximo</label>
                            <input id='max-cost' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

module.exports = Filter