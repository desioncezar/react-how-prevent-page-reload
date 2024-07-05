import React from 'react';

// Components
import HookDecision from '../components/HookDecision';

const Home = () => {
   
    return (
        <>
            <HookDecision />
        </>
    );
};

export default React.memo(Home);