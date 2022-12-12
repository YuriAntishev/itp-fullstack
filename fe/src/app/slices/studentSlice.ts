import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import axios from "axios";

const initialState: {
  studentLoading: boolean;
  studentList: any;
  studentInfo: any;
} = {
  studentLoading: false,
  studentList: null,
  studentInfo: null,
};

export const catMarketSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    studentRequest: (state) => {
      state.studentLoading = true;
    },
    studentSuccess: (state, action) => {
      state.studentLoading = false;
      state.studentList = action.payload;
    },
    studentInfoSuccess: (state, action) => {
      state.studentLoading = false;
      state.studentInfo = action.payload;
    },
    studentFailure: (state, action) => {
      state.studentLoading = false;
    },
  },
});

export const getStudents = (): AppThunk => async (dispatch) => {
  dispatch(studentRequest());
  try {
    const { data } = await axios.get(`http://localhost:8000/students`);
    dispatch(studentSuccess(data));
  } catch (error) {
    return error;
  }
};

export const getSubjectsById = (id: number): AppThunk => async (dispatch) => {
  dispatch(studentRequest());
  try {
    const { data } = await axios.get(`http://localhost:8000/student_info/${id}`);
    dispatch(studentInfoSuccess(data));
  } catch (error) {
    return error;
  }
};

export const { studentRequest, studentSuccess, studentInfoSuccess, studentFailure } =
  catMarketSlice.actions;

export const selectStudentsList = (state: RootState) =>
  state.student.studentList;

export const selectStudentInfo = (state: RootState) =>
  state.student.studentInfo;

export default catMarketSlice.reducer;
