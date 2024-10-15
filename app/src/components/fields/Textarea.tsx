import React from "react";

const Textarea = React.memo((props: any) => {
    const { field, config } = props;

    console.log("Render TEXTAREA -> ", field.name);

    return <textarea id={field.name}
                     placeholder={config.placeholder || ""}
                     className={config.className || "form-control"}
                     rows={config.rows || 3}
                     {...field}

    />;
});

export default Textarea;
