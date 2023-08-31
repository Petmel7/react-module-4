import { useReducer } from 'react';

function caunterReducer(state, action) {
    switch (action.type) {
        case 'increment': return { ...state, count: state.count + action.payload };

        case 'decrement': return { ...state, count: state.count - action.payload };

        default: throw new Error(`Unsupord action type ${action.type}`);
    }
};

export default function UseReducerCounter() {
    const [state, dispach] = useReducer(caunterReducer, {
        count: 0
    });

    return (
    
        <div>
            <p>{state.count}</p>
            <button
                type='button'
                onClick={() => dispach({ type: 'increment', payload: 1 })}>Increment
            </button>
            
            <button
                type='button'
                onClick={() => dispach({ type: 'decrement', payload: 1 })}>Decrement
            </button>
        </div>
    );
};