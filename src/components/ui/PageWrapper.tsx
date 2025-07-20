"use client";

import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div
      className={`px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default PageWrapper;
