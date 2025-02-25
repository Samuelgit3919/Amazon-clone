// import React from 'react'

import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import { useParams } from "react-router-dom"
import axios from "axios"
import { productUrl } from "../../Api/endPoints"
import ProductCard from "../../components/Product/ProductCard"
const Results = () => {
    const [result, setResult] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        axios.get(`${productUrl}/category/${categoryName}`)
            .then((res) => {
                console.log(res); //  
                setResult(res.data)
            }
            ).catch((err) => {
                console.log(err)
            })
    },
        [categoryName])

    return (
        <Layout>
            <div>
                {
                    result.map((product) => (
                        <ProductCard key={product._id} data={product}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Results