import React, { useEffect, } from 'react';
import { fetchAllCustomers } from '../../redux/custumers/asyncActions';
import { useSearch } from '../../hooks/useSearch';
import { ICustomers } from '../../types';
import { selectCustomers } from '../../redux/custumers/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelector';
import CustomersBoard from '../../components/customersBoard';
import User from '../../components/user';

const Home = () => {

    const { customersItems, loading } =
        useAppSelector(selectCustomers);

    const dispatch = useAppDispatch();

    useEffect(() => {

        dispatch(fetchAllCustomers())
    }, [dispatch])

    const { searchValue, onChange } = useSearch()
    const filterCustomers = customersItems.filter((customer: ICustomers) => {
        return customer.name.toLowerCase().includes(searchValue.toLocaleLowerCase())

    })


    return (
        <>
            <User />
            <CustomersBoard loading={loading} filterCustomers={filterCustomers} onChange={onChange} />
        </>
    );
}

export default Home;
