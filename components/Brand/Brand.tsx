import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandProps } from "./Brand.props";
import { AppContext, IAppContext } from "../../context/appContext";
import { RootAction } from "../../reduce/root.action";

const Brand = ({ ...props }: BrandProps) => {
  const {
    store: [, dispatch],
  } = useContext<IAppContext>(AppContext);

  return (
    <Link href="/">
      <a onClick={() => dispatch(RootAction.resetProduct())}>
        <Image src="/logo.png" alt="brand" width={150} height={35} />
      </a>
    </Link>
  );
};

export default Brand;
