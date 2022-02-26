import { ReactNode } from 'react';

type FormGroupType = {
  children: ReactNode;
  error: string[] | undefined;
};

export default function FormGroup({ children, error }: FormGroupType) {
  return (
    <label>
      {children}
      {error && error.map((error) => <div key={error} className="error">{error}</div>)}
    </label>
  );
}
