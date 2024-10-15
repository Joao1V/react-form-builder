import React, { useState, ReactNode } from "react";

import { FormBuilderContextProps } from "../types/form.ts";

export const FormBuilderContext = React.createContext<FormBuilderContextProps | undefined>(undefined);

export default function FormBuilderProvider({ children }: { children: ReactNode }) {
    const [cachedForms, setCachedForms] = useState<{ [key: string]: any }>({});

    const getDataFormKey = (formKey: string): any => {
        if (formKey) {
            if (cachedForms[formKey]) {
                return cachedForms[formKey];
            }
        }
        return {};
    };

    const saveInCache = (formKey: string, values: any): void => {
        setCachedForms((prevForms) => ({ ...prevForms, [formKey]: values }));
    };

    const clear = (formKey: string): void => {
        if (formKey) {
            setCachedForms((prevForms) => {
                const updatedForms = { ...prevForms };
                if (updatedForms[formKey]) {
                    delete updatedForms[formKey];
                }
                return updatedForms;
            });
        }
    };

    return (
        <FormBuilderContext.Provider value={{ saveInCache, getDataFormKey, clear }}>
            {children}
        </FormBuilderContext.Provider>
    );
}