import React, { createContext, useState, useMemo } from 'react';

export default function createStateContext(defaultValue) {
    const Context = createContext();

    const OriginalProvider = Context.Provider;

    function Provider(props) {
        const [getter, setter] = useState(defaultValue);
        const value = useMemo(() => [getter, setter], [getter]);
        return (
            <OriginalProvider
                {...props}
                value={value}
            >
            </OriginalProvider>
        );
    }

    Context.Provider = Provider;

    return Context;
}
