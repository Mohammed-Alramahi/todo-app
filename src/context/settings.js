import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
    const [sortBy, setSortBy] = useState('Easiest');
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [showCompleted, setShowCompleted] = useState(false);

    const state = {
        sortBy,
        setSort: setSortBy,
        itemsPerPage,
        setItem: setItemsPerPage,
        showCompleted,
        setShow: setShowCompleted
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;