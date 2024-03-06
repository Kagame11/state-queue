export function getFinalState(baseState, queue) {
    let finalState = baseState;

    for (let update of queue) {
        if (typeof update === 'function') {
            //Apply the updater function.
            finalState = update(finalState);
        } else {
            //replace the next state;
            finalState = update;
        }
    }

    return finalState;
}