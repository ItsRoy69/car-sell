import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { getAllCars } from '../redux/actions/carsActions';
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd';

const Home = () => {
  const {cars} = useSelector(state=>state.carsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
        dispatch(getAllCars())
    }, [])

  return (
        <DefaultLayout>
            <Row>
                {cars.map(car=>{
                  return <Col lg={5} sm={24} xs={24}>
                    <h3>{car.name}</h3>

                    </Col>
                  })}
          </Row>
        </DefaultLayout>
    )
}

export default Home
