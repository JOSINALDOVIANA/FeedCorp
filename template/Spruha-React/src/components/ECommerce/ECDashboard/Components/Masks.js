import React, { Fragment, useState } from "react";
import MaskInput from "react-maskinput";

// CEP MÁSCARA
export function Cepformat() {
    return (
        <Fragment>
            <MaskInput
                alwaysShowMask //Comentando isso ele fica invisível
                className="form-control"
                maskChar="_"
                mask="00000-000"
                size={9}
            />
        </Fragment>
    );
}