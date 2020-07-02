import generateId from './generateId';
const initialState = {
    students: [],
    student: {
        firstName: "",
        lastName: "",
        id: null,
        present: null,
        absent: null
    },
    show: false
    
}

function AttendanceApp(state = initialState, action) {
    switch(action.type) {
        case "ADD_STUDENT":
            const copy = {
                ...state,
                student: {
                    ...state.student,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    id: generateId(action.payload.firstName[0], action.payload.lastName[0])
                },
                students: [...state.students]
            }
            copy.students.push(copy.student);
            return copy;
        case "SHOW_MODAL":
             return {
                ...state,
                show: true
            }
        case "HIDE_MODAL":
            return {
                ...state,
                show: false
            }
        case "UPDATE_ATTENDANCE":
            let index = state.students.findIndex(student => student.id === action.payload.id);
            const newState = {
                ...state,
                students: [...state.students]
            }
                   
            if(index !== -1 && action.payload.attendance === "present") {
                newState.students[index].present = true;
                return newState;
            }
            if(index !== -1 && action.payload.attendance === "absent") {
                newState.students[index].absent = true;
                return newState;
            }
            if(index !== -1) {
                newState.students[index].present = null;
                newState.students[index].absent = null;
                return newState;
            }
        default:
            return state;
    }
}

export default AttendanceApp;