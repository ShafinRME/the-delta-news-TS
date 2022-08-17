import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const ActiveLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        style={{
          textDecoration: match
            ? "text-primary mr-3 py-3 font-medium text-sm"
            : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match}
    </>
  );
};

export default ActiveLink;
