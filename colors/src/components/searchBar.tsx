import { TextField } from "@mui/material";

type SearchBarType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = (props: SearchBarType) => {
  return (
    <TextField
      label="Search by ID"
      variant="outlined"
      onChange={props.handleChange}
      value={props.value}
    />
  );
};

export default SearchBar;
