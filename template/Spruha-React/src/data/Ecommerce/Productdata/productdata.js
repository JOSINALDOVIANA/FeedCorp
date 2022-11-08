import React, { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import Searchable from "react-searchable-dropdown";

export const Selectoption1 = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const options = [
    { label: "Foot wear", value: "option_1" },
    { label: "Top wear", value: "option_2" },
    { label: "Bootom wear", value: "option_3" },
    { label: "Men's Groming", value: "option_4" },
    { label: "Accessories", value: "option_5" },
  ];
  return (
    <div className="form-group">
      <MultiSelect name="beast" onChange={handleOnchange} options={options} />
    </div>
  );
};
// Selectoption2
export const Selectoption2 = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const options = [
    { label: "Western wear", value: "option_7" },
    { label: "Foot wear", value: "option_1" },
    { label: "Top wear", value: "option_2" },
    { label: "Bootom wear", value: "option_3" },
    { label: "Men's Groming", value: "option_4" },
    { label: "Accessories", value: "option_5" },
    { label: "jewellery", value: "option_6" },
  ];

  return (
    <div className="form-group">
      <MultiSelect name="beast" onChange={handleOnchange} options={options} />
    </div>
  );
};
// Selectoption3
export const Selectoption3 = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };

  const options = [
    { label: "Boys", value: "option_5" },
    { label: "girls", value: "option_1" },
    { label: "Toys", value: "option_2" },
    { label: "Baby Care", value: "option_3" },
    { label: "Kids footwear", value: "option_4" },
  ];

  return (
    <div className="form-group">
      <MultiSelect name="beast" onChange={handleOnchange} options={options} />
    </div>
  );
};
// Selectoption4
export const Selectoption4 = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };

  const options = [
    { label: "Laptops", value: "option_1" },
    { label: "Gaming & Accessories", value: "option_2" },
    { label: "Health care Appliances", value: "option_3" },
    { label: "Mobiles", value: "option_4" },
  ];

  return (
    <div className="form-group">
      <MultiSelect name="beast" onChange={handleOnchange} options={options} />
    </div>
  );
};
// Selectoption5
export const Selectoption5 = () => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };

  const options = [
    { label: "Stationery", value: "option_1" },
    { label: "Books", value: "option_2" },
    { label: "Gaming", value: "option_3" },
    { label: "Music", value: "option_4" },
    { label: "Exercise & fitness", value: "option_4" },
  ];

  return (
    <div className="form-group">
      <MultiSelect
        name="beast"
        onChange={handleOnchange}
        options={options}
        chipAlternateText
      />
    </div>
  );
};

// ProductCategory
export default function ProductCategory() {
  return (
    <div >
      <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          {
            value: "",
            label: "Choose One"

          },
          {
            value: "party-wear",
            label: "Party Wear"
          },
          {
            value: "causal-wear",
            label: "Causalwear"
          },
          {
            value: "wedding",
            label: "Wedding"
          },
          {
            value: "festival",
            label: "Fistival"
          },

        ]}
        onSelect={(value) => {
          // // console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
    </div>
  );
}

//
export function BlogpostCategory() {
  return (
    <div >
      <Searchable className="form-control select2"
        value="test"
        placeholder="Category" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[

          {
            value: "fashion",
            label: "Fashion"
          },
          {
            value: "lifestyle",
            label: "Life Style"
          },
          {
            value: "science",
            label: "Science"
          },
          {
            value: "health",
            label: "health"
          },
          {
            value: "humanities",
            label: "humanities"
          },
          {
            value: "business",
            label: "Business"
          },
          {
            value: "marketing",
            label: "Marketing"
          },

        ]}
        onSelect={(value) => {
          // // console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
    </div>
  );
}