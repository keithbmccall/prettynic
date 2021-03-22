const authors = [
  {
    id: "1",
    firstName: "Nicole",
    lastName: "Wiltshire",
  },
  {
    id: "2",
    firstName: "Keith",
    lastName: "McCall",
  },
];

exports.Authors = {
  authors,
  queries: {
    getAuthors: () => authors,
  },
};
