import { useState } from 'react';

export type ErrorType = {
  message: string,
  field: string,
}

export type ReturnType = [
  (message: string, field: string) => void,
  (field: string) => string[],
]

export default function useFormError(): ReturnType {
  const [errors, setErrors] = useState<ErrorType[]>([]);

  function setNewError(message: string, field: string): void {
    setErrors((prevState) => [
      ...prevState,
      {
        message: message,
        field: field,
      },
    ])
  }

  function getErrorsByFieldname(field: string) {
    let errorsByFieldname: ErrorType[] | string[] = errors.filter((error) => error.field === field);
    errorsByFieldname = errors.map((error) => error.message);

    return errorsByFieldname;
  }

  return [setNewError, getErrorsByFieldname];
}
