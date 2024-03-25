import React from "react";
import { Select, MenuItem } from "@mui/material";
import { countries } from "@/utils/countries";

interface CountrySelectType {
  country: any;
  setCountry: any;
}

const CountrySelect = (props: CountrySelectType) => {
  const { country, setCountry } = props;

  return (
    <Select
      value={country}
      onChange={(e) => {
        setCountry(e.target.value);
      }}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      style={{ width: "100%" }}
    >
      {countries.map((country: any) => (
        <MenuItem key={country.code} value={country.code}>
          <img
            src={country.image}
            alt={`Flag of ${country.name}`}
            style={{ marginRight: 8, width: 20, verticalAlign: "sub" }}
          />
          {country.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CountrySelect;
