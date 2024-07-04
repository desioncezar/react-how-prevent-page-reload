import React from 'react'

// Components
import Header from '../components/Header';
import HookDropdownDecision from '../components/HookDropdownDecision';
import ClassDropdownDecision from '../components/ClassDropdownDecision';
import QueryDropdownDecision from '../components/QueryDropdownDecision';

const Home = () => {

    return (
        <>
            <Header />

            <HookDropdownDecision />

            <ClassDropdownDecision />

            <QueryDropdownDecision />

        </>
    );
};

export default React.memo(Home);