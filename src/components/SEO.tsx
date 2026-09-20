import { useEffect } from 'react';
import { SITE_URL } from '../constants/event';

const PRODUCTION_HOSTNAME = 'clickstocode.awssbg-mhssce.in';

/**
 * SEO Runtime Component
 * 1. Guarantees that canonical URL is always https://clickstocode.awssbg-mhssce.in
 * 2. Dynamically prevents indexing (noindex, nofollow) if accessed on staging/testing S3 URLs
 *    (e.g., demo-aws-clicks-to-code.s3-website.ap-south-1.amazonaws.com) or localhost/preview.
 * 3. Enforces production index/follow when served on the canonical production domain.
 */
export default function SEO() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentHostname = window.location.hostname.toLowerCase();
    const isProductionDomain = currentHostname === PRODUCTION_HOSTNAME;
    const isS3TestingDomain =
      currentHostname.includes('.amazonaws.com') ||
      currentHostname.includes('s3-website');

    // 1. Enforce Canonical Link
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${SITE_URL}/`);

    // 2. Protect Staging vs Production Indexing
    let robotsMeta = document.querySelector(
      'meta[name="robots"]'
    ) as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    if (!isProductionDomain) {
      // Non-production or S3 testing environment: strictly disallow indexing
      robotsMeta.setAttribute('content', 'noindex, nofollow');
      if (isS3TestingDomain || import.meta.env.DEV) {
        console.info(
          `[SEO Guard] Non-production host detected (${currentHostname}). Robots set to 'noindex, nofollow'. Canonical URL is locked to ${SITE_URL}/.`
        );
      }
    } else {
      // Official production domain: full index & rich snippet visibility
      robotsMeta.setAttribute(
        'content',
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      );
    }
  }, []);

  return null;
}
