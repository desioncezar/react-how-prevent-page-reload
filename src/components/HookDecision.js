import React, { useState, useEffect, useCallback } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

// Server Side Api
import {
    getDecision,
    postDecision
} from './Apis';

const HookDecision = () => {

    const [decisions, setDecisions] = useState([]);
    const [selectedDecision, setSelectedDecision] = useState('');
    const [newDecision, setNewDecision] = useState('');    

    //useCallback: Memoize updateDecision to prevent unnecessary re-renders.
    const updateDecision = useCallback(() => {
        getDecision().then(
            (response) => {
                if (response && !areArraysEqual(response, decisions)) {
                    setDecisions(response);
                }
            }
        );
    }, [decisions]);

    // Update state only if necessary: In updateDecision, only update the 
    // state if the new decision is different from the current state.
    useEffect(() => {
        updateDecision();
    }, [updateDecision]);
    
     // Add new decision
    const addDecision = (e) => {

        // Prevent refreshing of the page
        e.preventDefault();
       
        if (newDecision.trim() && !decisions.find(item => item.name === newDecision.trim())) {
            let newId = decisions.length + 1;
         
            // API post request
            postDecision({ id: newId, name: newDecision }).then(() => {               
                updateDecision();
            });
            setNewDecision('');
        }
    };

    // ArraysEqual function: This function checks if two arrays of objects are equal by comparing 
    // their lengths and elements.
    const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].id !== arr2[i].id || arr1[i].name !== arr2[i].name) return false;
        }
        return true;
    };

    console.log(decisions);

    return (
        <>

            <div className="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
                <div className="surface-card border-round shadow-2 p-4">
                    <div className="text-900 font-medium mb-2 text-xl">Hook Decisions with React.JS</div>
                    <p className="mt-0 mb-4 p-0 line-height-3">Add or choose one or more decisions.</p>
                    <div className="flex mb-4 flex-column lg:flex-row">

                        <div className="surface-50 p-6 flex-auto">
                            <div className="text-600 mb-3">New Decision</div>
                            <InputText type="text"
                                value={newDecision}
                                onChange={(e) => setNewDecision(e.target.value)}
                                className="border-noround"
                                style={{ minWidth: "250px", height: "40px" }}
                                placeholder="Add" />
                            <Button
                                type="submit"
                                icon="pi pi-check"
                                label="Confirm"
                                className="border-noround"
                                style={{ height: "40px" }}
                                onClick={(e) => addDecision(e)}
                            />
                        </div>

                        <div className="surface-50 p-6 flex-auto">
                            <div className="text-600 mb-3">Select Decision</div>
                            <MultiSelect
                                value={selectedDecision}
                                onChange={(e) => setSelectedDecision(e.value)}
                                options={decisions}
                                optionLabel="name"
                                placeholder="Choose"
                                maxSelectedLabels={0}
                                className="border-noround"
                                style={{ minWidth: "250px", height: "40px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default React.memo(HookDecision);