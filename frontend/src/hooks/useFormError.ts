import { useState } from 'react';

export type ErrorType = {
  message: string,
  field: string,
}

export type ReturnType = [
  (message: string, field: string) => void,
  (message: string, field: string) => void,
  (field: string) => string[],
]

export default function useFormError(): ReturnType {
  const [errors, setErrors] = useState<ErrorType[]>([]);

  function setNewError(message: string, field: string) {
    if(errors.find((error) => error.message === message && error.field === field)) return;

    setErrors((prevState) => [
      ...prevState,
      {
        message: message,
        field: field,
      },
    ])
  }

  function cleanError(message: string, field: string){
    setErrors((prevState) => prevState.filter((error) => (error.message !== message || error.field !== field)));
  }

  function getErrorsByFieldname(field: string) {
    let errorsByFieldname: ErrorType[] | string[] = errors.filter((error) => error.field === field);
    errorsByFieldname = errorsByFieldname.map((error) => error.message);

    return errorsByFieldname;
  }

  return [setNewError, cleanError, getErrorsByFieldname];
}
