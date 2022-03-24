import React from 'react'
import products from '../../data/products'
import './ProductsList.css'

export default props => {

    const tableItems = products.map((product,i) => {
        return (
            <tr key={product.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{product.id}</td>
                <td colSpan={2}>{product.product}</td>
                <td>{product.price}</td>
            </tr>
        )
    })

    return (
        <div className='ProductsTable'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th colSpan={2}>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        </div>
    )
}