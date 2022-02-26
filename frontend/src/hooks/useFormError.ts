import { useState } from 'react';

export type ErrorType = {
  message: string,
  field: string,
}

function useFormError() {
  const [errors, setErrors] = useState<ErrorType[]>([]);

  function setNewError(message: string, field: string) {
    setErrors((prevState) => [
      ...prevState,
      {
        message: message,
        field: field,
      },
    ])
  }

  return [errors, setNewError];
}

export default useFormError;
