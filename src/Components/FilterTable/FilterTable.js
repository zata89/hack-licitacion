import React from 'react'

class FilterTable extends React.Component {
    render(){
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Licitación</th>
                        <th scope="col">Comprador</th>
                        <th scope="col">Costo mínimo</th>
                        <th scope="col">Costo máximo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">GASTOS DE OPERACION PPAM JUNIO 2017</th>
                            <td>Delegación SEDESOL en México</td>
                            <td>$10,000.00</td>
                            <td>$20,000.00</td>
                        </tr>
                        <tr>
                            <th scope="row">GASTOS DE OPERACION PPAM JUNIO 2017</th>
                            <td>Delegación SEDESOL en México</td>
                            <td>$10,000.00</td>
                            <td>$20,000.00</td>
                        </tr>
                        <tr>
                            <th scope="row">GASTOS DE OPERACION PPAM JUNIO 2017</th>
                            <td>Delegación SEDESOL en México</td>
                            <td>$10,000.00</td>
                            <td>$20,000.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = FilterTable