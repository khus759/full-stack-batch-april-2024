import { Breadcrumb } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb className="my-3">
      <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        const label =
          value.charAt(0).toUpperCase() + value.slice(1).replace("-", " ");

        return isLast ? (
          <Breadcrumb.Item key={to} active>
            {label}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item
            key={to}
            linkAs={NavLink}
            linkProps={{ to }}
          >
            {label}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
