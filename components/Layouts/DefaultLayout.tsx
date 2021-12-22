import React, { ReactElement, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function DefaultLayout({ children }: Props): ReactElement {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 pb-6">{children}</div>
    </div>
  );
}
