import { Context, Book } from 'lib/types';

const books: Book[] = [
  {
    name: 'John',
    title: 'One Zero'
  },
  {
    name: 'John',
    title: 'Paper Towel'
  },
  {
    name: 'John',
    title: 'Harry Potter'
  },
  {
    name: 'Mary',
    title: 'Quantum mechanics'
  }
];

export const bookResolvers = {
  Query: {
    books: async (_: undefined, __: undefined, ctx: Context) => {
      return books.filter(book => book.name === ctx.user?.name);
    }
  }
};
