import React from 'react';
import { BarChart3, TrendingUp, AlertTriangle, Cpu, Radio, Shield, MessageSquare, Send, Sliders, CheckCircle2, User, Bot, Layers } from 'lucide-react';

// 1. Uber NCR Power BI Dashboard Preview Component (Pixel-Perfect Aligned)
export function UberNCRPreview() {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-xs shadow-xl">
      {/* Power BI Header Bar */}
      <div className="bg-slate-800/90 px-3.5 py-2.5 border-b border-slate-700 flex flex-wrap items-center justify-between gap-2 text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-yellow-500 flex items-center justify-center font-bold text-[9px] text-black shrink-0">BI</div>
          <span className="font-semibold text-slate-100 text-xs truncate">Uber NCR Rides Analytics • Power BI</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">DAX Active</span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="p-3.5 space-y-3.5 bg-slate-950/70">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          
          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div className="text-slate-400 text-[10px] font-medium uppercase tracking-wider truncate">Total Bookings</div>
            <div className="text-base font-bold text-slate-100 my-1">52,480</div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
              <TrendingUp size={10} /> +12.4%
            </div>
          </div>

          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div className="text-slate-400 text-[10px] font-medium uppercase tracking-wider truncate">Completed %</div>
            <div className="text-base font-bold text-emerald-400 my-1">74.2%</div>
            <div className="text-[10px] text-slate-400 font-mono">38,940 Rides</div>
          </div>

          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div className="text-slate-400 text-[10px] font-medium uppercase tracking-wider truncate">Cancellation %</div>
            <div className="text-base font-bold text-amber-400 my-1">18.6%</div>
            <div className="text-[10px] text-amber-400/90 flex items-center gap-1 font-mono">
              <AlertTriangle size={10} /> Peak: 8-10 AM
            </div>
          </div>

          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div className="text-slate-400 text-[10px] font-medium uppercase tracking-wider truncate">Trip Revenue</div>
            <div className="text-base font-bold text-slate-100 my-1">₹1.48 Cr</div>
            <div className="text-[10px] text-slate-400 font-mono">Avg: ₹282</div>
          </div>

        </div>

        {/* Visual Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Peak Hour Cancellations Bar Visual */}
          <div className="md:col-span-2 bg-slate-900/90 p-3 rounded-lg border border-slate-800 space-y-3">
            
            <div className="flex flex-wrap items-center justify-between gap-1 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5 font-semibold text-slate-200 text-xs">
                <BarChart3 size={14} className="text-blue-400 shrink-0" />
                <span>Hourly Cancellation Breakdown</span>
              </div>
              <span className="text-[9.5px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded">
                DAX Calculated
              </span>
            </div>
            
            <div className="space-y-2.5 pt-0.5">
              
              {/* Bar 1 */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10.5px]">
                  <span className="font-mono text-slate-300">08:00 AM (Morning Rush)</span>
                  <span className="font-mono font-semibold text-amber-400">38% Cancelled</span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: '38%' }}></div>
                </div>
              </div>

              {/* Bar 2 */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10.5px]">
                  <span className="font-mono text-slate-300">09:00 AM (Peak Commute)</span>
                  <span className="font-mono font-semibold text-amber-400/90">32% Cancelled</span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="bg-amber-500/90 h-full rounded-full transition-all duration-500" style={{ width: '32%' }}></div>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10.5px]">
                  <span className="font-mono text-slate-300">05:00 PM (Evening Exit)</span>
                  <span className="font-mono font-semibold text-blue-400">24% Cancelled</span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="bg-blue-500 h-full rounded-full transition-all duration-500" style={{ width: '24%' }}></div>
                </div>
              </div>

              {/* Bar 4 */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10.5px]">
                  <span className="font-mono text-slate-300">08:00 PM (Night Rides)</span>
                  <span className="font-mono font-semibold text-slate-400">16% Cancelled</span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div className="bg-slate-600 h-full rounded-full transition-all duration-500" style={{ width: '16%' }}></div>
                </div>
              </div>

            </div>
          </div>

          {/* Cancellation Reasons Donut Summary */}
          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 flex flex-col justify-between space-y-3">
            <div>
              <div className="font-semibold text-slate-200 text-xs pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Cancellation Drivers</span>
                <span className="text-[10px] text-slate-400 font-mono">% Share</span>
              </div>

              <div className="mt-3 space-y-2 text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 flex items-center gap-1.5 text-[10.5px]">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span> Refused Short Trip
                  </span>
                  <span className="font-semibold text-slate-100 font-mono">44%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300 flex items-center gap-1.5 text-[10.5px]">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span> Driver Far Away
                  </span>
                  <span className="font-semibold text-slate-100 font-mono">28%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300 flex items-center gap-1.5 text-[10.5px]">
                    <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span> Customer Changed Mind
                  </span>
                  <span className="font-semibold text-slate-100 font-mono">18%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300 flex items-center gap-1.5 text-[10.5px]">
                    <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0"></span> Payment Issue
                  </span>
                  <span className="font-semibold text-slate-100 font-mono">10%</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
              <span>Source: Uber NCR</span>
              <span className="text-blue-400 font-medium">Power BI Report</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// 2. Smart City Digital Twin Preview Component
