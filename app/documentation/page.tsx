"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-[#020205] text-slate-300">
      <Header />

      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-32 bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navigation</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#quickstart" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">Quickstart</a></li>
                <li><a href="#authentication" className="text-slate-400 hover:text-white transition-colors">Authentication</a></li>
                <li><a href="#endpoints" className="text-slate-400 hover:text-white transition-colors">Core Concepts & Endpoints</a></li>
                <li><a href="#pagination" className="text-slate-400 hover:text-white transition-colors">Pagination Architecture</a></li>
                <li><a href="#errors" className="text-slate-400 hover:text-white transition-colors">Errors & Status Codes</a></li>
                <li><a href="#rate-limits" className="text-slate-400 hover:text-white transition-colors">Rate Limiting</a></li>
                <li><a href="#idempotency" className="text-slate-400 hover:text-white transition-colors">Idempotent Requests</a></li>
                <li><a href="#webhooks" className="text-slate-400 hover:text-white transition-colors">Webhooks & Events</a></li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 space-y-16"
          >
            <motion.div variants={fadeUp}>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Documentation Hub</h1>
              <p className="text-xl text-slate-400 mb-8">
                Integrate Fynab into your stack in minutes. Welcome to the technical truth.
              </p>
              
              <div id="quickstart" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Quickstart</h2>
                <p className="text-slate-400 mb-4">Install our official SDK using your preferred package manager:</p>
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-indigo-300 mb-8">
                  npm install @fynab/sdk
                </div>
              </div>

              <div id="authentication" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Authentication</h2>
                <p className="text-slate-400 mb-4">All API requests require a valid Bearer token injected into the <code>Authorization</code> header. You can generate API key pairs (Publishable and Secret) via the developer dashboard. Never expose Server Secret variants to a client-side browser context.</p>
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
{`import { FynabClient } from '@fynab/sdk';

// Initialize the zero-dependency client
const client = new FynabClient({
  apiKey: process.env.FYNAB_SECRET_KEY, // e.g., fn_live_12345abcdef
  environment: 'production',
  maxRetries: 3
});`}
                </div>
              </div>

              <div id="endpoints" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Core Concepts & Endpoints</h2>
                <p className="text-slate-400 mb-4">Fynab models its resources strictly around RESTful nouns. All resource paths are heavily versioned in the URI domain (e.g. <code>api.fynab.com/v2/clusters</code>).</p>
                <div className="space-y-4">
                  <div className="flex border border-white/10 rounded-xl p-4 bg-white/[0.01]">
                    <span className="text-cyan-400 font-mono font-bold w-20">GET</span>
                    <span className="text-slate-300 font-mono flex-1">/v2/workspaces</span>
                  </div>
                  <div className="flex border border-white/10 rounded-xl p-4 bg-white/[0.01]">
                    <span className="text-indigo-400 font-mono font-bold w-20">POST</span>
                    <span className="text-slate-300 font-mono flex-1">/v2/jobs/async</span>
                  </div>
                  <div className="flex border border-white/10 rounded-xl p-4 bg-white/[0.01]">
                    <span className="text-red-400 font-mono font-bold w-20">DELETE</span>
                    <span className="text-slate-300 font-mono flex-1">/v2/nodes/:id</span>
                  </div>
                </div>
              </div>

              <div id="pagination" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Pagination Architecture</h2>
                <p className="text-slate-400 mb-4">Due to unbounded dataset sizes, Fynab universally mandates cursor-based pagination over traditional offset-based logic, ensuring hyper-fast \`O(1)\` query speeds dynamically.</p>
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
{`const { data, hasMore, nextCursor } = await client.metrics.list({
  limit: 100, // Max 1000 per request
  startingAfter: 'cus_8xg192', // Pass previous nextCursor
});

if (hasMore) {
  // auto-fetch next page dynamically
}`}
                </div>
              </div>

              <div id="errors" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Errors & Status Codes</h2>
                <p className="text-slate-400 mb-4">We return standard HTTP status codes, accompanied by a rigorously structured JSON payload detailing the error.</p>
                <ul className="list-disc pl-5 text-slate-400 space-y-2 mb-6">
                  <li><strong className="text-white">400 Bad Request:</strong> Malformed syntax or missing parameters.</li>
                  <li><strong className="text-white">401 Unauthorized:</strong> Invalid, expired, or revoked API key.</li>
                  <li><strong className="text-white">403 Forbidden:</strong> The API key lacks sufficient IAM scope permissions.</li>
                  <li><strong className="text-white">409 Conflict:</strong> Fails unique constraints (e.g. creating duplicate identifiers).</li>
                  <li><strong className="text-white">429 Too Many Requests:</strong> You have bypassed the token bucket rate limiter.</li>
                  <li><strong className="text-white">500 Server Error:</strong> Total core infrastructure failure (very rare).</li>
                </ul>
              </div>

              <div id="rate-limits" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Rate Limiting</h2>
                <p className="text-slate-400 mb-4">Fynab employs a sophisticated edge-level token bucket algorithm to deflect abusive traffic. Your standard operational limit is 1,000 requests per second across your workspace infrastructure. Every response includes rate limit headers allowing you to dynamically adjust internal loops:</p>
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-slate-300">
                  <p>X-RateLimit-Limit: 1000</p>
                  <p>X-RateLimit-Remaining: 998</p>
                  <p>X-RateLimit-Reset: 1682390842</p>
                </div>
              </div>

              <div id="idempotency" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Idempotent Requests</h2>
                <p className="text-slate-400 mb-4">The core network is inherently volatile. Sometimes connections drop before a client can verify a 200 OK success response. To safely retry identical \`POST\` payloads without mutating backend states twice (e.g., executing a billing charge twice), utilize an Idempotency-Key header.</p>
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
{`const charge = await client.payments.create({
  amount: 5000,
  currency: 'USD'
}, {
  idempotencyKey: 'charge-ux-999-0021' // Re-sending this exact key within 24h yields a cached response.
});`}
                </div>
              </div>

              <div id="webhooks" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Webhooks & Async Events</h2>
                <p className="text-slate-400 mb-4">Heavy processing is deferred asynchronously. Rather than forcing clients into long-polling, Fynab pushes real-time event updates straight to your registered Webhook endpoints. Ensure you verify the cryptographic signatures derived from your Webhook Secret mapping to prevent spoofed payloads.</p>
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
{`// Express.js typical integration
app.post('/fynab/webhooks', express.raw({ type: 'application/json' }), (req, res) => {
  try {
    const event = client.webhooks.constructEvent(
      req.body,
      req.headers['fynab-signature'],
      process.env.FYNAB_WEBHOOK_SECRET
    );
    console.log('Ingested Event:', event.type); 
    res.json({ received: true });
  } catch (err) {
    res.status(400).send('Webhook signing algorithm mismatch.');
  }
});`}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
