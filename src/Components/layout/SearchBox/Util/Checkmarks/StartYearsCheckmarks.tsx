import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSearchBox } from "@/ContextApi/SearchBoxContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "#1C1C1C",
    },
  },
};

export default function StartYearCheckmarks() {
const {handleChangeStartYear,selectedYear,startYear}=useSearchBox();

  return (
    <div className="w-[32%] flex">
      <Box className="w-full">
        <FormControl fullWidth>
          <InputLabel id="StartYear-select-label" sx={{ color: "orange" }}>
            StartYear
          </InputLabel>
          <Select
            labelId="StartYear-select-label"
            id="StartYear-select"
            value={selectedYear}
            label="StartYear"
            onChange={handleChangeStartYear}
            MenuProps={MenuProps}
            sx={{
              color: "white",
              backgroundColor: "#1C1C1C",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "orange",
              },
              "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "orange",
                },
            }}
          >
            {startYear.map((item) => (
              <MenuItem
                key={item.id}
                value={item.value.toString()}
                sx={{
                  backgroundColor: "#1C1C1C",
                  color: "white",
                  "&.Mui-selected": {
                    backgroundColor: "orange",
                  },
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                {item.startYear}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}