import React, { useState, useEffect } from 'react';

// Components
import Header from '../components/Header';
//import HookDropdownDecision from '../components/HookDropdownDecision';
//import ClassDropdownDecision from '../components/ClassDropdownDecision';
//import QueryDropdownDecision from '../components/QueryDropdownDecision';
//import HookFormDropdownDecision from '../components/HookFormDropdownDecision';
import PropsDropdownDecision from '../components/PropsDropdownDecision';

const Home = () => {

    const [decisions, setDecisions] = useState([]);

    const getDecision = async () => {
        const response = await fetch('http://127.0.0.1:5000/decision');
        return response.json();
    };

    const postDecision = async (data) => {
        const response = await fetch('http://127.0.0.1:5000/decision', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    };  

    useEffect(() => {
        getDecision().then((data) => {
            setDecisions(data);
        });
    }, []);

    function joinNewDecision(decision) {

        postDecision({ id: decision.id, name: decision.name }).then((data) => {
            setDecisions([...decisions, { data }]);
        });

        console.log(decision);
    }

    return (
        <>
            <Header />

            {/* <HookDropdownDecision /> */}

            {/* <ClassDropdownDecision /> */}

            {/* <QueryDropdownDecision /> */}

            {/* <HookFormDropdownDecision /> */}

            <PropsDropdownDecision
                dataDecision={decisions}
                joinNewDecision={joinNewDecision}
            />
        </>
    );
};

export default React.memo(Home);