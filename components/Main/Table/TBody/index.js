import TRow from "./TRow";

// ⚠️ Use '/' for Parcel absolute paths
// https://parceljs.org/module_resolution.html#absolute-paths
import store from "/store";

const renderRows = (books) => books.map((book) => TRow(book)).join("");

export default () => `
  <tbody>
    ${renderRows(store.data)}
  </tbody>
`;
