import React, { Fragment } from "react";
import MaskInput from "react-maskinput";

// CEP MÁSCARA
export function Cepformat(props) {
    return (
        <Fragment>
            <MaskInput
            {...props}
                //alwaysShowMask //Comentando isso ele fica invisível
                className="form-control"
                maskChar=""
                mask="00000-000"
                size={9}
            />
        </Fragment>
    );
}