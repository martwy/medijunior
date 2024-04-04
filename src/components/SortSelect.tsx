import "../App.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SortProps, Sort } from "../utils/types";

export default function SelectLabels({ sort, setSort }: SortProps) {
  return (
    <div id="Custom-inputs">
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ minWidth: 120, margin: 1 }}>
            <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={sort}
              label="sort"
              onChange={(event) => setSort(event.target.value as Sort)}
            >
              <MenuItem value={Sort.popular}>popular</MenuItem>
              <MenuItem value={Sort.activity}>activity</MenuItem>
              <MenuItem value={Sort.name}>name</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
