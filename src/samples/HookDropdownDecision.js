import React, { useState, useEffect } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

const HookDropdownDecision = () => {    

    const [decisions, setDecisions] = useState([]);
    const [selectedDecision, setSelectedDecision] = useState('');
    const [newDecision, setNewDecision] = useState('');

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

    const addDecision = (e) => {

        e.preventDefault();
        e.stopPropagation();

        if (newDecision.trim() && !decisions.find(item => item.name === newDecision.trim())) {
            let newId = decisions.length + 1;
            postDecision({ id: newId, name: newDecision }).then((data) => {
                setDecisions([...decisions, { data }]);
            });           
        }
    };

    useEffect(() => {
        getDecision().then((data) => {
            setDecisions(data);
        });
    }, []);

    return (
        <>

            <div className="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
                <div className="surface-card border-round shadow-2 p-4">
                    <div className="text-900 font-medium mb-2 text-xl">Hook Decisions</div>
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

export default React.memo(HookDropdownDecision);