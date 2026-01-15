import { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container-custom max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">Terms of Service</h1>

                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 font-light">


                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the website iefund.in (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Site's particular services, you shall be subject to any posted guidelines or rules applicable to such services. All such guidelines or rules are hereby incorporated by reference into the TOS.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
                        <p>
                            You must be at least 18 years of age to use the Site. By agreeing to these Terms, you represent and warrant that you are at least 18 years old. If you are using the Site on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                        <p className="mb-4">
                            You agree to use the Site only for lawful purposes. You are prohibited from posting on or transmitting through the Site any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable of any kind.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                        <p>
                            The Site and its original content, features, and functionality are owned by IE Fund and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the service, use of the service, or access to the service without express written permission by us.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">5. Prohibited Activities</h2>
                        <p className="mb-4">
                            You may not access or use the Site for any purpose other than that for which we make the Site available. Prohibited usages include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Systematically retrieving data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                            <li>Making any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.</li>
                            <li>Engaging in unauthorized framing of or linking to the Site.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
                        <p>
                            Our Service may contain links to third-party web sites or services that are not owned or controlled by IE Fund. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that IE Fund shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                        <p>
                            In no event shall IE Fund, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from yours access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                        <p>
                            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                        <p>
                            If you have questions or comments about these Terms of Service, please contact us at:
                        </p>
                        <p className="mt-4 font-medium text-slate-900">
                            IE Fund<br />
                            F - 126, Katwaria Sarai<br />
                            New Delhi, 110016<br />
                            Email: kanchan.thakur@iefund.in
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default TermsOfService;
