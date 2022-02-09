import cookie from "cookie";
import { v4 as uuid } from "@lukeed/uuid";
import type { RequestHandler } from "@sveltejs/kit/types/endpoint";

export const del: RequestHandler = async () => {
  return {
    body: {
      user: null,
    },
    status: 200,
    headers: {
      "set-cookie": cookie.serialize("accessToken", null, {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
      }),
    },
  };
};

export const post: RequestHandler = async ({ request }) => {
  const { email, password } = await request.json();

  if (email !== "joe.bloggs@example.com" || password !== "bacon") {
    return {
      status: 403,
    };
  }

  const user: App.Session["user"] = {
    name: "Joe Bloggs",
    locale: "en-gb",
  };

  return {
    body: {
      user,
    },
    status: 200,
    headers: {
      "set-cookie": cookie.serialize("accessToken", uuid(), {
        path: "/",
        httpOnly: true,
      }),
    },
  };
};
