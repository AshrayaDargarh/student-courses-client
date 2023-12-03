import { createSlice } from "@reduxjs/toolkit";

const studentData=[
    {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        watchedVideos:[],
        enrolledCourses:[
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
                    dueDate: '2023-12-15',
                    progress:70,
                    completed:false
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
                  dueDate: '2023-12-15',
                  progress:80,
                  completed:false
                    }
            
        ]
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        enrolledCourses:[
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
                  dueDate: '2023-12-15',
                  progress:90,
                  completed:false
                },  
    ]
        },
]

const initialState={
    items:studentData,
    status:'idel'
}

const studentSlice=createSlice({
    name:'student',
    initialState,
    reducers:{
      completeCourse:(state,action)=>{
        const index=state.items[0].enrolledCourses.findIndex((course)=>course.id===action.payload.id);
        state.items[0].enrolledCourses.splice(index,1,{...action.payload,completed:true,progress:100})
      }
    },
})

export const{completeCourse}=studentSlice.actions;
export default studentSlice.reducer;