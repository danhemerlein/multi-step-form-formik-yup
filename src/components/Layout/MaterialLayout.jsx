import { CssBaseline, Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { theme, useStyle } from './styles'
export default function MaterialLayout(props) {
  const { children } = props
  const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <Footer />
    </ThemeProvider>
  )
}
