import React, { useState, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import MissionsApi from "../MissionsApi.js";
import { ButtomAdvancedOptions, ButtomSubmit } from "../../../components/buttom/Buttom";
import {
  DataPicker,
  RenderTextField,
  RadioButtonType,
  RadioButtonTypeSent
} from "../../../components/form/Form";
import Grid from "@material-ui/core/Grid";
import { Title } from "../../../components/Title";
import Card from '@material-ui/core/Card';
import { toast } from "react-toastify";

function EditMission({ mission }) {
  const [values, setValues] = useState(mission);
  const [openAdvancedOptions, setAdvancedOptions] = useState(false);
  const [request, setRequest] = useState(false);
  console.log(values)
  function handleClickAdvancedOptions() {
    setAdvancedOptions(!openAdvancedOptions);
  }

  const handleChange = name => event => {
    if (name === "start_time" || name === "end_time") {
      setValues({ ...values, [name]: event });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleChangeRadio = name => event => {
    setValues({ ...values, [name]: event.target.value === "true" ? true : false });
  };

  const putMission = async () => {
    setRequest(true)
    await MissionsApi.putMissionApi(values, values._id).then(res => {
      window.location.reload();
      toast.success("Missão Editada com sucesso!");
    }).catch(error => {
      toast.error("Erro ao editar Missão");
      setRequest(false)
    });
  };

  const advancedOptions = (
    <Fragment>
      <Field
        onChange={handleChangeRadio('is_public')}
        name="is_public"
        component={RadioButtonType}
        checked={values.is_public}
        label="Visibilidade"
        FormControlLabelOne="Público"
        FormControlLabelTwo="Privado" />

      <Field
        onChange={handleChangeRadio('is_grupal')}
        name="is_grupal"
        component={RadioButtonType}
        checked={values.is_grupal}
        label="Grupo"
        FormControlLabelOne="Resposta Individual"
        FormControlLabelTwo="Resposta em grupo" />

      <Field
        onChange={handleChangeRadio('single_answer')}
        name="single_answer"
        component={RadioButtonType}
        checked={values.single_answer}
        label="Único envio"
        FormControlLabelOne="Uma única resposta pode ser enviada"
        FormControlLabelTwo="Várias respostas podem ser enviadas" />
    </Fragment>
  );

  const options = (
    <Fragment>
      <Field
        onChange={handleChangeRadio("has_image")}
        name="has_image"
        component={RadioButtonTypeSent}
        checked={values.has_image}
        label="Imagem"
      />
      <Field
        onChange={handleChangeRadio("has_text")}
        name="has_text"
        component={RadioButtonTypeSent}
        checked={values.has_text}
        label="Texto"
      />
      <Field onChange={handleChangeRadio('has_audio')} name="has_audio" component={RadioButtonTypeSent} checked={values.has_audio} label="Áudio" />
      <Field onChange={handleChangeRadio('has_geolocation')} name="has_geolocation" component={RadioButtonTypeSent} checked={values.has_geolocation} label="Geolocalização" />
      {/*
            <Field onChange={handleChangeRadio('has_video')} name="has_video" component={RadioButtonTypeSent} checked={values.has_video} label="Vídeo" />
            */}
    </Fragment>
  );

  return (
    <Card style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '2%', marginBottom: '2%' }}>
      <Title title="Atualizar missões" />
      <form className='form'>
        <Field
          onChange={handleChange("name")}
          name="name"
          component={RenderTextField}
          type="text"
          label="Nome"
          valueDefault={values.name}
        />
        <Field
          onChange={handleChange("description")}
          name="description"
          component={RenderTextField}
          type="text"
          label="Descrição"
          rows="5"
          valueDefault={values.description}
        />

        <Field
          onChange={handleChange("end_message")}
          name="end_message"
          component={RenderTextField}
          type="text"
          label="Mensagem Final"
          rows="5"
          valueDefault={values.end_message}
        />

        <Field
          onChange={handleChange("lux")}
          name="lux"
          component={RenderTextField}
          type="number"
          label="Experiência"
          valueDefault={values.lux}
        />

        <Field
          onChange={handleChange("resources")}
          name="resources"
          component={RenderTextField}
          type="number"
          label="Lux"
          valueDefault={values.resources}
        />

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Field
            onChange={handleChange("start_time")}
            name="start_time"
            component={DataPicker}
            label={"Data de Início"}
            selectedDate={values.start_time}
            disablePast={false}
          />
          <Field
            onChange={handleChange("end_time")}
            name="end_time"
            component={DataPicker}
            label={"Data de Fim"}
            minData={values.start_time}
            selectedDate={values.end_time}
            disablePast={false}
          />
        </Grid>

        {options}

        <ButtomAdvancedOptions onClick={handleClickAdvancedOptions} />

        {openAdvancedOptions && advancedOptions}

        <ButtomSubmit title={!request ? "Atualizar Missão" : "Atualizando..."} onClick={putMission} disabled={request} />
      </form>
    </Card>
  );
}
export default reduxForm({
  form: "MaterialUiFormEditMission" // a unique identifier for this form
})(EditMission);
