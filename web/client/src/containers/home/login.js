import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    login
} from '../../modules/user'

class EmailDialog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    const props = this.prop
    return (
      <div>
       <Dialog open={this.props.open} onRequestClose={this.handleRequestClose}>
            <DialogTitle>{"Input your id address"}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                    width={200}
                    fullWidth={true}
                />
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={(e) => {
                console.log('click login')
                this.props.login({ email: this.state.email })
            }} color="primary" autoFocus>
                Login
            </Button>
            </DialogActions>
        </Dialog>
    
      </div>
    )
  }
}


const mapStateToProps = state => ({
  tasks: state.todo.tasks,
  open: !state.user.isLogin,
  isLogin: state.user.isLogin,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // changePage: () => push('/about-us'),
  login
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps, null, {
    pure: false
  }
)(EmailDialog)
