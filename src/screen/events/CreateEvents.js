import React, { useState } from 'react'
import '../../App.css'
import EventsApi from './EventsApi.js'
import Button from '@material-ui/core/Button'
import { RenderTextField, DataPicker } from '../../components/form/Form'

function CreateEventsForm() {

  const [values, setValues] = useState({
    name: '',
    start_date: new Date(),
    end_date: new Date(),
    description: '',
    place: '',
    type: ''
  })

  const handleChange = name => event => {
    if (name === 'start_date' || name === 'end_date') {
      setValues({ ...values, [name]: event })
    } else {
      setValues({ ...values, [name]: event.target.value })
    }
  }

  const postCreateEvents = () => {
    EventsApi.postEventsApi(values).then(res => {
    }).catch(error => {
      console.log(error.response)
    })
  }

  return (

    <form id="form" >
      {/*<Field onChange={handleChange('name')} name="name" component={RenderTextField} type='text' label="Nome" />
      <Field onChange={handleChange('start_date')} name="start_date" component={DataPicker} label={"Data de Início"} selectedDate={values.start_date} />
      <Field onChange={handleChange('end_date')} name="end_date" component={DataPicker} label={"Data de Fim"} minData={values.start_date} selectedDate={values.end_date} />
      <Field onChange={handleChange('description')} name="description" component={RenderTextField} type='text' label="Descrição" />
      <Field onChange={handleChange('place')} name="place" component={RenderTextField} type='text' label="Local" />
      <Field onChange={handleChange('type')} name="type" component={RenderTextField} type='text' label="Tipo" />
      <div></div>
      <Button type="submit" variant="contained" color="primary" disabled={!(buttonSubmitValidate)} onClick={postCreateEvents}> Cadastrar </Button>
*/}
    </form>
  )
}

export default CreateEventsForm;