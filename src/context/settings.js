import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
    const show = localStorage.getItem('showCompleted');
    let value = false;
    if (show === "true") {
        value = true;
    }
    const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy"));
    const [itemsPerPage, setItemsPerPage] = useState(localStorage.getItem("itemsPerPage"));
    const [showCompleted, setShowCompleted] = useState(value);

    const state = {
        sortBy,
        setSortBy: setSortBy,
        itemsPerPage,
        setItemsPerPage: setItemsPerPage,
        showCompleted,
        setShowCompleted: setShowCompleted
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;