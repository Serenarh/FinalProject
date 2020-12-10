export default ({
  id,
  AuthorName,
  Title,
  Genre,
  LiteraryPeriod,
  YearOfPub,
}) => `
  <tr>
    <td>${id}</td>
    <td>${AuthorName}</td>
    <td>${Title}</td>
    <td>${Genre}</td>
    <td>${LiteraryPeriod}</td>
    <td>${YearOfPub}</td>
  </tr>
`;
