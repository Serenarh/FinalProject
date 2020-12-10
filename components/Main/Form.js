export default () => `<form>
  <span>
    <label for="AuthorName">Author's Name</label
    ><input type="text" id="AuthorName" placeholder="Author's Name" name="AuthorName" required />
  </span>
  <span>
    <label for="Title">Book Title</label
    ><input
      type="text" id="Title" placeholder="Title" name="Title"
      required
    />
  </span>
  <span>
    <label for="Genre">Genre</label
    ><input type="text" id="Genre" placeholder="Genre" name="Genre" required />
  </span>
  <span>
    <label for="LiteraryPeriod">LiteraryPeriod</label
    ><input type="text" id="LiteraryPeriod" placeholder="LiteraryPeriod" name="LiteraryPeriod" required />
  </span>
  <span>
    <label for="YearOfPub">YearOfPub</label
    ><input type="number" id="YearOfPub" placeholder="YearOfPub" name="YearOfPub" required />
  </span>
  <button type="submit">Add Book</button>
</form>
`;
