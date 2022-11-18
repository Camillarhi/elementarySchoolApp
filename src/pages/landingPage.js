import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/banner';
import SubjectTiles from '../components/subjectTiles';
import UserDetails from '../components/userDetails';
import { loadUserData } from '../store/modules/user';

export default function LandingPage() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user?.user);

    useEffect(() => {
        dispatch(loadUserData())
    }, [dispatch]);
    
    return (
        <div>
            <Banner user={user} />
            <UserDetails user={user} />
            <SubjectTiles />
        </div>
    )
}
