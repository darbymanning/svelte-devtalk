import { writable } from "svelte/store";

interface User {
  name: string;
  email: string;
}

const store = writable<User>({
  name: "",
  email: "",
});

export default store;
