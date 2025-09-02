"use client";

const DedicatedSupport = () => {
  return (
    <section className="mt-4 w-full bg-[#0F0F0F] text-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="py-5 flex-1 border border-[rgba(255,255,255,0.06)] rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Dedicated Support</h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          We are here to help get you started with a dedicated support engineer
          who can assist with scoping your first models and getting them deployed.
        </p>

        <h3 className="text-xs text-gray-400 mb-2">WHAT’S INCLUDED</h3>
        <ul className="grid grid-cols-2 gap-3 text-sm text-gray-200">
          <li className="flex items-center gap-2">
            <span className="text-purple-400">✓</span> Shared Slack Channel
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">✓</span> Dedicated Support Engineer
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">✓</span> Prompt Engineering Guidance
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-400">✓</span> Context Sourcing Guidance
          </li>
        </ul>
      </div>

      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(27,27,27,0)_0%,rgba(27,27,27,0.8)_100%),linear-gradient(0deg,rgba(12,10,11,0.5)_0%,rgba(12,10,11,0.5)_100%),radial-gradient(50%_50%_at_50%_50%,rgba(155,126,238,0.2)_0%,rgba(0,0,0,0)_100%)] rounded-xl p-6 w-full md:w-[280px] flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-1 text-purple-400 text-xs font-semibold mb-2">
          <span>＋</span> ADD ON
        </div>
        <h3 className="text-4xl font-bold mb-1">$750</h3>
        <p className="text-gray-400 text-sm mb-4">monthly</p>
        <button className="bg-white text-black font-semibold rounded-full px-6 py-2 hover:opacity-90 transition">
          Request Access
        </button>
        <p className="text-[11px] text-gray-500 mt-2">
          No long term contract obligation.
        </p>
      </div>
    </section>
  );
};

export default DedicatedSupport;
