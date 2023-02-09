export type TBreadcrumbItem = {
  children?: string; //nie powinien tu być bardziej skomplikowany typ?
  href: string;
  isCurrent: boolean;
  label?: string;
};
