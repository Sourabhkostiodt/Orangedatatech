import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Copy, ExternalLink, Play, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { API_ENDPOINTS, EXTERNAL_ASSET_URLS, testApiEndpoint } from '../data/apiEndpoints';

type TestResult = {
  ok: boolean;
  status: number;
  statusText: string;
  elapsedMs: number;
  preview: string;
};

function copyText(text: string) {
  void navigator.clipboard.writeText(text);
}

function formatPreview(body: unknown) {
  const text = typeof body === 'string' ? body : JSON.stringify(body, null, 2);
  return text.length > 2400 ? `${text.slice(0, 2400)}\n\n… truncated` : text;
}

export default function ApiEndpointsPage() {
  const [results, setResults] = useState<Record<string, TestResult>>({});
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    copyText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleTest = async (id: string, url: string) => {
    setLoadingId(id);
    try {
      const result = await testApiEndpoint(url);
      setResults((prev) => ({
        ...prev,
        [id]: {
          ok: result.ok,
          status: result.status,
          statusText: result.statusText,
          elapsedMs: result.elapsedMs,
          preview: formatPreview(result.body),
        },
      }));
    } catch (error) {
      setResults((prev) => ({
        ...prev,
        [id]: {
          ok: false,
          status: 0,
          statusText: error instanceof Error ? error.message : 'Request failed',
          elapsedMs: 0,
          preview: '',
        },
      }));
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-theme-subtle transition-colors duration-300">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden border-b border-theme bg-[#06021D]">
          <div className="absolute inset-0 grid-dark opacity-30" />
          <div className="container-fort relative py-12 lg:py-16">
            <p className="text-fort-purple-light text-[11px] font-bold uppercase tracking-[0.2em] mb-2">
              Developer Reference
            </p>
            <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-3">API Endpoints</h1>
            <p className="text-white/60 text-sm max-w-2xl">
              All external API URLs used in this React app. Test each endpoint live and copy URLs for integration.
            </p>
          </div>
        </section>

        <section className="container-fort py-10 lg:py-14 space-y-6">
          {API_ENDPOINTS.map((endpoint, index) => {
            const testUrl = endpoint.sampleUrl ?? endpoint.url.replace('{slug}', 'power-bi-and-amazon-quicksight-a-detailed-comparison');
            const result = results[endpoint.id];

            return (
              <motion.article
                key={endpoint.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="card-fort p-5 lg:p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-md bg-fort-purple/10 text-fort-purple text-[10px] font-bold uppercase tracking-wider">
                        {endpoint.method}
                      </span>
                      <h2 className="text-theme-heading text-lg font-bold">{endpoint.name}</h2>
                    </div>
                    <p className="text-theme-muted text-sm mb-3">{endpoint.description}</p>
                    <p className="text-theme-subtle text-xs">
                      Used by: <span className="text-theme">{endpoint.usedBy.join(' · ')}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleTest(endpoint.id, testUrl)}
                      disabled={loadingId === endpoint.id}
                      className="btn-fort text-xs px-4 py-2 inline-flex items-center gap-1.5 disabled:opacity-60"
                    >
                      <Play className="w-3.5 h-3.5" />
                      {loadingId === endpoint.id ? 'Calling…' : 'Test API'}
                    </button>
                    <a
                      href={testUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-theme text-theme-heading hover:border-fort-purple/40 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Open
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-theme bg-theme-muted/40 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-theme-subtle mb-1">URL</p>
                      <code className="text-xs sm:text-sm text-theme break-all leading-relaxed">{endpoint.url}</code>
                      {endpoint.sampleUrl && endpoint.sampleUrl !== endpoint.url && (
                        <>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-theme-subtle mt-3 mb-1">
                            Sample test URL
                          </p>
                          <code className="text-xs text-theme-muted break-all leading-relaxed">{testUrl}</code>
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(endpoint.id, testUrl)}
                      className="shrink-0 p-2 rounded-lg border border-theme hover:border-fort-purple/40 transition-colors"
                      aria-label="Copy URL"
                    >
                      <Copy className="w-4 h-4 text-theme-subtle" />
                    </button>
                  </div>
                  {copied === endpoint.id && (
                    <p className="text-fort-purple text-xs mt-2">URL copied!</p>
                  )}
                </div>

                {result && (
                  <div className={`mt-4 rounded-xl border p-4 ${result.ok ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {result.ok ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className="text-sm font-semibold text-theme-heading">
                        {result.status} {result.statusText}
                      </span>
                      {result.elapsedMs > 0 && (
                        <span className="text-xs text-theme-subtle">{result.elapsedMs} ms</span>
                      )}
                    </div>
                    {result.preview && (
                      <pre className="text-[11px] sm:text-xs text-theme-muted overflow-x-auto whitespace-pre-wrap break-words max-h-64 overflow-y-auto rounded-lg bg-theme-page/60 p-3 border border-theme">
                        {result.preview}
                      </pre>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </section>

        <section className="container-fort pb-14">
          <div className="card-fort p-5 lg:p-6 mb-8 border-fort-purple/20">
            <h2 className="text-theme-heading text-lg font-bold mb-2">Automatic WordPress sync</h2>
            <p className="text-theme-muted text-sm leading-relaxed">
              The React app does not store blog posts locally. It reads live from the WordPress REST API.
              When you publish a post on WordPress, it appears on <code className="text-xs">/blog</code> within
              about 60 seconds (auto-poll), when a visitor refreshes, or when they return to the tab.
              No redeploy or manual code update is required.
            </p>
          </div>

          <h2 className="text-theme-heading text-xl font-bold mb-4">External Asset URLs</h2>
          <p className="text-theme-muted text-sm mb-6">
            Static media URLs referenced in the app (not REST APIs).
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {EXTERNAL_ASSET_URLS.map((asset) => (
              <div key={asset.label} className="card-fort p-4">
                <p className="text-theme-heading font-semibold text-sm mb-1">{asset.label}</p>
                <p className="text-theme-subtle text-xs mb-2">{asset.usedBy}</p>
                <code className="text-xs text-theme-muted break-all">{asset.url}</code>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
