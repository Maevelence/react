import { useContext} from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrMsg } from "../components/ErrMsg";
import { Loader } from "../components/Loader";
import { ModWin } from "../components/ModWin";
import { Product } from "../components/Product";
import { useProducts } from "../hooks/useProduct";
import { IProduct } from "../models";
import { ModContext } from "../context/ModContext";

import React from 'react'

export default function ProductPg() {
    const {loading,error,product, addProduct} = useProducts()  
    const {modal,open,close} = useContext(ModContext)
    
    const createHandler = (product: IProduct) => {
      close()
      addProduct(product)
    }
    
    return (
      <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <Loader /> }
        {error && <ErrMsg error={error} />}
        {product.map(product => <Product product={product} key={product.id}/>)}
        {modal && <ModWin title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </ModWin>}
    
        <button className="fixed bottom-3 right-3 rounded-full bg-red-800 text-white text-3xl px-4 py-2"
        onClick={open}>+</button>
        </div>
    )
}

