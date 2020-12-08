// TODO: Add 'library/utility' functions here.
import api from "/api";
import store from "/store";

const addBook = async ({
  AuthorName,
  Title,
  YearOfPub,
  Genre,
  LiteraryPeriod,
}) => {
  const { id } = await api.create({
    AuthorName,
    Title,
    YearOfPub,
    Genre,
    LiteraryPeriod,
  });
  store.setData({ id, AuthorName, Title, YearOfPub, Genre, LiteraryPeriod });
  return true;
};

const processForm = (form) => Object.fromEntries(new FormData(form));

// Handler will run any cb necessary after it's done.
export default () =>
  new Promise((resolve, reject) => {
    document.querySelector("form").addEventListener("submit", async (event) => {
      event.preventDefault();
      if (await addBook(processForm(event.target))) {
        resolve();
      }
      reject(new Error("Error adding book!"));
    });
  });
