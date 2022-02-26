import { useState } from 'react';

export type ErrorType = {
  message: string,
  field: string,
}

export type ReturnType = [
  (message: string, field: string) => void,
  (message: string) => void,
  (field: string) => string[],
  () => boolean,
]

export default function useFormError(): ReturnType {
  const [errors, setErrors] = useState<ErrorType[]>([]);

  function setNewError(message: string, field: string) {
    if(errors.find((error) => error.message === message && error.field === field)) return;

    cleanErrors(field);

    setErrors((prevState) => [
      {
        message: message,
        field: field,
      },
      ...prevState,
    ])
  }

  function cleanErrors(field: string){
    setErrors((prevState) => prevState.filter((error) => error.field !== field));
  }

  function getErrorsByFieldname(field: string) {
    let errorsByFieldname: ErrorType[] | string[] = errors.filter((error) => error.field === field);
    errorsByFieldname = errorsByFieldname.map((error) => error.message);

    return errorsByFieldname;
  }

  function isThereAnyError() {
    if(errors.length === 0) {
      return false;
    }

    return true;
  }

  return [setNewError, cleanErrors, getErrorsByFieldname, isThereAnyError];
}
