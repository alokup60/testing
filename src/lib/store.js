import { writable } from "svelte/store";
export const data = writable({
  name: "",
  speed: "",
  version: 0,
  website: "",
});
