react-create-state-context
==========================

**React function for simplifying the creation of state contexts**

One of the most common usages of React Contexts is sharing a state. The
`createStateContext` function creates and returns a context with the getter and
the setter of a state as its value. The pair of getter and setter is memoized to
avoid being recreated each time.

Please note that the usage of a state context requires its provider. A call to
`useContext` outside of its provider will return  `undefined`.


Peer dependencies
-----------------

``` json
{
    "react": "^17.0.1"
}
```


Install
-------

With npm:

```
npm install @hashiprobr/react-create-state-context
```

With yarn:

```
yarn add @hashiprobr/react-create-state-context
```

If using Expo, add the module to `webpack.config.js`:

``` js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: [
                '@hashiprobr/react-create-state-context',
            ],
        },
    }, argv);
    return config;
};
```

If `webpack.config.js` does not exist, create it with:

```
expo customize:web
```


Example
-------

``` js
import React, { useContext } from 'react';

import { View, Text, Button } from 'react-native';

import createStateContext from '@hashiprobr/react-create-state-context';

const CounterContext = createStateContext(0);

function MyComponent() {
    const [counter, setCounter] = useContext(CounterContext);

    return (
        <View>
            <Text>{counter}</Text>
            <Button>+</Button>
        </View>
    );
}

function App() {
    return (
        <CounterContext.Provider>
            <MyComponent />
        </CounterContext.Provider>
    );
}
```
