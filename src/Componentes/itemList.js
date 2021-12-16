import React from "react"
import "./item.js"

const itemList = (props) => {



    return(
        <>
        {   props.productsItems.map((product) => {
            return(
                < Item key={product.id} product={product.product}
                />
            )})
    })
        </>
    )
}

export default itemList