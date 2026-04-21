"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020205] text-slate-300 selection:bg-cyan-500/30">
      <Header />

      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Header Section */}
            <motion.div variants={fadeUp} className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6">
                Legal
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Terms of Service
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Please read these terms carefully before accessing Fynab's premium software suites.
              </p>
            </motion.div>

            {/* Content Blocks */}
            <motion.div variants={staggerChild} className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
              <div className="prose prose-invert prose-cyan max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Architectural Terms</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  By accessing or utilizing our APIs, SDKs, edge networks or web interfaces, you agree to be strictly bound by these architectural terms. If you do not align with our compliance standards, you must immediately decouple your applications from our services. Continued pinging of our endpoints acknowledges unconditional acceptance.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  These terms constitute a legally binding agreement between you (the authorized entity) and Fynab. This agreement overrides any prior verbal or written understandings. It is the responsibility of your technical lead and legal counsel to ensure that integration with Fynab does not violate your own localized corporate regulations.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">2. High-Availability SLA & Uptime Guarantees</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  We guarantee a 99.99% uptime via multi-region failover deployments. Acceptable downtime is restricted to scheduled CI/CD deployments communicated via global dashboard notifications 48 hours in advance. Our infrastructure is engineered to reroute traffic automatically to surviving clusters during regional cloud outages.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  If the 99.99% threshold is breached within a calendar month, affected Enterprise-tier users possess the right to claim cryptographic service credits proportionate to the extent of the outage. Standard-tier users are not eligible for financial compensation resulting from split-brain scenarios or BGP misrouting events out of our direct control. The SLA does not apply to beta environments, deprecated v1 API routes, or sandbox instances.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">3. Prohibited Infrastructural Behaviors</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Users are strictly prohibited from utilizing our infrastructure to mine cryptocurrencies, launch Distributed Denial of Service (DDoS) attacks, deploy unregistered autonomous agents, or obfuscate malware binaries.
                </p>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Furthermore, utilizing Fynab to scrape, crawl, or aggressively interrogate internal third-party services in ways that violate their respective Terms of Service is forbidden. Fynab employs AI-driven behavioral analysis algorithms; if our firewalls detect anomalous traffic patterns indicative of credential stuffing or port scanning, your origin IPs and API keys will be systematically blacklisted with no right to arbitration.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  Any attempt to reverse engineer our proprietary load-balancing mechanisms or artificially manipulate regional throughput will result in immediate termination of the contract and potential referral to global cyber authorities.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property & Code Sovereignty</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Algorithms, interface designs, SDKs, visual language, and proprietary transport protocols exposed via Fynab remain our exclusive intellectual property. Reverse engineering compiled binaries, attempting to de-minify payload structures, or cloning our dashboard aesthetic for competitive advantage is legally actionable under international copyright statutes.
                </p>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Conversely, Fynab lays zero claim to the proprietary datasets, application code, or ML models you pass through our pipes. Your intellectual property remains securely yours. You grant Fynab a limited, heavily scoped license to process, cache, and transmit your data solely for the purpose of executing your intended operational workflows.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  Feedback, bug reports, and UX optimization suggestions provided to Fynab engineering teams by users are submitted on a voluntary basis. Fynab holds the unencumbered right to implement those suggestions into our core product without offering equity or royalty payments to the reporting party.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">5. Billing Mechanics and Latency Fines</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Fynab utilizes a strictly metered billing architecture. Compute cycles, egress bandwidth, and concurrent API connections are measured down to the millisecond. Invoices are generated algorithmically at the close of every billing cycle.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  Failure to successfully process a payment after three webhook-triggered retry sequences will result in the suspension of global read/write privileges. Accounts languishing in arrears for more than 45 days will be subjected to the execution of our data deletion cascade, resulting in the permanent, irrecoverable purging of all associated configuration states and routing metrics.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">6. Liability Limitations in Distributed Environments</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Fynab builds highly resilient systems, yet the Internet remains an inherently volatile ecosystem. We shall not be held liable for tangential revenue loss, reputational damage, or data corruption caused by forces outside our direct architectural control. This includes, but is not limited to: catastrophic failures of downstream cloud providers (e.g., AWS us-east-1 outages), global DNS routing hijackings, terrestrial fiber cuts, or acts of physical warfare disrupting physical server farms.
                </p>
                <p className="mb-8 text-slate-400 leading-relaxed">
                  Under no scenario will our aggregate financial liability exceed the total architectural expenditure your organization has paid Fynab in the preceding 6-month epoch. Use of our services indicates an acknowledgment that extreme-scale distributed systems carry inherent entropy.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">7. Asynchronous Termination Procedures</h2>
                <p className="mb-4 text-slate-400 leading-relaxed">
                  Either party holds the right to sever this agreement. You may execute a self-termination command via the security settings console, which will cleanly close active TCP connections, invalidate all API tokens, and pause localized billing logic immediately.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  If Fynab determines a termination is necessary due to malicious behavior, toxic debt, or catastrophic SLA violations, we reserve the right to forcefully prune your account from our database without advanced warning. Sections regarding intellectual property protections, liability limits, and binding legal arbitration will survive the asynchronous death of the user account.
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
