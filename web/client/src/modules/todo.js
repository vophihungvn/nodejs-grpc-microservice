import { post, get } from '../utils'

export const GET_TASK = 'task/GET'
export const ADD_TASK = 'task/ADD'
export const CHANGE_TASK_STATUS = 'task/STATUS'
export const DELETE_TASK = 'task/DELETE'
const initialState = {
  tasks: [],
  currentIdx: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK: {
      return {
        ...state,
        tasks: action.tasks
      }
    }

    case ADD_TASK: {
      state.tasks.push(action.task)
      return state
    }

    case CHANGE_TASK_STATUS: {
      const { _id } = action
      state.tasks = state.tasks.map(task => {
        if ( task._id === _id ) {
          task.status = 'DONE'
        }
        return task
      })

      return state
    }

    case DELETE_TASK: {
      const { id } = action
      state.tasks = state.tasks.filter(task => {
        return task.id !== id
      })

      return state
    }

    default:
      return state
  }
}

export const getTasks = (userId) => {
  return dispatch => {
    get(`api/todo/${userId}`)
    .then(response => {
      dispatch({
        type: GET_TASK,
        tasks: response.results.objects.todos
      })  
    })
  }
}

export const addTask = ({ description, userId }) => {
  return dispatch => {
    post('api/todo', {
      user: userId,
      description
    }).then((response) => {
      const task = response.results.object
      dispatch({
        type: ADD_TASK,
        task
      })
    })
  }
}

export const changeTaskStatus = (id) => {
  return dispatch => {
    dispatch({
      type: CHANGE_TASK_STATUS,
      id
    })
  }
}

export const deleteTask = (id) => {
  return dispatch => {
    dispatch({
      type: DELETE_TASK,
      id
    })
  }
}