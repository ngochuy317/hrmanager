import {useEffect, useState, Fragment } from 'react'
import { withAlert } from "react-alert"
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useAlert } from 'react-alert'

function Alerts(props) {
    const alertNew = useSelector(state => state.alert) 
    console.log(alertNew)
    const alert = useAlert()
    useEffect(() => {
        if(alertNew.msg !== null) alert.show(alertNew.msg, {type: alertNew.type})
    },[alertNew])
  return (
    <Fragment/>
  )
}
const mapStateToProps = (state) => ({
    alertRedux: state.alert
})
export default connect(mapStateToProps)(withAlert()(Alerts));
