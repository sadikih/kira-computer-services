import { siteInfo } from '../data/content'

export const organizationLd = {
  '@type': 'ProfessionalService',
  '@id': `${siteInfo.url}/#organization`,
  name: siteInfo.name,
  url: siteInfo.url,
  logo: `${siteInfo.url}/favicon.svg`,
  image: `${siteInfo.url}/og-image.png`,
  description: siteInfo.description,
  email: siteInfo.email,
  telephone: '+254112796092',
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  areaServed: { '@type': 'Country', name: 'Kenya' },
}

export function breadcrumbLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: siteInfo.url + path,
    })),
  }
}
