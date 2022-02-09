/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
  interface Locals {
    user?: {
      accessToken: string;
      id: number;
      locale: import("$lib/i18n/i18n-types").Locales;
      name: string;
    };
  }

  // interface Platform {}

  interface Session {
    user?: {
      name: string;
      locale: import("$lib/i18n/i18n-types").Locales;
    };
  }

  // interface Stuff {}
}
