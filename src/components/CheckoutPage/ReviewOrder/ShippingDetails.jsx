import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

function ShippingDetails(props) {
  const { formValues } = props
  const classes = useStyles()
  const { firstName, lastName, address1 } = formValues
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant='h6' gutterBottom className={classes.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
      <Typography gutterBottom>{`${address1}`}</Typography>
    </Grid>
  )
}

export default ShippingDetails
