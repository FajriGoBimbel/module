import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Remotes() {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (!firstRender)
    return (
      <div>
        <Link href="/">Home</Link>
      </div>
    );
}
