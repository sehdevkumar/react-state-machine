/* eslint-disable @typescript-eslint/no-explicit-any */
import { assign, createMachine } from 'xstate';

const lightMachine = createMachine({
    id: 'lightMachine',
    initial: 'green',
    context: {
        updated: 10,
    },
    states: {
        green: {
            on: {
                YELLOW: {
                    target: 'yellow',
                    actions: 'updatedAction',
                },
            },
        },
        yellow: {
            on: {
                RED: {
                    target: 'red',
                    actions: 'updatedAction',
                },
            },
        },
        red: {
            on: {
                GREEN: {
                    target: 'green',
                    actions: 'updatedAction',
                },
            },
        },
    },
}, {
    actions: {
        updatedAction: assign({
            updated: (context) => {return context.context.updated +1},
        })
    }
});


export default lightMachine