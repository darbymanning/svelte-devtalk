import { GraphQLClient } from "graphql-request";
import { getSdk } from "$lib/queries/schema";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const endpoint = "https://api-eu-west-2.graphcms.com/v2/ckzffw3mn0ay001xk37xf30tg/master";
  const client = new GraphQLClient(endpoint);
  const data = getSdk(client);

  const variables = { id: "ckadqgca800ix011230ailipe" };
  const { author } = await data.author(variables);

  return {
    body: {
      author,
    },
  };
};
