import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Color, fetchColors } from "../store/colorSlice";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/searchBar";
import ColorModal from "../components/colorModal";
import ColorsTable from "../components/colorsTable";

const LandingPage = () => {
  const colors = useAppSelector((state) => state.color);
  const [value, setValue] = useState("");

  const [open, setOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<Color | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };

  const filteredColors = colors.colors.filter((color) =>
    color.id.toString().includes(value)
  );

  const handleOpen = (row: Color) => {
    setSelectedItem(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchColors());
  }, []);

  return (
    <Box
      sx={{
        padding: 3,
        gap: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography fontSize={50}>COLORS APP</Typography>
      <SearchBar value={value} handleChange={handleChange} />
      <ColorsTable colors={filteredColors} handleOpen={handleOpen} />
      <ColorModal handleClose={handleClose} item={selectedItem} open={open} />
    </Box>
  );
};

export default LandingPage;
