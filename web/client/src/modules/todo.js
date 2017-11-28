export const ADD_TASK = 'task/ADD'

const initialState = {
  tasks: [{
    description: 'task mẫu',
    status: 'TODO'
  }]
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TASK: {
      state.tasks.push(action.task)
      return state
    }

    default:
      return state
  }
}

export const addTask = ({ description }) => {
  return dispatch => {
    dispatch({
      type: ADD_TASK,
      task: {
        description,
        status: 'TO-DO'
      }
    })
  }
}
