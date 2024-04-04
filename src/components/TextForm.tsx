import "../App.css";
import React from "react";
import TextField from "@mui/material/TextField";
import { TextProps } from "../utils/types";

export default function TextInput({
  page: fieldNumber,
  setPage,
  label,
}: TextProps) {
  const isError = fieldNumber < 1 || !fieldNumber;
  return (
    <div>
      <TextField
        error={isError}
        helperText={isError ? "Number must be more than 0 " : ""}
        required
        inputProps={{ min: 1 }}
        type="number"
        sx={{ width: 140, margin: 1 }}
        id="outlined-controlled"
        label={label}
        value={fieldNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPage(event.target.valueAsNumber);
        }}
      />
    </div>
  );
}
