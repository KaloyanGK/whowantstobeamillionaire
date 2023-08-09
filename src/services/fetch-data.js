export const fetchData = () => fetch("https://opentdb.com/api.php?amount=15&type=multiple")
  .then(data => data.json())