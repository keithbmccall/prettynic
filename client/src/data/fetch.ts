/* eslint-disable @typescript-eslint/no-explicit-any */

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};


export const fetchQuery = async (
  query: string,
  variables?: any
): Promise<{ data: any }> => {
  try {
    const response = await fetch("http://localhost:3700/graphql", {
      ...options,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body: JSON.stringify({ query, variables }),
    });
    return await response.json();
  } catch (e: unknown) {
    console.log(`You messed up the query: `, { e });
    return { data: {} };
  }
};
