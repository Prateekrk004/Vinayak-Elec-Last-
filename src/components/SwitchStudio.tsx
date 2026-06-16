/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

export default function SwitchStudio() {
  const [plateColor, setPlateColor] = useState('charcoal');
  const [switchColor, setSwitchColor] = useState('piano-black');
  const [wallTexture, setWallTexture] = useState('dark-slate');
  const [ledIndicatorActive, setLedIndicatorActive] = useState(true);

  // Switch keys triggers
  const [switch1Active, setSwitch1Active] = useState(true);
  const [switch2Active, setSwitch2Active] = useState(false);

  const plates = [
    { id: 'charcoal', name: 'Charcoal Grey', cssBg: '#1e293b' },
    { id: 'gold', name: 'Brushed Gold', cssBg: 'linear-gradient(135deg, #d4af37, #aa7c11)' },
    { id: 'marble', name: 'Carrara Marble', cssBg: '#e2e8f0', isMarble: true },
    { id: 'wood', name: 'Walnut Wood', cssBg: 'linear-gradient(135deg, #8b4513, #5c2c16)' },
    { id: 'white', name: 'Crystal White', cssBg: '#f8fafc' }
  ];

  const slotSwitches = [
    { id: 'piano-black', name: 'Piano Black', cssBg: '#0f172a' },
    { id: 'satin-silver', name: 'Satin Silver', cssBg: '#cbd5e1' },
    { id: 'pearl-white', name: 'Pearl White', cssBg: '#ffffff' }
  ];

  const walls = [
    { id: 'dark-slate', name: 'Dark Slate Wall', cssBg: '#0b1120' },
    { id: 'teal-accent', name: 'Teal Painted Wall', cssBg: '#042f24' },
    { id: 'concrete', name: 'Industrial Concrete', cssBg: '#3f4e61' },
    { id: 'warm-beige', name: 'Warm Beige', cssBg: '#c9bdae' }
  ];

  // Compile prefilled WhatsApp text from actual customer configuration
  const handleSendConfiguration = () => {
    const selectedPlate = plates.find(p => p.id === plateColor)?.name || plateColor;
    const selectedKeys = slotSwitches.find(s => s.id === switchColor)?.name || switchColor;
    const selectedWall = walls.find(w => w.id === wallTexture)?.name || wallTexture;

    const boldIntro = `Hello Vinayaka Electrical Palace, I'm visiting your website and have an inquiry. Below is my custom modular switchboard configuration customized in your virtual Switch Studio:`;
    const formattedText = `${boldIntro}\n\n` +
                          `⚙️ *Plate Finish:* ${selectedPlate}\n` +
                          `🔑 *Switch Keys Finish:* ${selectedKeys}\n` +
                          `🏠 *Visual Wall Texture:* ${selectedWall}\n` +
                          `💡 *Neon LED Status:* ${ledIndicatorActive ? 'Enabled ●' : 'Disabled ○'}\n` +
                          `🔌 *Switch 1 Position:* ${switch1Active ? 'Switched ON (Light Active)' : 'OFF'}\n` +
                          `🔌 *Switch 2 Position:* ${switch2Active ? 'ON' : 'OFF'}`;

    const storeNumber = '917411279019';
    const finalUrl = `https://wa.me/${storeNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(finalUrl, '_blank');
  };

  // Switchboard Background dynamic classes
  const getPlateClass = () => {
    switch (plateColor) {
      case 'gold':
        return 'bg-gradient-to-br from-[#dfc059] to-[#8d6b13] border-[#d4af37]/40 shadow-inner text-white';
      case 'marble':
        return 'bg-slate-100 bg-[radial-gradient(circle_at_30%_20%,rgba(200,200,200,0.3)_0%,transparent_60%)] border-slate-300 text-[#0f172a] shadow-inner font-semibold';
      case 'wood':
        return 'bg-gradient-to-br from-[#814620] to-[#41200d] border-amber-900/40 text-stone-200 shadow-inner';
      case 'white':
        return 'bg-gradient-to-br from-[#fcfdfe] to-[#e2e8f0] border-slate-300 text-[#0f172a] shadow-md';
      case 'charcoal':
      default:
        return 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-white/10 text-white shadow-inner';
    }
  };

  // Switch Key colors dynamic structures
  const getSwitchInnerClass = () => {
    switch (switchColor) {
      case 'satin-silver':
        return 'bg-gradient-to-b from-[#f1f5f9] to-[#cbd5e1] border-white/60 text-slate-800';
      case 'pearl-white':
        return 'bg-gradient-to-b from-[#ffffff] to-[#f1f5f9] border-white/80 text-slate-900';
      case 'piano-black':
      default:
        return 'bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-white/5 text-slate-200';
    }
  };

  // Socket Core colors dynamic
  const getSocketClass = () => {
    switch (switchColor) {
      case 'satin-silver':
        return 'bg-[#cbd5e1] text-slate-700';
      case 'pearl-white':
        return 'bg-[#ffffff] text-slate-600';
      case 'piano-black':
      default:
        return 'bg-[#0f172a] text-slate-500';
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" id="switch-studio">
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_75%)] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-color)] font-['Outfit'] font-semibold text-[0.9rem] uppercase tracking-[0.15em] block mb-3">Interactive Innovation</span>
          <h2 className="text-[2.25rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-4 text-[var(--text-primary)]">
            GM Modular Switch Studio
          </h2>
          <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[640px] mx-auto leading-relaxed">
            Experience luxury design in real-time. Customize modular switch plates, choose switch finishes, toggle the indicator glows, and visualize how they light up a luxury room environment.
          </p>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">
          {/* Controls Box */}
          <div className="rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md p-8 shadow-lg z-10">
            <h4 className="text-[1.5rem] font-bold text-[var(--accent-gold)] font-['Outfit'] mb-2">Studio Customizer</h4>
            <p className="text-[0.85rem] text-[var(--text-muted)] mb-6">Click the options below to customize your switchboard mockup:</p>
            
            {/* Color Plate Swatches */}
            <div className="mb-6 border-b border-[var(--border-color)] pb-5">
              <label className="block font-['Outfit'] font-semibold text-[0.95rem] text-[var(--text-primary)] mb-3 uppercase tracking-wider">Plate Finish</label>
              <div className="flex flex-wrap gap-3">
                {plates.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPlateColor(p.id)}
                    className={`w-[38px] h-[38px] rounded-[var(--radius-sm)] border-2 transition-all duration-200 cursor-pointer transform hover:scale-110 shadow-sm
                      ${plateColor === p.id ? 'border-[var(--primary-color)] scale-110 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'border-transparent'}
                    `}
                    style={{
                      background: p.isMarble 
                        ? 'radial-gradient(circle at 30% 20%, #ffffff 0%, #e2e8f0 70%)'
                        : p.cssBg
                    }}
                    title={p.name}
                  />
                ))}
              </div>
              <span className="block mt-2 text-[0.8rem] text-[var(--text-muted)] font-medium">Selected: {plates.find(p => p.id === plateColor)?.name}</span>
            </div>

            {/* Switch Swatches */}
            <div className="mb-6 border-b border-[var(--border-color)] pb-5">
              <label className="block font-['Outfit'] font-semibold text-[0.95rem] text-[var(--text-primary)] mb-3 uppercase tracking-wider">Switch Keys Finish</label>
              <div className="flex flex-wrap gap-3">
                {slotSwitches.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSwitchColor(s.id)}
                    className={`w-[38px] h-[38px] rounded-[var(--radius-sm)] border-2 transition-all duration-200 cursor-pointer transform hover:scale-110 shadow-sm
                      ${switchColor === s.id ? 'border-[var(--primary-color)] scale-110 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'border-transparent'}
                    `}
                    style={{ background: s.cssBg }}
                    title={s.name}
                  />
                ))}
              </div>
              <span className="block mt-2 text-[0.8rem] text-[var(--text-muted)] font-medium">Selected: {slotSwitches.find(s => s.id === switchColor)?.name}</span>
            </div>

            {/* Wall Textures */}
            <div className="mb-6 border-b border-[var(--border-color)] pb-5">
              <label className="block font-['Outfit'] font-semibold text-[0.95rem] text-[var(--text-primary)] mb-3 uppercase tracking-wider">Wall Background</label>
              <div className="flex flex-wrap gap-3">
                {walls.map(w => (
                  <button
                    key={w.id}
                    onClick={() => setWallTexture(w.id)}
                    className={`w-[38px] h-[38px] rounded-[var(--radius-sm)] border-2 transition-all duration-200 cursor-pointer transform hover:scale-110 shadow-sm
                      ${wallTexture === w.id ? 'border-[var(--primary-color)] scale-110 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'border-transparent'}
                    `}
                    style={{ background: w.cssBg }}
                    title={w.name}
                  />
                ))}
              </div>
              <span className="block mt-2 text-[0.8rem] text-[var(--text-muted)] font-medium">Selected: {walls.find(w => w.id === wallTexture)?.name}</span>
            </div>

            {/* LED Glow Toggles */}
            <div className="mb-8 flex items-center justify-between">
              <label className="font-['Outfit'] font-semibold text-[0.95rem] text-[var(--text-primary)] uppercase tracking-wider" htmlFor="ledGlowToggle">Switch LED Indicator</label>
              <label className="relative inline-block w-[52px] h-[28px] cursor-pointer">
                <input
                  type="checkbox"
                  id="ledGlowToggle"
                  className="sr-only peer"
                  checked={ledIndicatorActive}
                  onChange={(e) => setLedIndicatorActive(e.target.checked)}
                />
                <span className="absolute top-0 left-0 right-0 bottom-0 bg-[var(--border-color)] border border-[var(--border-color)] transition-all duration-300 rounded-[34px] after:content-[''] after:absolute after:h-[20px] after:w-[20px] after:left-[3px] after:bottom-[3px] after:bg-[var(--text-primary)] after:transition-all after:duration-300 after:rounded-full peer-checked:bg-[var(--primary-color)] peer-checked:after:translate-x-[24px]"></span>
              </label>
            </div>

            <button
              onClick={handleSendConfiguration}
              className="bg-[var(--whatsapp-green)] text-white w-full py-3.5 rounded-[var(--radius-sm)] font-['Outfit'] font-semibold text-[1rem] flex items-center justify-center gap-2.5 hover:bg-[var(--whatsapp-hover)] shadow-md hover:-translate-y-0.5 transition-all outline-none cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Send Configuration</span>
            </button>
          </div>

          {/* Interactive Visual Output rendering */}
          <div
            className="rounded-[var(--radius-lg)] h-[380px] xs:h-[450px] sm:h-[500px] lg:h-[560px] border border-[var(--border-color)] relative overflow-hidden flex flex-col justify-center items-center shadow-2xl transition-all duration-500 z-1"
            style={{ backgroundColor: walls.find(w => w.id === wallTexture)?.cssBg }}
          >
            {/* Ambient Ceiling Lights Cone */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[250px] sm:h-[400px] pointer-events-none z-1 filter blur-[24px] transition-all duration-500"
              style={{
                opacity: switch1Active ? 0.35 : 0,
                background: 'radial-gradient(circle, rgba(253, 224, 71, 0.4) 0%, transparent 70%)'
              }}
            ></div>

            {/* Ceiling pendant graphic */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
              <div className="w-[2px] h-12 xs:h-16 sm:h-20 bg-[#1e293b]"></div>
              <div className="w-[40px] xs:w-[50px] h-[24px] xs:h-[30px] bg-[#0f172a] rounded-t-[20px] border border-[#d4af37]"></div>
              {/* Lamp light cone visual */}
              <div
                className="w-0 h-0 border-l-[100px] sm:border-l-[140px] border-l-transparent border-r-[100px] sm:border-r-[140px] border-r-transparent border-b-[200px] sm:border-b-[300px] border-b-yellow-200/50 filter blur-[10px] transform-origin-top transition-all duration-300"
                style={{ opacity: switch1Active ? 0.9 : 0 }}
              ></div>
            </div>

            {/* Switchboard board rendering */}
            <div className="relative z-20 mt-16 xs:mt-24 sm:mt-[120px]">
              {/* Soft board drop shadow */}
              <div className="absolute top-2 bottom-[-15px] left-3 right-3 bg-black/60 filter blur-xl pointer-events-none rounded-xl"></div>
              
              <div className={`w-[260px] xs:w-[290px] h-[130px] xs:h-[145px] rounded-xl p-4 xs:p-[24px_22px] flex flex-col justify-between border transition-all duration-300 ${getPlateClass()}`}>
                <div className="text-center text-[0.62rem] xs:text-[0.65rem] font-['Outfit'] font-bold tracking-[0.25em] opacity-45 select-none">
                  VINAYAKA | GM
                </div>

                <div className="grid grid-cols-3 gap-3.5 xs:gap-4.5 h-[62px] xs:h-[72px]">
                  {/* Switch 1 */}
                  <button
                    onClick={() => setSwitch1Active(!switch1Active)}
                    className="bg-[var(--bg-switch-slot)] rounded-lg p-[3px] border border-white/5 cursor-pointer shadow-inner relative select-none outline-none"
                    aria-label="Toggle Custom Switch 1"
                  >
                    <div className={`w-full h-full rounded-md relative transition-all duration-200 shadow-md ${getSwitchInnerClass()} ${switch1Active ? 'transform translate-y-0.5 shadow-sm' : ''}`}>
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/30"></div>
                      <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full transition-all duration-200
                        ${ledIndicatorActive ? 'opacity-100' : 'opacity-0'}
                        ${switch1Active && ledIndicatorActive ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-blue-900'}
                      `}></div>
                    </div>
                  </button>

                  {/* Switch 2 */}
                  <button
                    onClick={() => setSwitch2Active(!switch2Active)}
                    className="bg-[var(--bg-switch-slot)] rounded-lg p-[3px] border border-white/5 cursor-pointer shadow-inner relative select-none outline-none"
                    aria-label="Toggle Custom Switch 2"
                  >
                    <div className={`w-full h-full rounded-md relative transition-all duration-200 shadow-md ${getSwitchInnerClass()} ${switch2Active ? 'transform translate-y-0.5 shadow-sm' : ''}`}>
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/30"></div>
                      <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full transition-all duration-200
                        ${ledIndicatorActive ? 'opacity-100' : 'opacity-0'}
                        ${switch2Active && ledIndicatorActive ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-blue-900'}
                      `}></div>
                    </div>
                  </button>

                  {/* Socket Aperture Unit */}
                  <div className="bg-[var(--bg-switch-slot)] rounded-lg p-[3px] border border-white/5">
                    <div className={`w-full h-full rounded-md flex flex-col items-center justify-center gap-2 py-2 shadow-inner transition-all duration-200 ${getSocketClass()}`}>
                      <div className="w-[7px] h-[7px] bg-black rounded-full shadow-inner"></div>
                      <div className="flex justify-center gap-3.5 w-full">
                        <div className="w-[5px] h-[5px] bg-black rounded-full shadow-inner"></div>
                        <div className="w-[5px] h-[5px] bg-black rounded-full shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-6 font-medium text-[0.8rem] sm:text-[0.85rem] text-[var(--text-secondary)] flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[var(--border-color)] select-none">
              <i className="fa-solid fa-hand-pointer animate-pulse text-[var(--accent-gold)]"></i>
              <span>Click the switch keys to toggle lighting!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
