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

export default function LanguageCheckmarks() {
 const {LanguageSelected,handleChangelanguage}=useSearchBox();
  const language = [
    { id: 1, value: "en", Language: "English" },
    { id: 2, value: "fa", Language: "Persian" },
    { id: 3, value: "es", Language: "Spanish" },
    { id: 4, value: "zh", Language: "Chinese" },
    { id: 5, value: "fr", Language: "French" },
    { id: 6, value: "ko", Language: "Korean" },
    { id: 7, value: "ja", Language: "Japanese" },
    { id: 8, value: "de", Language: "German" },
    { id: 9, value: "it", Language: "Italian" },
    { id: 10, value: "ru", Language: "Russian" },
    { id: 11, value: "hi", Language: "Hendi" },
  ];

  return (
    <div className="w-3/12 flex">
      <Box className="w-full">
        <FormControl fullWidth>
          <InputLabel id="Language-select-label" sx={{ color: "orange" }}>
            Language
          </InputLabel>
          <Select
            labelId="Language-select-label"
            id="Language-select"
            value={LanguageSelected}
            label="Language"
            onChange={handleChangelanguage}
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
            {language.map((item) => (
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
                {item.Language}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};