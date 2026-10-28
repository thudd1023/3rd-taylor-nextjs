import { UTM_KEYS, type Utm } from "@/lib/utm";

type GhlContact = {
  email: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  website?: string;
  title?: string;
  tags?: string[];
  source?: string;
  utm?: Utm;
};

// Creates or updates a GHL contact (matched on email) via the v2 API, using a
// Private Integration token in GHL_API_KEY. Never throws — CRM failures are
// logged so a form submission is never lost to a GHL outage.
export async function upsertGhlContact(tag: string, contact: GhlContact) {
  if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
    console.error(`[${tag}] GHL_API_KEY or GHL_LOCATION_ID missing — skipping CRM sync`);
    return;
  }

  const customFields = contact.utm
    ? UTM_KEYS.filter((k) => contact.utm![k]).map((k) => ({
        key: k,
        field_value: contact.utm![k],
      }))
    : [];

  try {
    const res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      },
      body: JSON.stringify({
        locationId: process.env.GHL_LOCATION_ID,
        email: contact.email,
        firstName: contact.firstName,
        lastName: contact.lastName,
        companyName: contact.companyName,
        website: contact.website,
        title: contact.title,
        tags: contact.tags,
        source: contact.source,
        ...(customFields.length ? { customFields } : {}),
      }),
    });
    if (!res.ok) {
      console.error(`[${tag}] GHL error:`, res.status, await res.text());
    } else {
      console.log(`[${tag}] GHL contact synced:`, contact.email);
    }
  } catch (err) {
    console.error(`[${tag}] GHL request failed:`, err);
  }
}
