"use client";
import { useEffect, useId, useRef } from "react";

const SCRIPT_SRC = "https://js.hsforms.net/forms/embed/44715546.js";
const PORTAL_ID = "44715546";
const FORM_ID = "024bc07a-d14b-445d-9354-270073879f8e";
const REGION = "na1";

const loadScript = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) {
      if (existing.dataset.loaded === "true") return resolve();
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("HubSpot script failed")));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.defer = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error("HubSpot script failed"));
    document.body.appendChild(script);
  });

const HubSpotLetsTalkForm = () => {
  const instanceId = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";
    const formFrame = document.createElement("div");
    formFrame.className = "hs-form-frame";
    formFrame.dataset.region = REGION;
    formFrame.dataset.formId = FORM_ID;
    formFrame.dataset.portalId = PORTAL_ID;
    formFrame.dataset.instanceId = `lets-talk-${instanceId}`;
    ref.current.appendChild(formFrame);

    const initForm = async () => {
      await loadScript().catch(() => undefined);
    };
    initForm();

    return () => {
      formFrame.remove();
    };
  }, [instanceId]);

  return <div ref={ref} className="min-h-[400px]" />;
};

export default HubSpotLetsTalkForm;
