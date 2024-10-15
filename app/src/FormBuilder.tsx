import React, {useEffect, useState} from "react";
import {Controller, FieldErrors, useForm} from "react-hook-form"

import { FieldsProps } from "./types/fields.ts";
import {Fields} from "./components/fields";

import "./styles/styles.scss"

interface FormBuilderProps<T extends FieldsProps> {
    fields: T;
    // defaultValues?: DefaultValuesProps<T>;
    defaultValues?: any;
    idForm?: string;
    onSubmit?: (data: any) => void;
}
let renderCount = 0;

export function FormBuilder<T extends FieldsProps>(props: FormBuilderProps<T>) {
    renderCount++;

    const {
        fields,
        idForm,
        defaultValues,
    } = props;

    const {
        control,
        handleSubmit,
        reset,
        setValue,
        watch,
    } = useForm({
        // resolver: meta.schema ? yupResolver(meta.schema) : null,
        defaultValues: defaultValues ,
    });

    const onValid = async(args: any) => {
        console.log("onValid ->", args);

        if (props.onSubmit) {
            console.log("uhul");
        }
    }

    const onInvalid =  (err: FieldErrors) => {
        console.log("ERROR", err)
    }

    const renderField = (item: any, field: any) => {
        const fieldProps = {
            config: item,
            field
        }
        switch (item.type) {
            case "text":
            case "number":
            case "email":
                return <Fields.Input {...fieldProps}/>;
            case "textarea":
                return <Fields.Textarea {...fieldProps}/>;
            case "select":
                return <Fields.Select {...fieldProps}/>;
            case "custom":
                return item.render(field);
            default:
                return null;
        }
    };

    useEffect(() => {

        const subscription = watch((formValues) => {
            if (props?.idForm) {
                // console.log(formValues)
            }
            // console.log(formValues)
        });
        return () => subscription.unsubscribe(); // Cleanup on unmount
    }, [watch]);


    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}
              id={idForm}
        >
            {fields.map((item, index) => (
                item.type !== "button" ?
                    <Controller name={item.accessor}
                                control={control}
                                render={({field}) => (
                                    <div key={index} className={"form-field"}>
                                        {item.label &&
                                            <label className={"form-label"} htmlFor={field.name}>
                                                {item.label}
                                            </label>
                                        }

                                        {renderField(item, field)}
                                    </div>
                                )}
                    />
                    :
                    <div key={index}>
                        <button className={item.className || ""}
                                type={"submit"}
                        >
                            {item.label}
                        </button>
                    </div>
            ))}
            {/*<div id="renderCount">Render count {" -> "} {renderCount}</div>*/}
        </form>
    )
}