import cookie from "cookie";
import type { GetSession } from "@sveltejs/kit";

const getUserProfile = (accessToken: string): App.Locals["user"] => ({
  accessToken,
  id: 1337,
  locale: "en-gb",
  name: "Joe Bloggs",
});

export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");

  if (cookies.accessToken) {
    event.locals.user = await getUserProfile(cookies.accessToken);
  }

  return await resolve(event);
};

export const getSession: GetSession = (request): App.Session => {
  const { user } = request.locals;

  if (!user) return {};

  return {
    user: {
      name: user.name,
      locale: "en-gb",
    },
  };
};
