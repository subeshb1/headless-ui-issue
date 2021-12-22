import React, { ReactElement, ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
  className?: string;
  id?: string;
  sm?: boolean;
}

const PanelHeading = ({
  className,
  children,
  sm,
}: PanelProps): ReactElement => {
  return (
    <div className="px-4 py-4 border-b border-gray-200 sm:px-6">
      <h3
        className={`${
          sm ? 'text-lg' : 'text-2xl'
        } leading-6  text-gray-700 font-medium ${className}`}
      >
        {children}
      </h3>
    </div>
  );
};

const PanelBody = ({ className, children }: PanelProps): ReactElement => {
  return (
    <div className={`p-5 flex flex-col gap-y-4 ${className}`}>{children}</div>
  );
};
const PanelFooter = ({ className, children }: PanelProps): ReactElement => {
  return (
    <div
      className={`px-4 py-5 border-t border-gray-200 sm:px-6 rounded-b-md  bg-gray-50 ${className}`}
    >
      {children}
    </div>
  );
};

export default function Panel({
  children,
  className = '',
  id,
}: PanelProps): ReactElement {
  return (
    <div id={id} className={`bg-white shadow rounded-md  ${className}`}>
      {children}
    </div>
  );
}

Panel.Heading = PanelHeading;
Panel.Footer = PanelFooter;
Panel.Body = PanelBody;
