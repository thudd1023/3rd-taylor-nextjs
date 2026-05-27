"use client";

import { useEffect, useRef, useId } from "react";

const SCRIPT_SRC = "https://js.hsforms.net/forms/embed/44715546.js";
const PORTAL_ID = "44715546";
const REGION = "na1";

const loadScript = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") return resolve();
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("HubSpot script failed")));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.defer = true;
    script.onload = () => { script.dataset.loaded = "true"; resolve(); };
    script.onerror = () => reject(new Error("HubSpot script failed"));
    document.body.appendChild(script);
  });

const HubSpotInlineForm = ({ formId, instancePrefix = "hs" }: { formId: string; instancePrefix?: string }) => {
  const instanceId = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = "";
    const formFrame = document.createElement("div");
    formFrame.className = "hs-form-frame";
    formFrame.dataset.region = REGION;
    formFrame.dataset.formId = formId;
    formFrame.dataset.portalId = PORTAL_ID;
    formFrame.dataset.instanceId = `${instancePrefix}-${instanceId}`;
    ref.current.appendChild(formFrame);
    loadScript().catch(() => undefined);
    return () => { formFrame.remove(); };
  }, [formId, instanceId, instancePrefix]);

  return <div ref={ref} className="min-h-[320px]" />;
};

export default HubSpotInlineForm;
