export type FormBuilderContextProps = {
    saveInCache: (formKey: string, values: any) => void;
    getDataFormKey: (formKey: string) => any;
    clear: (formKey: string) => void;
};

export type FormBuilderProps = {
    meta: [],
    defaultValues?: [],

};