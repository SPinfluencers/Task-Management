import React from 'react'
import axios from 'axios'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import style from './table.css'

const Country = () => {
    const [data, setData] = React.useState([])
    const [getcountry, setGetCountry] = React.useState()
    const [states, setStates] = React.useState([])

    React.useEffect(() => {
       axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
       .then((res) => {
        // console.log(res)
        setData(res.data)
       }).catch((err) => {
        console.log(err)
       })
    }, [])

    // console.log(data)
   const country = [...new Set(data.map((item) => item.country))]
   country.sort
// console.log(country)
// console.log(data)

const handleCountry = (e) => {
    let states = data.filter (state=> state.country === e.target.value)
    // console.log(states)
    states = [...new Set(states.map((item) => item.subcountry))]
    states.sort()
    // console.log(states)
    setStates(states)
}

  return (
    <div>
        <h1>Countries</h1>
        <div>
            <label>Country :- </label>
            <select onChange={(e) => handleCountry(e)}>
                {country.map((items) =>
                 <option key={items} value={getcountry}>{items}</option> 
                )}
            </select>
        </div>
        <br />
        <br />
        <div>
        <TableContainer className='table'>
                {/* // <h3 key={items}>{items}</h3> */}
                    <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th><h2 style={{color: "red"}}>STATES</h2></Th>
                    </Tr>
                    </Thead>
                    <Tbody className='table1'>
                        {states.map((items) =>
                        <Tr>
                            <Td key={items}>{items}</Td>
                        </Tr>
                        )}
                    </Tbody>
                </Table>
                 
       </TableContainer> 
        </div>
        
    </div>
  )
}

export default Country