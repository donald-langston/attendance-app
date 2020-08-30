const initialState = {
    tables: [],
    tableLength: 0
}

function tablesReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_TABLE":
            return {
                ...state,
                tables: state.tables.concat([{name: action.payload.name, docRef: action.payload.docRef}])
            }
        case "UPDATE_TABLE_LENGTH":
                    return {
                        ...state,
                        tableLength: state.tableLength + 1
                    }
        default:
            return state;
    }
}
