import { useEffect, useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { GetGenres } from "@/utils/GetGenreApi";
import { IGenreOutput } from "@/Types/GetGenreTypes";

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

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
    color: "white",
  };
}

export default function Checkmarks({ type }: { type: "movie" | "tv" }) {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);
  const [Genredata, setGenredata] = useState<IGenreOutput[] | undefined>([]);
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await GetGenres({ type: type });
      setGenredata(data);
    };
    fetchdata();
  }, [type]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, height: 50 }}>
        <InputLabel id="demo-multiple-chip-label" sx={{ color: "orange" }}>
          Genre Select
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Chip"
              sx={{ color: "white" }}
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", overflow: "hidden", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{
                    color: "white",
                    backgroundColor: "#1C1C1C",
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          sx={{
            color: "white",
            backgroundColor: "#1C1C1C",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange", // رنگ حاشیه در حالت هاور
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange", // رنگ حاشیه در حالت فوکوس
            },
          }}
        >
          {Genredata?.map((item) => (
            <MenuItem
              key={item.id} // استفاده از id به عنوان key
              value={item.name} // استفاده از name به عنوان value
              style={getStyles(item.name, personName, theme)}
              sx={{
                backgroundColor: "#1C1C1C",
                "&.Mui-selected": {
                  backgroundColor: "orange", // رنگ پس‌زمینه در حالت انتخاب
                },
              }}
            >
              {item.name} 
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}