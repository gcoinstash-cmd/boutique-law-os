import React, { useState } from 'react';
import { Shield, Key, X, Scale, FileText, DollarSign, Briefcase, Award } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === 'law2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid Partner Passkey. Hint: Use 1-Click Auto-Fill Demo Passkey.');
    }
  };

  const autofillPasskey = () => {
    setPasskey('law2026');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0c0d12] border border-amber-900/50 rounded-2xl p-6 sm:p-8 text-slate-200 shadow-2xl overflow-hidden">
        {/* Warm gold glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide font-serif">PARTNER ACCESS CONSOLE</h3>
                <p className="text-xs text-slate-400">Vanguard & Hastings Legal Operating System</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                  Partner Security Passkey
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                  <input
                    type="password"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    placeholder="Enter passkey..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors text-sm font-mono"
                  />
                </div>
              </div>

              {error && (
                <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-xl text-sm transition-all shadow-lg shadow-amber-600/25 text-center font-mono"
                >
                  Verify Partner Credentials
                </button>
                <button
                  type="button"
                  onClick={autofillPasskey}
                  className="py-3 px-4 bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/30 text-amber-300 font-mono text-xs rounded-xl transition-all"
                >
                  ⚡ Auto-Fill: law2026
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Privileged Attorney-Client Work Product</span>
              <span className="font-mono text-amber-400">Vault Encrypted</span>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-amber-500/20 border border-amber-500/40 rounded-xl text-amber-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-serif">Executive Managing Partner Ledger</h4>
                  <p className="text-xs text-slate-400">Active Retainers, Trust Accounts & Matter Index</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>IOLTA Trust Ledger</span>
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">$1,840,000</div>
                <div className="text-[10px] text-emerald-400 mt-1">100% Retainer Backed</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Active Corporate Matters</span>
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">24</div>
                <div className="text-[10px] text-cyan-400 mt-1">3 M&A Closings in Q4</div>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                  <span>Billable Realization</span>
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono">96.8%</div>
                <div className="text-[10px] text-emerald-400 mt-1">Avg Partner Rate: $950/hr</div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Live Confidential Matters</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Project Titan (Series B Equity Financing)</span>
                    <span className="text-slate-400 ml-2">Lead: E. Hastings, Esq. • $45k Retainer</span>
                  </div>
                  <span className="text-amber-400 font-mono text-[11px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">DOCUMENT REVIEW</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">Apex Real Estate Syndication Fund III</span>
                    <span className="text-slate-400 ml-2">Lead: R. Vanguard, Esq. • $75k Retainer</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">CLOSING READY</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                  <div>
                    <span className="font-semibold text-white">BioTech Patent Cross-Licensing Defense</span>
                    <span className="text-slate-400 ml-2">Lead: S. Vance, Esq. • $120k Retainer</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px] bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">ARBITRATION</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Lock Terminal
              </button>
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-xl text-xs transition-all shadow-md font-mono"
                >
                  Exit Console
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
