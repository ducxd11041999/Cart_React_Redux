import React, { Component } from 'react';
import {connect} from 'react-redux'
//import PropTypes from 'prop-types';
import Message from './../components/Message.js'
class MessageContainer extends Component {
    render(){

      var {msg} = this.props;
      return (
           <Message msg = {msg}/>        
        );
    }
}

//MessageContainer.propTypes = { msg: PropTypes.string.isRequired }

const mapStateToProps = (state) =>
{
    return{
        msg: state.msg
  }
}

export default connect(mapStateToProps, null)(MessageContainer);
