import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { GetGenres } from "@/utils/GetGenreApi";
import { IGenreOutput } from "@/Types/GetGenreTypes";
import { useSearchBox } from "@/ContextApi/SearchBoxContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "#1C1C1C", // رنگ پس‌زمینه منو
    },
  },
};

export default function BasicSelect({ type }: { type: "movie" | "tv" }) {
  const { selectedGenre, setSelectedGenre } = useSearchBox();
  const [genres, setGenres] = useState<IGenreOutput[]>([]);
  const [selectedId, setselectedId] = useState<number | null>(null);
  useEffect(() => {
    const fetchGenres = async () => {
      const data = await GetGenres({ type: type });
      setGenres(data || []);
    };
    fetchGenres();
  }, [type]);
  const handleChange = (event: SelectChangeEvent<string>) => {
    setselectedId(parseInt(event.target.value, 10));

    const selectedGenre = genres.find((genre) => genre.id === selectedId);
    setSelectedGenre(selectedGenre || null);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="genre-select-label" sx={{ color: "orange" }}>
          Genre
        </InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={selectedGenre?.name}
          label="Genre"
          onChange={handleChange}
          MenuProps={MenuProps}
          sx={{
            color: "white",
            backgroundColor: "#1C1C1C",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "orange",
            },
            "&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "orange", // رنگ border هنگام hover یا focus
              },
          }}
        >
          {/* نمایش هر ژانر در منوی Select */}
          {genres.map((genre) => (
            <MenuItem
              key={genre.id}
              value={genre.id} // استفاده از id به عنوان value
              sx={{
                backgroundColor: "#1C1C1C", // رنگ پس‌زمینه منو آیتم‌ها
                color: "white", // رنگ متن منو آیتم‌ها
                "&.Mui-selected": {
                  backgroundColor: "orange", // رنگ پس‌زمینه آیتم انتخاب شده
                },
                "&:hover": {
                  backgroundColor: "#333", // رنگ پس‌زمینه هنگام hover
                },
              }}
            >
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
