"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020205] text-slate-300 selection:bg-indigo-500/30">
      <Header />

      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Header Section */}
            <motion.div variants={fadeUp} className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6">
                Legal
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Last updated: April 2026. We are committed to uncompromised security and transparent data practices.
              </p>
            </motion.div>

            {/* Content Blocks */}
            <motion.div variants={staggerChild} className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
              <div className="prose prose-invert prose-indigo max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection & Processing</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  We collect information that you successfully route through our secure infrastructure. This includes robust telemetry, structured account metadata, and necessary payment gateways for uninterrupted service excellence. All collected data is processed through our zero-knowledge architecture.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  Beyond explicit telemetry, Fynab automatically synthesizes metadata regarding your environment, such as browser agents, IP fragmentation configurations, hardware acceleration states, and routing protocols. This aggressive data pipelining is required strictly for high-fidelity security modeling, mitigating autonomous botnets, and delivering frictionless edge routing. No implicit biometric or keystroke logging occurs.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">2. Usage of Information & Telemetry Synthesis</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  The semantic data collected is utilized solely to leverage personalized user experiences, maintain optimal server uptimes, and generate aggregated analytics. We do not synthesize user data to third-party advertising brokers. Our machine learning clusters parse metadata exclusively in highly isolated, stateless containers to train load-balancing algorithms.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  Furthermore, data feeds power our internal generative analytics dashboards. By aggregating anonymized API consumption traits, we can intelligently predict global outages, automatically reroute geographical DNS requests, and prioritize compute processing allocation. Because the data is anonymized before ingestion, tracing performance heuristics back to an individual user is cryptographically impossible.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">3. Zero-Knowledge Architecture & Security</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  We deploy military-grade AES-256 encryption at rest and dynamic TLS 1.3 in transit. Our infrastructure undergoes rigorous penetration testing and automated vulnerability scanning via CI/CD pipelines. Fynab operates on a zero-knowledge protocol; we possess the cipher text but geometrically lack the symmetric keys required to decrypt your proprietary application pipelines.
                </p>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Every microservice running in the Fynab cluster is authenticated via strict MTLS (Mutual TLS). We operate a zero-trust production environment: not even our senior site reliability engineers possess global root access to production databases. Access is granted ephemerally through strict, audited Identity and Access Management (IAM) controls, ensuring your data is structurally unviewable to unauthorized personnel.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  If our automated systems detect a cryptographic decay or anomalous access patterning, an automatic air-gap procedure immediately isolates the compromised tenant without impacting global network latency.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Intelligence Providers</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  While Fynab never sells data to marketing platforms, we algorithmically share highly sanitized network requests with trusted infrastructure intelligence partners. This includes DDoS mitigation providers (such as Cloudflare or Fastly), cloud compute providers (AWS, GCP), and enterprise threat detection agencies. 
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  These third-party relationships are strictly governed by Data Processing Agreements (DPAs) that legally restrict them from utilizing the metadata for any purpose other than localized routing optimization and threat suppression. Their infrastructures are routinely audited by standard bodies to align with our security mandates.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">5. User Sovereign Rights & Edge Data Deletion</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  In compliance with GDPR, UK-GDPR, CCPA, and analogous international privacy frameworks, you retain sovereign ownership of your digital footprint. You possess the inalienable right to request a complete cryptographic shredding of your specific datasets.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  You may initiate a data export or deletion cascade by accessing your security dashboard. Upon initiating a deletion cascade, the sequence automatically purges records from edge cache nodes within 14 seconds, and executes a hard wipe of physical cold-storage backups during our next 30-day compliance rotation. Furthermore, you hold the right to algorithmically contest any automated decision-making processes triggered by our systems that negatively impact your access rights.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies & Immutable Session Tokens</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Fynab does not utilize tracking cookies designed for cross-site surveillance. We utilize structurally hardened, HttpOnly, secure-flagged JWT (JSON Web Tokens) encoded into first-party session cookies solely for maintaining synchronous authentication states.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  If you deploy aggressive browser ad-blockers or modify your machine's cookie ingestion logic to reject these fundamental session tokens, the architectural integrity of our dashboard cannot be guaranteed and you may experience continuous forced de-authentications.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">7. International Data Pipelines and Jurisdictions</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Given the globally distributed nature of the Fynab edge network, data may be systematically fragmented and stored across multiple international borders depending on your closest physical Point of Presence (PoP). All trans-border data pipelines adhere strictly to standard contractual clauses verified by the European Commission.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  Regardless of the physical server farm storing the fragments, your data remains fully encapsulated under the jurisdiction outlined by this central Privacy Policy. Law enforcement requests for decryption backdoors are fundamentally unfulfillable due to our zero-knowledge architecture.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">8. Policy Updates & Semantic Versioning</h2>
                <p className="text-slate-400 leading-relaxed">
                  This privacy policy is treated as living code. It will be updated recursively as our infrastructure capabilities evolve or as global cyber-law environments shift. Whenever a material mutation occurs to this document, you will receive an automated webhook payload or an email briefing at least 30 synchronous days prior to the enforcement date, detailing the specific semantic changes. Continuing to transmit traffic to our endpoints post-enforcement implicitly authorizes your consent to the mutated policy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
