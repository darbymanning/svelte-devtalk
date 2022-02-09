import { browser } from "$app/env";
import { writable } from "svelte/store";

interface User {
  name: string;
  email: string;
}

let user: User = { name: "", email: "" };

if (browser) {
  user = JSON.parse(localStorage.getItem("user")) || user;
}

export const localStorageStore = writable<User>(user);

if (browser) {
  localStorageStore.subscribe((value) => (localStorage.user = JSON.stringify(value)));
}

export default localStorageStore;
