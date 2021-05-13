import { Grid, Typography } from '@material-ui/core'
import { useFormikContext } from 'formik'
import React from 'react'
import PaymentDetails from './PaymentDetails'
import ProductDetails from './ProductDetails'
import ShippingDetails from './ShippingDetails'

export default function ReviewOrder() {
  // to get all the form values from the first step, we need to find a way to hook into FormikContext to access it's data - useFormikContext() - returns all Formik state and helpers via React Context
  const { values: formValues } = useFormikContext()
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <ProductDetails />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  )
}
