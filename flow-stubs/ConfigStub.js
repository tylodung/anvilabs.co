/* @flow */

type MenuLink = {
  to: string,
  title: string,
};
type FooterLink = {
  href: string,
  title: string,
};

type Config = {
  siteTitle: string,
  siteDescription: string,
  analyticsKey: string,
  contactEmail: string,
  hostname: string,
  mailchimpActionUrl: string,
  menuLinks: Array<MenuLink>,
  footerLinks: Array<FooterLink>,
};
const emptyConfig: Config = {
  siteTitle: '',
  siteDescription: '',
  analyticsKey: '',
  contactEmail: '',
  hostname: '',
  mailchimpActionUrl: '',
  menuLinks: [],
  footerLinks: [],
};

export const config = emptyConfig;
