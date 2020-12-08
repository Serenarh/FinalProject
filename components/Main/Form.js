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
  <button type="submit">Add Book</button>
</form>
`;
