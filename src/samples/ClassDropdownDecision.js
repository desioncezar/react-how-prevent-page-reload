import React, { Component } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

export default class ClassDropdownDecision extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decisions: [],
            selectedDecision: '',
            newDecision: ''
        };

        this.onGetDecision = this.onGetDecision.bind(this);

        this.onAddDecision = this.onAddDecision.bind(this);
    }

    // Once the component is mounted on the DOM
    componentDidMount() {
        this.onGetDecision();
        console.log('component Did Mount');
    }

    // Before the component is removed from the DOM
    componentWillUnmount() {
        console.log('component Will Unmount');
    }

    // Update and the component re-renders
    componentDidUpdate() {
        console.log('component Did Update');
    }

    // API GET request
    onGetDecision = () => {

        const getDecision = async () => {
            const response = await fetch('http://127.0.0.1:5000/decision')
            const jsonResponse = await response.json()
            if (jsonResponse) {
                this.setState({ decisions: jsonResponse })
            }
        };

        getDecision();
    };

    // API POST request
    onAddDecision = (e) => {

        e.preventDefault();
        e.stopPropagation();

        if (this.state.newDecision.trim() && !this.state.decisions.find(item => item.name === this.state.newDecision.trim())) {
            let newId = this.state.decisions.length + 1;

            const postDecision = async () => {
                const response = await fetch('http://127.0.0.1:5000/decision', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: newId, name: this.state.newDecision })
                });
                const newDecision = await response.json();
                this.setState(prevState => ({
                    decisions: [...prevState.decisions, newDecision],
                    newDecision: '' 
                }));
            };

            postDecision();
        }
    };

    render() {

        console.log("Array from Render", this.state.decisions)

        return (
            <React.Fragment>

                <div className="px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center">
                    <div className="surface-card border-round shadow-2 p-4">
                        <div className="text-900 font-medium mb-2 text-xl">Class Decisions</div>
                        <p className="mt-0 mb-4 p-0 line-height-3">Add or choose one or more decisions.</p>
                        <div className="flex mb-4 flex-column lg:flex-row">
                            <div className="surface-50 p-6 flex-auto">
                                <div className="text-600 mb-3">New Decision</div>
                                <InputText type="text"
                                    value={this.state.newDecision}
                                    onChange={(e) => this.setState({ newDecision: e.target.value })}
                                    className="border-noround"
                                    style={{ minWidth: "250px", height: "40px" }}
                                    placeholder="Add" />
                                <Button
                                    type="submit"
                                    icon="pi pi-check"
                                    label="Confirm"
                                    className="border-noround"
                                    style={{ height: "40px" }}
                                    onClick={(e) => this.onAddDecision(e)}
                                />
                            </div>

                            <div className="surface-50 p-6 flex-auto">
                                <div className="text-600 mb-3">Select Decision</div>
                                <MultiSelect
                                    value={this.state.selectedDecision}
                                    onChange={(e) => this.setState({ selectedDecision: e.value })}
                                    options={this.state.decisions}
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

            </React.Fragment>
        );
    }
}