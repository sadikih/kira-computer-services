import { siteInfo } from '../../data/content'

/**
 * Per-page metadata. React 19 hoists these tags into <head>, and the
 * prerender step (scripts/prerender.js) writes them into each static page.
 */
export default function Seo({ title, description = siteInfo.description, path = '/', noindex = false, jsonLd }) {
  const fullTitle = title ? `${title} | ${siteInfo.name}` : `${siteInfo.name} | Software, Cybersecurity & Networking in Nairobi`
  const url = siteInfo.url + path
  const image = `${siteInfo.url}/og-image.png`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteInfo.name} />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="KiraTech — software, cybersecurity and networking, Nairobi" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  )
}
