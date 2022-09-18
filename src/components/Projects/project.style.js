const flexProperties = { base: "column", sm: "column", lg: "row", md: "row" };
export const main_flex_style = {
  //   border: "1px solid red",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  padding: "2rem 1rem",
  margin: "3rem auto",
  gap: "3rem",
  transition: "all 0.2s ease-out",
  textAlign: {
    base: "center",
    lg: "left",
    md: "center",
    sm: "center",
  },
  alignItems: "center",
  flexDirection: { ...flexProperties },
  _hover: {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
};

export const desc_text_style = {
  margin: "1rem 0",
  width: { base: "95%", lg: "70%", md: "80%" },
};

export const center_flex = {
  base: "center",
  lg: "flex-start",
  md: "center",
};
