import React, { useState } from 'react';
import { 
  Scale, Shield, Award, Briefcase, FileText, Check, CheckCircle2, 
  ArrowRight, Calendar, Clock, DollarSign, Lock, Building2, 
  Users, ChevronRight, Phone, Mail, MapPin, Sparkles, Plus
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface PracticeArea {
  id: string;
  name: string;
  category: string;
  tagline: string;
  retainerTier: string;
  scope: string[];
  leadPartner: string;
  image: string;
}

const PRACTICES: PracticeArea[] = [
  {
    id: 'pr1',
    name: 'Mergers, Acquisitions & Carve-Outs',
    category: 'M&A COUNSEL',
    tagline: 'Cross-border buy-side and sell-side transaction structuring, asset purchase agreements, and antitrust filings.',
    retainerTier: '$35,000 Initial Retainer',
    scope: ['Asset Purchase Agreements (APA)', 'Hart-Scott-Rodino Clearance', 'Virtual Data Room Due Diligence', 'Post-Closing Indemnification Escrow'],
    leadPartner: 'Eleanor Hastings, Senior Partner',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr2',
    name: 'Venture Capital & Fund Syndication',
    category: 'PRIVATE EQUITY',
    tagline: 'LP/GP fund formation, PPM drafting, Series A-D equity financing syndication, and blue sky compliance.',
    retainerTier: '$25,000 Initial Retainer',
    scope: ['Private Placement Memorandums (PPM)', 'SAFE & Convertible Note Assemblies', 'Delaware Statutory Trust Formations', 'SEC Rule 506(c) Filings'],
    leadPartner: 'Richard Vanguard, Managing Partner',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr3',
    name: 'High-Stakes Commercial Litigation',
    category: 'TRIAL ADVOCACY',
    tagline: 'Breach of fiduciary duty, trade secret misappropriation, founder disputes, and emergency injunctive relief.',
    retainerTier: '$50,000 Trial Retainer',
    scope: ['Temporary Restraining Orders (TRO)', 'Forensic Trade Secret Discovery', 'Chancery Court Representation', 'Expert Witness Cross-Examination'],
    leadPartner: 'Stephen Vance, Trial Chair',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr4',
    name: 'Fractional General Counsel-as-a-Service',
    category: 'OUTSOURCED GC',
    tagline: 'Dedicated monthly board-level counsel covering commercial MSAs, IP licensing, and corporate governance.',
    retainerTier: '$12,500 / Month',
    scope: ['Master Services Agreements (MSA)', 'Executive Compensation & 83(b)', 'IP Assignment & Patent Defense', 'Bi-Weekly Board Representation'],
    leadPartner: 'Victoria Chen, Corporate Counsel',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [cart, setCart] = useState<PracticeArea[]>([]);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [consultSuccess, setConsultSuccess] = useState(false);

  const toggleCart = (practice: PracticeArea) => {
    if (cart.find(p => p.id === practice.id)) {
      setCart(cart.filter(p => p.id !== practice.id));
    } else {
      setCart([...cart, practice]);
    }
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSuccess(true);
    setTimeout(() => {
      setConsultSuccess(false);
      setIsConsultModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Banner */}
      <div className="bg-[#0b0c10] border-b border-amber-900/30 px-4 py-2 text-center text-xs tracking-wider text-slate-400 flex items-center justify-center space-x-3">
        <span className="flex items-center text-amber-400 font-mono font-semibold">
          <Scale className="w-3.5 h-3.5 mr-1" />
          VANGUARD & HASTINGS LLP // CORPORATE & TRIAL COUNSEL
        </span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span className="hidden sm:inline">Advised Over $4.2B in Strategic Transactions</span>
        <span className="text-slate-600">•</span>
        <button 
          onClick={() => setIsAdminOpen(true)}
          className="text-amber-400 hover:text-amber-300 font-mono text-[11px] underline ml-2 font-semibold"
        >
          [ PARTNER PORTAL ]
        </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#07080b]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-extrabold shadow-lg shadow-amber-500/20">
              <Scale className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg text-white font-serif flex items-center gap-1.5">
                VANGUARD<span className="text-amber-400">&</span>HASTINGS
              </span>
              <p className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">Boutique Corporate & Trial OS</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300 font-mono">
            <a href="#practices" className="hover:text-amber-400 transition-colors">Practice Areas</a>
            <a href="#retainers" className="hover:text-amber-400 transition-colors">Retainers</a>
            <a href="#partners" className="hover:text-amber-400 transition-colors">Partners</a>
            <a href="#vault" className="hover:text-amber-400 transition-colors">Privileged Vault</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center space-x-2 font-mono"
            >
              <Calendar className="w-4 h-4" />
              <span>REQUEST INTAKE</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-8 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>STRATEGIC TRANSACTION ARCHITECTS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-serif">
              Uncompromising Counsel. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500">
                Architects of High-Value Deals.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We counsel founders, family offices, and private equity micro-funds on middle-market buyouts, fund structuring, and existential commercial disputes. Board-level precision without the bloated overhead of BigLaw.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 font-mono">
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition-all shadow-xl shadow-amber-500/30 flex items-center justify-center space-x-2"
              >
                <span>INITIATE CONFIDENTIAL INTAKE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#practices"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-sm font-semibold text-slate-200 transition-all flex items-center justify-center space-x-2"
              >
                <span>PRACTICE SPECIALTIES</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/80 font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">$4.2B+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Transaction Volume</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Partner-Led Execution</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">48 Hr</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Drafting Turnaround</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-500/40 via-slate-800 to-slate-900 shadow-2xl">
              <div className="bg-[#0b0d12] rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping"></div>
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">MATTER PIPELINE TELEMETRY</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">PRIVILEGED TIER-1</span>
                </div>

                <div className="space-y-4 font-mono">
                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Q4 Active M&A Deal Flow</span>
                      <span className="text-amber-400 font-bold">$148,500,000 Volume</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full w-[84%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">IOLTA Trust Account Solvency</span>
                      <span className="text-emerald-400 font-bold">100% Backed ($1.84M)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full w-[100%]"></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-950/80 border border-slate-800/80 rounded-xl">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Cross-Border APA Enforceability</span>
                      <span className="text-cyan-400 font-bold">Definitive Multi-Jurisdiction</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-[95%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="w-full py-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <Lock className="w-4 h-4 text-amber-400" />
                    <span>Open Confidential Retainer Intake</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practices" className="py-20 px-4 sm:px-8 bg-[#090b10] border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              PRACTICE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Specialized Corporate & Trial Disciplines
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Turnkey engagement frameworks tailored for institutional acquirers, high-growth tech enterprises, and family offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICES.map((practice) => {
              const isInCart = !!cart.find(p => p.id === practice.id);
              return (
                <div 
                  key={practice.id}
                  className="bg-[#0c0e14] border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src={practice.image} 
                      alt={practice.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-black/40"></div>
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-slate-700/60 px-2.5 py-1 rounded-lg text-[10px] font-mono text-amber-400 uppercase">
                      {practice.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors font-serif">
                          {practice.name}
                        </h3>
                      </div>
                      <span className="font-mono font-bold text-amber-400 text-xs block mb-2">{practice.retainerTier}</span>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {practice.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Scope of Representation:</span>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {practice.scope.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-1.5">
                            <Check className="w-3 h-3 text-amber-400 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => toggleCart(practice)}
                        className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 ${
                          isInCart 
                            ? 'bg-amber-500 text-black shadow-md' 
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>RETAINER SELECTED</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-amber-400" />
                            <span>SELECT RETAINER</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Retainer Structure & IOLTA */}
      <section id="retainers" className="py-20 px-4 sm:px-8 bg-[#07080b]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
              TRUST ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Transparent Retainer Accounting
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              All legal retainers are maintained in strictly isolated State Bar IOLTA trust accounts. You receive itemized 6-minute billing telemetry with real-time auditability.
            </p>

            <div className="space-y-3 font-mono">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 mt-0.5">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full IOLTA Retainer Segregation</h4>
                  <p className="text-xs text-slate-400 mt-1">Funds are never comingled with operating capital; drawn strictly upon earned billable milestones.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start space-x-3.5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Encrypted Virtual Data Room (VDR)</h4>
                  <p className="text-xs text-slate-400 mt-1">256-bit AES encrypted client repository for cap tables, board consents, and M&A schedules.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0c0e14] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white font-serif">Confidential Conflict Check & Retainer Estimator</h3>
            <p className="text-xs text-slate-400">Submit your matter details to initiate automated conflict clearing:</p>

            <form onSubmit={handleConsultSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Matter Category</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none font-mono">
                  <option>M&A Asset Purchase / Carve-Out ($35k Retainer)</option>
                  <option>Venture Capital / Fund Formation ($25k Retainer)</option>
                  <option>Complex Commercial Litigation ($50k Retainer)</option>
                  <option>Fractional General Counsel ($12.5k / Mo)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Entity Name</label>
                  <input required placeholder="Apex Holdings LLC" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Adverse Parties (Conflicts)</label>
                  <input placeholder="None / Target Corp" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-amber-500/20 font-mono"
                >
                  CLEAR CONFLICTS & REQUEST ENGAGEMENT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 bg-[#050608] px-4 sm:px-8 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white font-serif tracking-wider">VANGUARD & HASTINGS</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Boutique Corporate & Trial Counsel Operating System. Architected for middle-market transaction advisory, private wealth holdings, and complex litigation.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Core Practices</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>Mergers & Acquisitions</li>
              <li>Fund Formation & PPMs</li>
              <li>Commercial Litigation</li>
              <li>Fractional General Counsel</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-white text-xs uppercase tracking-wider mb-3">Compliance & Bar</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li>IOLTA Trust Segregated</li>
              <li>State Bar of California</li>
              <li>256-Bit VDR Encryption</li>
              <li>Supabase Row Level Security</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-mono text-white text-xs uppercase tracking-wider">Partner Access</h5>
            <p className="text-[11px] text-slate-400">
              Access the confidential partner matter ledger with the 1-click passkey:
            </p>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-400 font-mono text-xs rounded-xl transition-all"
            >
              Partner Portal (/admin)
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <div>© 2026 Vanguard & Hastings LLP. Attorney Advertising. Turnkey Legal Counsel Operating System.</div>
          <div className="mt-2 sm:mt-0 font-mono text-amber-400">Passkey: law2026</div>
        </div>
      </footer>

      {/* Modals */}
      <AdminPortalModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Consultation Modal */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0c0d12] border border-amber-500/40 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl">
            <button 
              onClick={() => setIsConsultModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
            >
              ✕
            </button>

            {!consultSuccess ? (
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif">Retain Corporate Legal Counsel</h3>
                    <p className="text-xs text-slate-400">Initiate confidential intake & matter scoping</p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Corporate Officer Name</label>
                  <input required placeholder="Eleanor Vance, CEO" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Corporate Email</label>
                    <input required type="email" placeholder="vance@apexholdings.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Direct Phone</label>
                    <input required type="tel" placeholder="+1 (415) 890-2100" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Target Engagement Type</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:border-amber-500 outline-none font-mono">
                    <option>Mergers, Acquisitions & Asset Purchase ($35k Retainer)</option>
                    <option>Fund Syndication & PPM Private Placement ($25k Retainer)</option>
                    <option>High-Stakes Commercial Trial Defense ($50k Retainer)</option>
                    <option>Fractional General Counsel Retainer ($12.5k / Mo)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-xs tracking-wider transition-all shadow-lg shadow-amber-500/25 mt-4 font-mono"
                >
                  TRANSMIT CONFIDENTIAL INTAKE
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/50 rounded-full flex items-center justify-center mx-auto text-amber-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white font-serif">Matter Received</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Your inquiry is protected by attorney-client privilege. Managing partners will complete conflict checks and return engagement terms within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
