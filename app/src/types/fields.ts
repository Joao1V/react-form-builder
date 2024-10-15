// ____________Fields

import { DefaultValues as RHFDefaultValues } from "react-hook-form";

interface BaseField {
    accessor: string,
    label?: string;
    required?: boolean;
    errorMessage?: string;
}

interface TextField extends BaseField {
    type: 'text';
    placeholder?: string;
    maxLength?: number;
    pattern?: string;
}

interface CustomField extends BaseField {
    type: 'custom';
    render: (field: any) => JSX.Element;
}

interface TextAreaField extends BaseField {
    type: 'textarea';
    placeholder?: string;
    rows?: number;
}


interface SelectField extends BaseField {
    type: 'select';
    options?: { label: string; value: string }[];
    defaultOption?: string;
}

interface NumberField extends BaseField {
    type: 'number';
    min?: number;
    max?: number;
    step?: number;
}

interface EmailField extends BaseField {
    type: 'email';
    placeholder?: string;
}

interface CheckboxField extends BaseField {
    type: 'checkbox';
    checked?: boolean;
}

interface RadioField extends BaseField {
    type: 'radio';
    options: string[];
    checked?: boolean;
}

interface DateField extends BaseField {
    type: 'date';
    minDate?: string;
    maxDate?: string;
}

interface ButtonField {
    type: 'button';
    label: string;
    className?: string,
}

// Tipos de campos permitidos
export type Field =
    | CustomField
    | TextField
    | TextAreaField
    | SelectField
    | NumberField
    | CheckboxField
    | RadioField
    | DateField
    | ButtonField
    | EmailField;

export type FieldsProps = Field[]

// ____________DefaultValues



// Garante que accessor é string
type FieldWithDefinedAccessor = Field & { accessor: string };

// Crie um tipo para representar os valores padrão dinamicamente
export type DefaultValues<T extends FieldWithDefinedAccessor[]> = {
    [K in T[number]['accessor']]?: any;
};

export type DefaultValuesProps<T extends FieldWithDefinedAccessor[]> = DefaultValues<T> & RHFDefaultValues<DefaultValues<T>>;