import React from "react";
import Rating from "@mui/material/Rating";
import ReactRating from "react-rating";
import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import StarsIcon from "@mui/icons-material/Stars";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CircleIcon from "@mui/icons-material/Circle";

const StyledRating = styled(Rating)({
  ".MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
const StyledRating1 = styled(Rating)({
  ".MuiRating-iconFilled": {
    color: "#faaf00",
  },
});
// CustomizedRating
export function CustomizedRating1() {
  return (
    <div>
      <StyledRating
        defaultValue={3}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </div>
  );
}
// StaticRating:
export function StarRating() {
  return (
    <div><Rating defaultValue={5} max={5} /> </div>
  );
}
// Customizerating:
export function CustomizedRating() {
  return <ReactRating initialRating={2} onChange={(e) => console.log(e)} />;
}
// Radiogroup:
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
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

//RadioGroupRating
export function RadioGroupRating() {
  return (
    <Rating
      className="text-center"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
  );
}

//CutomizedRatings
export function CustomizedRating2() {
  return (
    <div>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </div>
  );
}

// Thumbs-up rating
export function ThumbsUp() {
  return (

    <StyledRating1
      defaultValue={3}
      // precision={0.5}
      icon={<ThumbUpIcon fontSize="inherit" />}
      emptyIcon={<ThumbUpIcon fontSize="inherit" />}
    />
  );
}

//CustomizedRating5
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export function CustomizedRating5() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        fontSize: "10px",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(_event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
//DisableRating
export function DisabledRating() {
  const [value] = React.useState(2);

  return (
    <div>
      <Rating name="disabled" value={value} disabled />
    </div>
  );
}

//multicircle rating
export function MulticircleRating() {
  return (
    <div className="rating-stars block">
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="no-value"
          size="large"
          value={3}
          max={10}
          icon={<CircleIcon fontSize="inherit" />}
          emptyIcon={<CircleIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}

//Rounded star
export function RoundedStarRating() {
  return (
    <Stack spacing={1} className="rating-stars  block my-rating-4">
      <Rating
        name="half-rating"
        value={3}
        precision={0.5}
        size="large"
        icon={<StarsIcon fontSize="inherit" />}
        emptyIcon={<StarsIcon fontSize="inherit" />}
      />
    </Stack>
  );
}
