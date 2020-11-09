export type StateType = {
    maxValue: number,
    startValue: number,
    value: number | string,
    error: boolean,
}
type ActionAppReducerType = ReturnType<typeof addMaxValueAC>
    | ReturnType<typeof addMinValueAC>
    | ReturnType<typeof saveValueAC>
    | ReturnType<typeof counterAC>
let initState: StateType = {
    maxValue: 5,
    value: "enter values and press 'set'",
    startValue: 0,
    error: false,
}

export const appReducer = (state = initState, action: ActionAppReducerType) => {
    switch (action.type) {
        case 'ADD_MAX_VALUE':
            return (action.value <= state.startValue || state.startValue < 0)
                ? { ...state, value: "Incorrect value!", maxValue: action.value, error: true }
                : { ...state, value: "enter values and press 'set'", maxValue: action.value, error: false }
        case 'ADD_MIN_VALUE':
            return (action.value < 0 || action.value >= state.maxValue)
                ? { ...state, value: "Incorrect value!", startValue: action.value, error: true }
                : { ...state, value: "enter values and press 'set'", startValue: action.value, error: false }
        case 'SAVE_VALUE':
            return { ...state, value: state.startValue }
        case 'NEW_COUNT':
            return typeof state.value === 'number'
                ? { ...state, value: ++state.value }
                : state
        default: return state
    }
}



export const addMaxValueAC = (value: number) => ({ type: 'ADD_MAX_VALUE', value } as const)
export const addMinValueAC = (value: number) => ({ type: 'ADD_MIN_VALUE', value } as const)
export const saveValueAC = () => ({ type: 'SAVE_VALUE' } as const)
export const counterAC = () => ({ type: 'NEW_COUNT' } as const) 
