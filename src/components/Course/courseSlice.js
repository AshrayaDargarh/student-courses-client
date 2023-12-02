import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const courseData=[
    {
    id:1,
    thumbnail: 'https://via.placeholder.com/300',
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'A comprehensive course on building mobile apps with React Native.',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      }],
      numberOfVideos:100,
    },
    {
    id:2,
    thumbnail: 'https://via.placeholder.com/300',
    name: 'Introduction to React JS',
    instructor: 'John Doe',
    description: 'A comprehensive course on building Web apps with React.',
    enrollmentStatus: 'Open',
    duration: '8 weeks',
    schedule: 'Mondays and Tuesday, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'ES6 knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React',
        content: 'Overview of React, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First Web App',
        content: 'Creating a simple web app using React components.',
      },
      {
        week: 3,
        topic: 'Building Your First Web App',
        content: 'Creating a simple web app using React components.',
      }
    ],
    numberOfVideos:80,
    }
]

const initialState={
    items:courseData,
    status:'idel'
}

const courseSlice=createSlice({
    name:'course',
    initialState,
    reducers:{},
});

// export const{}=courseSlice.actions;
export default courseSlice.reducer;