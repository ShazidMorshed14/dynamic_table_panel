export const API_URL = "http://localhost:5000/orders";

export const formateDate = (gotDate) => {
  const date = new Date(gotDate);

  const formattedDate = date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    //hour: "numeric",
    //minute: "2-digit",
  });

  return formattedDate;
};
