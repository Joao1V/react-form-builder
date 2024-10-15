import * as React from "react";
import {FormBuilderContext} from "./useFormContext.tsx";


export const useFormBuilder = () => {
    return React.useContext(FormBuilderContext);
};