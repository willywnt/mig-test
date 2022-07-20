const formatDate = (date) => {
  let newDate = new Date(date);
  return date.split("T")[0] + '\n' + newDate.toLocaleTimeString();
}

export default formatDate;