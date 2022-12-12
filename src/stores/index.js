import { writable } from "svelte/store";

let choi = { name: "choi", age: 20 }

export const info = writable(choi)