import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({product}:ProductProps) {
    const [det, setDet] = useState(false)

    const btnBgClass = det ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border',btnBgClass]
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} width={150} height={150} alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">{product.price} Rub </p>
            <button 
            className={btnClasses.join(' ')} 
            onClick={() =>setDet(!det)}>{det ? 'Hide details': 'Product details'}</button>
            {det && <div><p>{product.description}</p>
            <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p></div>}
        </div>
    )
}