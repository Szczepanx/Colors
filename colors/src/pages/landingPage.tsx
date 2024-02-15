import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchColors } from "../store/colorSlice";

const LandingPage = () => {
  const colors = useAppSelector((state) => state.color);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchColors());
  }, []);

  return (
    <div>
      {colors.colors.map((color) => (
        <p>{color.name}</p>
      ))}
    </div>
  );
};

export default LandingPage;
