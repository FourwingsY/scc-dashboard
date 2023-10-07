import type { EffectCallback } from "react";
import { useEffect, useRef } from "react";

export function useEffectOnce(effect: () => PromiseLike<ReturnType<EffectCallback>>) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      (async function () {
        await effect();
      })();
    }
  }, []);
}
