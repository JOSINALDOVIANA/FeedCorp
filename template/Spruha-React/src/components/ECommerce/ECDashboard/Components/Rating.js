import React from "react";
import MUIRating from "@mui/material/Rating";
import ReactRating from "react-rating";
import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CircleIcon from "@mui/icons-material/Circle";


// Teste com o mesmo que tá lá na página só que n aparece a div label-onrate mesmo colocando lá
export function MarcusRating() {

    // const [color, setColor] = useState("#564f74");

    function labeling(rate) {
        let label;
        if (rate <= 0.5) {
            label = "Horrível";
        }
        if (rate > 0.5 && rate < 2) {
            label = "Muito ruim";
        }
        if (rate > 1 && rate <= 2) {
            label = "Ruim";
        }
        if (rate > 2 && rate <= 3) {
            label = "Normal";
        }
        if (rate > 3 && rate <= 4.5) {
            label = "Bom";
        }
        if (rate > 4.5) {
            label = "Excelente";
        }
        document.getElementById("label-onrate").innerHTML = label || "";
    }
    return (
        <div style={{ textAlign: "center" }}>
            <ReactRating
                emptySymbol={
                    <StarOutlineIcon style={{ color: "#aaa", fontSize: 25, margin: 2 }} />
                }
                fullSymbol={
                    <StarRateIcon style={{ color: "#36D98D", fontSize: 25, margin: 2 }} />
                }
                placeholderSymbol={
                    <StarRateIcon style={{ color: "#36D98D", fontSize: 25, margin: 2 }} />
                }
                placeholderRating={0}
                fractions={1}
                onChange={value => alert(value)}
                onHover={rate => labeling(rate)}
            />
            <div id="label-onrate" style={{ height: 20, fontFamily: "Arial" }} />
        </div>
    );
}


// RATING COM AS CARAS
const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: "Very Dissatisfied",
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: "Dissatisfied",
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: "Neutral",
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: "Satisfied",
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: "Very Satisfied",
    },
};

// IconContainer
function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>
        {customIcons[value].icon}
    </span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

//RadioGroupRating
export function RadioGroupRating() {
    return (
        <MUIRating
            className="text-center"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
        />
    );
}

//DisableRating - VOU USAR!!
// export function DisabledRating() {
//     const [value] = React.useState(2);

//     return (
//         <div>
//             <ReactRating name="disabled" value={value} disabled />
//         </div>
//     );
// }

