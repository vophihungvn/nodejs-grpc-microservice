import React from 'react'
import InboxIcon from 'material-ui-icons/Inbox'
import DraftsIcon from 'material-ui-icons/Drafts'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Done from 'material-ui-icons/Done'
import Delete from 'material-ui-icons/Delete'
import IconButton from 'material-ui/IconButton'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Button from 'material-ui/Button'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'
import {
  addTask
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

  addTask = () => {
    const { description } = this.state
    this.props.addTask({
      description
    })
  }

  render() {
    const props = this.props
    const { tasks = [] } = props
    console.log(tasks)
    return (
      <div>
        <p>Count: {props.count}</p>
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
                  <TableCell>Task</TableCell>
                  <TableCell >Status</TableCell>
                  <TableCell numeric>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map(task => {
                  return (
                  <TableRow >
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell numeric >
                      <IconButton>
                        <Done />
                      </IconButton>
                      <IconButton>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>)
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    
        <p>
          <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
          <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
        </p>
    
        <p>
          <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
          <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
        </p>
    
        <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>        
    
      </div>
    )
  }
}


const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  tasks: state.todo.tasks,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
  addTask
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
