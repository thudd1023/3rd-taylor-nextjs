"use client";

import { useSyncExternalStore } from "react";
import { UTM_KEYS, type Utm } from "@/lib/utm";

const STORAGE_KEY = "utm-params";
const EMPTY = JSON.stringify(
  Object.fromEntries(UTM_KEYS.map((k) => [k, ""])),
);

function snapshot() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) ?? EMPTY;
  } catch {
    return EMPTY;
  }
}

const subscribe = () => () => {};

// UTM values captured from the landing URL (see UtmCapture), "" when absent.
export function useUtm(): Utm {
  const raw = useSyncExternalStore(subscribe, snapshot, () => EMPTY);
  return JSON.parse(raw) as Utm;
}

// Drop inside a native <form> to submit the UTMs as hidden fields.
export function UtmHiddenFields() {
  const utm = useUtm();
  return (
    <>
      {UTM_KEYS.map((k) => (
        <input key={k} type="hidden" name={k} value={utm[k]} />
      ))}
    </>
  );
}
