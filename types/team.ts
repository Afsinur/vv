export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: { src: string; alt: string };
  /** Optional: show FB button on hover when provided */
  facebook?: string;
  label?: string;
  position?: string;

  href: string;
};
