import {FormBuilder} from "./FormBuilder";
import { FieldsProps } from "./types/fields.ts";
import FormBuilderProvider from "./hooks/useFormContext.tsx";


const App = () => {

    const fields: FieldsProps = [
        {
            type: "email",
            accessor: "email",
            label: "Digite seu nome:",
            placeholder: "Qual seu nome?",
        },
        {
            type: "select",
            accessor: "option",
            label:"Selecione uma opção",
            options:[
                {label: "Option1", value: "Value1"},
                {label: "Option2", value: "Value2"},
                {label: "Option3", value: "Value3"},
            ],
        },
        {
            type: "textarea",
            accessor: "description",
            label: "Descriçao:",
            placeholder: "Descrição",
        },
        {
            type: "button",
            label:"Salvar"
        }
    ];

    return (
        <FormBuilderProvider>
            <div style={{padding: "0 10px"}}>
                <h1>Primeiro Formulário</h1>
                <FormBuilder fields={fields}
                             idForm={"teste"}
                />
            </div>
        </FormBuilderProvider>
    );
};

export default App;