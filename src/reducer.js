import generateId from './generateId';
const initialState = {
    students: [],
    tables: [],
    student: {
        firstName: "",
        lastName: "",
        id: null,
        present: null,
        absent: null
    },
    show: false,
    date: null,
    anotherUser: false,
    tableLength: 0
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
            //if anotherUser is set the add button was clicked in modal
            if(action.payload.anotherUser) {
                copy.anotherUser = true;
            }
            return copy;
        case "SHOW_MODAL":
             return {
                ...state,
                show: true
            }
        case "HIDE_MODAL":
            return {
                ...state,
                show: false,
                anotherUser: false
            }
        case "UPDATE_ATTENDANCE":
            let index = state.students.findIndex(student => student.id === action.payload.id);
            const newState = {
                ...state,
                students: [...state.students]
            }
                   
            if(index !== -1) { 
                if(action.payload.attendance === "present") {
                    newState.students[index].present = true;
                    return newState;
                } else if(action.payload.attendance === "absent") {
                    newState.students[index].absent = true;
                    return newState;
                } else {
                    newState.students[index].present = null;
                    newState.students[index].absent = null;
                    return newState;
                }
            }
            break;
        case "CHANGE_DATE":
            return {
                ...state,
                date: action.payload
            }
        case "ADD_DOC_REF":
            return {
                ...state,
                docRef: action.payload
            }
            case "ADD_TABLE":
                const copyState = {
                    ...state,
                    students: [...state.students],
                    tables: [...state.tables],
                    tableLength: state.tableLength + 1
                }
                // copyState.students = [];
                copyState.tables.push({name: action.payload.name, docRef: action.payload.docRef});
                return copyState;
        default:
            return state;
    }
}

export default AttendanceApp;