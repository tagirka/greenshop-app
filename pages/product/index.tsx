import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ProductIndex = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await router.push({ pathname: `/` });
    })();
  });

  return <div>product index</div>;
};

export default ProductIndex;