export function SmartCityPreview() {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-xs shadow-xl">
      <div className="bg-slate-800/90 px-3.5 py-2.5 border-b border-slate-700 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <Cpu className="text-emerald-400 shrink-0" size={14} />
          <span className="font-semibold text-slate-200 text-xs">Smart City Digital Twin & Sensor Dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-400 font-mono">12 Nodes Online</span>
        </div>
      </div>

      <div className="p-3.5 space-y-3 bg-slate-950/70">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px] font-medium">Avg City AQI</div>
            <div className="text-base font-bold text-emerald-400 mt-0.5">64</div>
            <div className="text-[9.5px] text-slate-400 mt-0.5 font-mono">PM2.5: 18 µg/m³</div>
          </div>
          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px] font-medium">Smart Grid</div>
            <div className="text-base font-bold text-blue-400 mt-0.5">98.4%</div>
            <div className="text-[9.5px] text-slate-400 mt-0.5 font-mono">Power Saved: 14%</div>
          </div>
          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px] font-medium">Energy Load</div>
            <div className="text-base font-bold text-slate-100 mt-0.5">420 kW</div>
            <div className="text-[9.5px] text-slate-400 mt-0.5 font-mono">Nominal Range</div>
          </div>
        </div>

        {/* Live Telemetry Node Table */}
        <div className="bg-slate-900 rounded-lg border border-slate-800 p-3 space-y-2">
          <div className="text-slate-200 font-semibold text-xs flex items-center justify-between pb-1 border-b border-slate-800">
            <span>Sector Telemetry Stream</span>
            <span className="text-[9.5px] text-blue-400 font-mono">Streamlit API</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center p-1.5 bg-slate-950 rounded text-[10.5px]">
              <span className="font-mono text-slate-300">NODE-01 (Hazratganj)</span>
              <span className="text-emerald-400 font-mono">AQI: 58</span>
              <span className="text-slate-400">28°C</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded text-[9px] font-mono">Normal</span>
            </div>
            <div className="flex justify-between items-center p-1.5 bg-slate-950 rounded text-[10.5px]">
              <span className="font-mono text-slate-300">NODE-02 (Gomti Nagar)</span>
              <span className="text-emerald-400 font-mono">AQI: 62</span>
              <span className="text-slate-400">29°C</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded text-[9px] font-mono">Normal</span>
            </div>
            <div className="flex justify-between items-center p-1.5 bg-slate-950 rounded text-[10.5px]">
              <span className="font-mono text-slate-300">NODE-03 (Charbagh)</span>
              <span className="text-amber-400 font-mono">AQI: 112</span>
              <span className="text-slate-400">31°C</span>
              <span className="bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded text-[9px] font-mono">Alert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. LlamaBuddy UI Preview Component
export function LlamaBuddyPreview() {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-xs shadow-xl">
      <div className="bg-slate-800/90 px-3.5 py-2.5 border-b border-slate-700 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <MessageSquare className="text-blue-400 shrink-0" size={14} />
          <span className="font-semibold text-slate-200 text-xs">LlamaBuddy • React Chat UI</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
          <span>Temp: 0.7</span>
        </div>
      </div>

      <div className="p-3.5 space-y-3 bg-slate-950/70">
        <div className="space-y-2.5">
          {/* User Message */}
          <div className="flex items-start gap-2 justify-end">
            <div className="bg-blue-600/30 border border-blue-500/40 text-blue-100 p-2.5 rounded-lg max-w-[85%] text-[11px] leading-relaxed">
              What are the top 3 SQL aggregation functions used in business reporting?
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 text-[10px] font-bold">
              U
            </div>
          </div>

          {/* AI Response */}
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 shrink-0 border border-slate-700">
              <Bot size={13} />
            </div>
            <div className="bg-slate-900 border border-slate-800 text-slate-200 p-2.5 rounded-lg max-w-[88%] text-[11px] space-y-1.5 leading-relaxed">
              <p className="font-medium text-blue-300">Top 3 SQL Aggregation Functions:</p>
              <div className="bg-slate-950 p-2 rounded font-mono text-[10px] text-slate-300 border border-slate-800 space-y-1">
                <div>1. <span className="text-emerald-400">SUM()</span> — Total Revenue & Volume</div>
                <div>2. <span className="text-amber-400">COUNT(DISTINCT)</span> — Unique Customers</div>
                <div>3. <span className="text-blue-400">AVG()</span> — Average Order Value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-400 text-[10.5px]">
            Type a prompt or choose preset...
          </div>
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 text-[10.5px] font-semibold shrink-0">
            <Send size={11} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}

// 4. AI Chatbot Internship Project Preview
export function ChatbotPreview() {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-xs shadow-xl">
      <div className="bg-slate-800/90 px-3.5 py-2.5 border-b border-slate-700 flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="text-emerald-400 shrink-0" size={14} />
          <span className="font-semibold text-slate-200 text-xs">Codveda Internship • Assistant UI</span>
        </div>
        <span className="text-[9.5px] font-mono bg-slate-700 px-2 py-0.5 rounded text-slate-200">HTML/CSS/JS</span>
      </div>

      <div className="p-3.5 bg-slate-950/70 space-y-3">
        <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Status: <span className="text-emerald-400 font-semibold font-mono">Production Tested</span></span>
          <span className="text-slate-400 text-[10px]">Mobile & Desktop</span>
        </div>

        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-[11px] text-slate-300 space-y-2">
          <div className="font-semibold text-slate-100">Internship Deliverables:</div>
          <ul className="space-y-1 text-slate-300 text-[10.5px]">
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Modular Tailwind CSS components with flex layout.
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Smooth message auto-scroll in vanilla JS.
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Clean DOM performance & cross-browser compatibility.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
