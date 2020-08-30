import generateId from '../generateId';
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
            let index = action.payload.students.findIndex(student => student.id === action.payload.id);
            const newState = {
                ...state,
                students: action.payload.students
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
            return state;
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
                tables: [...state.tables]
            }
            copyState.students = [];
            copyState.tables.push({name: action.payload.name, docRef: action.payload.docRef});
            return copyState;
        case "INITIALIZE_APP":
            const updateState = {
                ...state,
                tables: [...state.tables],
                students: [...state.students],
                tableLength: action.payload.length
            }
            updateState.tables = action.payload;
            //updateState.students = action.payload.students;
            return updateState;
        case "POPULATE_STUDENT_ARRAY":
            const newCopyState = {
                ...state,
                students: [...state.students],
                tables: [...state.tables]
            }
            newCopyState.students = action.payload;
            return newCopyState;
        case "UPDATE_TABLE_LENGTH":
            return {
                ...state,
                tableLength: state.tableLength + 1
            }
        case "CLEAR_STUDENTS_ARRAY":
            const emptyArray = [];
            return {
                ...state,
                students: emptyArray
            }
        default:
            return state;
    }
}

export default AttendanceApp;