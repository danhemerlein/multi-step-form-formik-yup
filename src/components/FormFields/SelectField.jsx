import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import { useField } from 'formik'
import { at } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

function SelectField(props) {
  const { label, data, ...rest } = props
  const [field, meta] = useField(props)
  const { value: selectedValue } = field
  const [touched, error] = at(meta, 'touched', 'error')
  const isError = touched && error && true
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  )
}

SelectField.defaultProps = {
  data: [],
}

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
}

export default SelectField
