import React,{ useState, useEffect } from 'react'
import styles from './DevelopersForm.module.css'
import { Grid, TextField} from '@mui/material';
import Paper from '@mui/material/Paper';
import {useForm, Form} from '../../components/Form/useForm.component';

const initialValues = {
    id: 1,
    name: "",
    email:  "",
    phone: "",
    location: "",
    image: "https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg",
    prize: "",
    technologyId: "",
    description: "",
    experience: "",
    language: "",
    linkedin: "https://www.linkedin.com"
}

export default function DevelopersForm() {
    const {
      values,
      setValues,
      handleInputChange
    } = useForm(initialValues)
    

  return (
    <Form>
        <Paper elevation={3}>
          <Grid container className={styles.inputContainer}>
              <Grid className={styles.inputItem}  item>
                <TextField 
                className={styles.inputField}
                name='name'
                variant='outlined'
                label="Name"
                value={values.name}
                onChange={handleInputChange}
                />
              </Grid>
              <Grid item className={styles.inputItem}  >
              <TextField 
                className={styles.inputField}
                name='email'
                variant='outlined'
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                />
              </Grid>
          </Grid>
        </Paper>
    </Form>
  )
}
