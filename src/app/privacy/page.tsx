import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Privacy Policy | 3rd + Taylor",
  description: "How 3rd + Taylor collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-background">
        <div className="container max-w-3xl py-20 md:py-28">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: May 2026</p>

          <div className="prose prose-neutral max-w-none space-y-10 text-ink/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">1. Who We Are</h2>
              <p>3rd + Taylor is a B2B go-to-market and campaign execution agency operated by Tiffany Huddleston Nwahiri. Our website is <Link href="https://www.3rdandtaylor.com" className="text-accent underline">www.3rdandtaylor.com</Link>. When we refer to "we," "us," or "our," we mean 3rd + Taylor. When we refer to "you," we mean anyone who visits our website or uses our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Information you provide directly</strong> — When you fill out a contact form, book a call, request a GTM Scan, or inquire about our services, we collect your name, email address, company name, job title, phone number, and website URL.</li>
                <li><strong>GTM Scan data</strong> — When you request a Free GTM Scan, we collect information about your company's website and advertising channels in order to perform the analysis.</li>
                <li><strong>Usage data</strong> — We may collect information about how you interact with our website, including pages visited, time on site, and referral sources, through tools such as Google Analytics and Google Tag Manager.</li>
                <li><strong>Cookies</strong> — Our website may use cookies and similar tracking technologies for analytics, marketing attribution, and site functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deliver and improve our services, including the Free GTM Scan and GTM Recommendations Report</li>
                <li>Respond to inquiries and communicate with prospective and current clients</li>
                <li>Send you your GTM Scan results and related follow-up communications</li>
                <li>Send marketing emails if you have opted in — you can unsubscribe at any time</li>
                <li>Analyze website usage to improve our content and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">4. How We Share Your Information</h2>
              <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers</strong> — We use third-party tools including Supabase (database), Resend (email delivery), HubSpot (CRM), Anthropic (AI analysis), and Firecrawl (web crawling) to operate our services. These providers process data only as necessary to deliver the service.</li>
                <li><strong>Legal requirements</strong> — We may disclose information if required by law or to protect the rights and safety of 3rd + Taylor or others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">5. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy. GTM Scan results are stored in our database and associated with your email address. You may request deletion of your data at any time by contacting us.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">6. Your Rights</h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Lodge a complaint with a data protection authority (if applicable in your jurisdiction)</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:legal@3rdandtaylor.com" className="text-accent underline">legal@3rdandtaylor.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">7. Security</h2>
              <p>We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">10. Cookies &amp; Tracking Technologies</h2>
              <p className="mb-3">Our website uses cookies and similar tracking technologies to support analytics, marketing, and site functionality. We use Google Tag Manager (container ID: GTM-KKV2XC6D) to manage and deploy tracking tags. Through Google Tag Manager, we may load the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Analytics cookies</strong> — Tools such as Google Analytics collect information about how visitors use our site (pages visited, time on site, referral source). This data is aggregated and used to improve our content and user experience. These cookies do not identify you personally.</li>
                <li><strong>Advertising &amp; attribution cookies</strong> — We may use tags such as Google Ads conversion tracking, LinkedIn Insight Tag, and similar pixels to measure ad performance and retarget visitors who have shown interest in our services. These cookies may track your activity across other websites.</li>
                <li><strong>Functional cookies</strong> — Some cookies are necessary for site features to work correctly, such as remembering form state or delivering your GTM Scan results.</li>
              </ul>
              <p className="mt-3">The specific tags active at any time are managed through our Google Tag Manager container. Because tag configurations can be updated in the GTM dashboard without a code deployment, this list reflects the categories of cookies we use rather than an exhaustive real-time inventory.</p>
              <p className="mt-3"><strong>Your choices:</strong> Most browsers allow you to control or block cookies through your browser settings. You may also opt out of Google Analytics measurement by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>. Opting out of advertising cookies can be done through the <a href="https://www.youronlinechoices.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a> platform or the <a href="https://optout.aboutads.info" className="text-accent underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a>. Note that disabling certain cookies may affect site functionality.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, our cookie practices, or how we handle your data, please contact us at <a href="mailto:legal@3rdandtaylor.com" className="text-accent underline">legal@3rdandtaylor.com</a>.</p>
            </section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
