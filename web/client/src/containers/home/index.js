import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Done from 'material-ui-icons/Done'
import Delete from 'material-ui-icons/Delete'
import IconButton from 'material-ui/IconButton'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Button from 'material-ui/Button'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from './login'

import {
  addTask,
  changeTaskStatus,
  deleteTask,
  getTasks
} from '../../modules/todo'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({
      description: e.target.value
    })
  }

  componentDidMount() {
    if(this.props.isLogin) {
      this.props.getTasks(this.props.userId)
    }
  }

  addTask = () => {
    const { description } = this.state
    const { userId } = this.props
    this.props.addTask({
      description,
      userId
    })
  }

  render() {
    const props = this.props
    const { tasks = [] } = props
    return (
      <div>
        <div style={{maginLeft: 40}}>
          <h1>Todos</h1>
        </div>
        <Card style={{ margin: 40}}>
          <CardContent>
            <TextField
              id="task"
              label="Task"
              value={this.state.description}
              onChange={this.handleChange}
              margin="normal"
              width={200}
              fullWidth={true}
            />
            <Button onClick={this.addTask} dense>Add</Button>
          </CardContent>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell >Status</TableCell>
                  <TableCell numeric>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map(task => {
                  return (
                  <TableRow >
                    <TableCell>{task._id}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell numeric >
                      <IconButton onClick={e => {
                        props.changeTaskStatus(task.id)
                      }} style={{ display: (task.status === 'TODO')? 'inline': 'none' }}>
                        <Done />
                      </IconButton>
                      <IconButton  onClick={e => {
                        props.deleteTask(task.id)
                      }}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>)
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Login />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  tasks: state.todo.tasks,
  isLogin: state.user.isLogin,
  userId: state.user.userId
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // changePage: () => push('/about-us'),
  addTask,
  changeTaskStatus,
  deleteTask,
  getTasks
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps, null, {
    pure: false
  }
)(Home)
