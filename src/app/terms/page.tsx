import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Terms & Conditions | 3rd + Taylor",
  description: "Terms and conditions governing use of 3rd + Taylor's website and services.",
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-background">
        <div className="container max-w-3xl py-20 md:py-28">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: May 2026</p>

          <div className="prose prose-neutral max-w-none space-y-10 text-ink/80 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">1. Agreement to Terms</h2>
              <p>By accessing or using the 3rd + Taylor website at <Link href="https://www.3rdandtaylor.com" className="text-accent underline">www.3rdandtaylor.com</Link> or any of our services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services. These terms apply to all visitors, users, and clients.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">2. Services</h2>
              <p className="mb-3">3rd + Taylor provides B2B go-to-market strategy and campaign execution services, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free GTM Scan — an AI-assisted analysis of your public-facing go-to-market presence</li>
                <li>GTM Recommendations Report — a human-reviewed audit with prioritized recommendations</li>
                <li>Revenue Growth Audit — a comprehensive go-to-market diagnostic</li>
                <li>Campaign Engine — a connected B2B campaign system</li>
                <li>Retained marketing team services (Momentum)</li>
              </ul>
              <p className="mt-3">The scope, deliverables, timeline, and fees for paid engagements are defined in a separate Statement of Work or service agreement signed by both parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">3. Free GTM Scan</h2>
              <p>The Free GTM Scan is an automated analysis tool provided at no charge. Results are generated using AI and publicly available data about your company's website and advertising presence. The scan is provided for informational purposes only and does not constitute a complete marketing audit or professional advice. Scores and findings may not reflect all aspects of your go-to-market strategy. 3rd + Taylor makes no warranty as to the accuracy, completeness, or fitness of the scan results for any particular purpose.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">4. Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, frameworks, methodologies, and code — is the property of 3rd + Taylor and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written permission.</p>
              <p className="mt-3">Deliverables created for clients under a paid engagement are licensed to the client for their business use upon receipt of full payment, as outlined in the applicable service agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">5. Payment Terms</h2>
              <p>Payment terms for paid services are outlined in the applicable proposal or Statement of Work. Unless otherwise agreed in writing, invoices are due upon receipt. Late payments may result in a pause of services. We reserve the right to require a deposit before work begins.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">6. Confidentiality</h2>
              <p>Both parties agree to keep confidential any non-public information shared during an engagement. 3rd + Taylor will not share client materials, strategies, or business information with third parties without consent, except as necessary to deliver the services (e.g., with approved subcontractors or tools) or as required by law.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, 3rd + Taylor's total liability for any claim arising out of or related to our services shall not exceed the total fees paid by the client in the three months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages, including lost revenue or lost profits, even if we have been advised of the possibility of such damages.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">8. Disclaimer of Warranties</h2>
              <p>Our website and free tools are provided "as is" without warranties of any kind, express or implied. We do not warrant that results from our services — including the GTM Scan — will meet your specific expectations or guarantee specific business outcomes. Marketing results depend on many factors outside our control.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">9. Acceptable Use</h2>
              <p className="mb-3">You agree not to use our website or services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our tools to scan websites you do not own or have permission to analyze</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">10. Termination</h2>
              <p>Either party may terminate a service engagement with written notice as specified in the applicable service agreement. For month-to-month engagements, 30 days written notice is required unless otherwise specified. We reserve the right to terminate access to our website or tools for violations of these terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">11. Governing Law</h2>
              <p>These Terms & Conditions are governed by the laws of the State of Florida, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Miami-Dade County, Florida, unless otherwise agreed in writing.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">12. Changes to These Terms</h2>
              <p>We may update these Terms & Conditions at any time. The updated version will be posted on this page with a revised date. Continued use of our website or services after changes constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">13. Contact</h2>
              <p>For questions about these Terms & Conditions, contact us at <a href="mailto:hello@3rdandtaylor.com" className="text-accent underline">hello@3rdandtaylor.com</a>.</p>
            </section>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
