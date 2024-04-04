import "../App.css";
import { OrderProps, Order } from "../utils/types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectLabels({ order, setOrder }: OrderProps) {
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ minWidth: 120, margin: 1 }}>
          <InputLabel id="demo-controlled-open-select-label">Order</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            value={order}
            label="sort"
            onChange={(event: SelectChangeEvent) =>
              setOrder(event.target.value as Order)
            }
          >
            <MenuItem value={Order.desc}>desc</MenuItem>
            <MenuItem value={Order.asc}>asc</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
