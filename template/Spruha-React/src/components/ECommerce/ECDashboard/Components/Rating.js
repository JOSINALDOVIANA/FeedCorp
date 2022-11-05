import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { styled } from '@mui/material/styles';

const StyledRating1 = styled(Rating)({
    ".MuiRating-iconFilled": {
        color: "#36D98D",
    },
});

const labels = {
    1: 'Muito ruim',
    2: 'Ruim',
    3: 'Normal',
    4: 'Bom',
    5: 'Excelente',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export function DisabledRating() {
    const [value, setValue] = React.useState(2); //AQUI MODIFICA O VALOR FIXO DO RATING
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <StyledRating1
                readOnly
                name="hover-feedback"
                value={value}
                fractions={1}
                size="large"
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarOutlineIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ display: 'flex', position:'fixed', ml: 20 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}
