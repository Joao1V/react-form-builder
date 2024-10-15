import React from "react";

const Input = React.memo((props: any) => {
    const { field, config } = props;

    console.log(`Render ${config.type.toUpperCase() || "text"} ->`, field.name);

    return <input type={config.type || "text"}
                  id={field.name}
                  className={"form-control"}
                  placeholder={config.placeholder || ""}
                  {...field}

    />;
});

export default Input;
