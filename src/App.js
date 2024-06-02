import React, { useState } from "react"
import products from "./products.json"
import "./App.css"

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState("")
  const [selectedSeries, setSelectedSeries] = useState("")
  const [selectedproduct, setSelectedProduct] = useState("")

  const getCompanies = products.map((comp) => comp.company)

  const getProductSeries = products
    .filter((serie) => serie.company === selectedCompany)
    .map((s) => s.series)

  const getProducts = products
    .filter((product) => product.series === selectedSeries)
    .map((p) => p.product)

  const getUniqueValue = (companies) => {
    let unique = companies.reduce(function (acc, curr) {
      if (!acc.includes(curr)) acc.push(curr)
      return acc
    }, [])
    return unique
  }

  return (
    <div className="">
      <h2>Product Selection Application</h2>
      <div className="">
        <h4> Select the Company</h4>

        <div>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="form-control"
          >
            <option>Select Company</option>
            {getUniqueValue(getCompanies).map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="">
        <h4>Select Series</h4>
        <div>
          <select
            value={selectedSeries}
            onChange={(e) => setSelectedSeries(e.target.value)}
          >
            <option>Select Series</option>
            {getUniqueValue(getProductSeries).map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="">
        <h4>Select Product</h4>
        <div className="">
          <select
            className="custom-select"
            value={selectedproduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option>Select Product</option>
            {getUniqueValue(getProducts).map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <h3> Your product is : {selectedproduct}</h3>
    </div>
  )
}
