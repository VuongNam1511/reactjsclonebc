import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: [],
    allScheduleTime: [],

    allRequiredDoctorInfor: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        //Genders
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;
            return {
                ...state,
            }

        case actionTypes.FETCH_GENDER_FAILED:

            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state
            }
        //Positions
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state,
            }

        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = [];
            return {
                ...state
            }
        //roles
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state,
            }

        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state
            }

        //CRUD
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.users = action.users;
            return {
                ...state
            }

        case actionTypes.FETCH_ALL_USER_FAILED:
            state.users = [];
            return {
                ...state
            }

        //Doctor of the week
        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state
            }


        case actionTypes.FETCH_TOP_DOCTORS_FAILED:
            state.topDoctors = [];
            return {
                ...state
            }

        //All Doctors
        case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
            state.allDoctors = action.dataDr;
            return {
                ...state
            }


        case actionTypes.FETCH_ALL_DOCTORS_FAILED:
            state.allDoctors = [];
            return {
                ...state
            }

        //FETCH_ALL_CODE_SCHEDULE_TIME
        case actionTypes.FETCH_ALL_CODE_SCHEDULE_TIME_SUCCESS:
            state.allScheduleTime = action.dataTime;
            return {
                ...state
            }


        case actionTypes.FETCH_ALL_CODE_SCHEDULE_TIME_FAILED:
            state.allScheduleTime = [];
            return {
                ...state
            }


        //===

        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS:
            state.allRequiredDoctorInfor = action.data;
            return {
                ...state
            }


        case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED:
            state.allRequiredDoctorInfor = [];
            return {
                ...state
            }


        default:
            return state;
    }
}

export default adminReducer;