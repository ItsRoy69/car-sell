import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'

const Home = () => {
  const {cars} = useSelector(state=>state.carsReducer)
  return (
        <DefaultLayout>
            <h1>Home</h1>
            <h1>Lenght of {cars.length}</h1>
        </DefaultLayout>
    )
}

export default Home
