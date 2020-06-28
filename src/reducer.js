const initialState = {
    students: [],
    student: {
        firstName: "",
        lastName: ""
    },
    show: false
}

function AttendanceApp(state = initialState, action) {
    let newState = {};
    switch(action.type) {
        case "ADD_STUDENT":
            newState = {
                ...state,
                student: {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName
                }
            }
            newState.students.push(newState.student);
            return newState;
        case "SHOW_MODAL":
             newState = {
                ...state,
                show: true
            }
            return newState;
        case "HIDE_MODAL":
            newState = {
                ...state,
                show: false
            }
            return newState;
        default:
            return state;
    }
}

export default AttendanceApp;