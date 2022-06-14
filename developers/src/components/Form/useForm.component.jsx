import React,{ useState } from 'react';
import styles from './useForm.module.css';

export function useForm(initialValues) {
  
  const [values,setValues] = useState(initialValues);
  
  const handleInputChange = e =>{
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]:value
    })
  }

  return {
    values,
    setValues,
    handleInputChange
  }
}


export function Form(props) {
  return (
    <div className={styles.formDiv}>
      {props.children}
    </div>
  )
}
