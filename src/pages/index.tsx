import React, { useEffect, useState } from "react";

export default function Remotes() {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (!firstRender) return <div>Remotes</div>;
}
