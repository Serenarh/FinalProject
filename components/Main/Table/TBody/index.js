import TRow from "./TRow";
import store from "./store";

const renderRows = (books) => books.map((book) => TRow(book)).join("");

export default () => `
  <tbody>
    ${renderRows(store.data)}
  </tbody>
`;
