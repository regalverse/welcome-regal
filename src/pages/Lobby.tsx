import { useState, useEffect, useRef } from 'react';
import { ZodiacWheel, ConstellationDecoration, MysticKnot } from '@/components/LobbyGraphics';
import './Lobby.css';

export const Lobby = () => {
  const [scrollY, setScrollY] = useState(0);
  const autoScrollTriggered = useRef(false);

  const lastScrollY = useRef(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const isScrollingDown = currentScroll > lastScrollY.current;
      
      setScrollY(currentScroll);
      lastScrollY.current = currentScroll;

      // Check if we can unlock the trigger
      if (autoScrollTriggered.current) {
        // Unlock if roughly at top or bottom (hero/content transition points)
        if (currentScroll < 20 || (currentScroll > windowHeight - 20 && currentScroll < windowHeight + 20)) {
          autoScrollTriggered.current = false;
        }
        return;
      }

      // Downward Trigger: Scrolling Down + Past 20px + Upper Zone
      if (isScrollingDown && currentScroll > 20 && currentScroll < windowHeight / 2) {
        autoScrollTriggered.current = true;
        window.scrollTo({
          top: windowHeight,
          behavior: 'smooth'
        });
      }

      // Upward Trigger: Scrolling Up + Past Bottom-20px + Lower Zone
      if (!isScrollingDown && currentScroll < windowHeight - 20 && currentScroll > windowHeight / 2) {
        autoScrollTriggered.current = true;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FDFBF7] text-[#2D2D2D] font-sans selection:bg-[#C5A028]/20 min-h-screen">
      <div className="fixed top-0 left-0 w-full h-32 nebula-nav-bg pointer-events-none z-40"></div>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
        <div className="nav-pill nav-animate rounded-full px-6 md:px-8 py-3 flex items-center justify-between relative overflow-visible">
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-9 h-9 bg-[#C5A028] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#C5A028]/20">
              <span className="material-symbols-outlined font-light text-lg">auto_awesome</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-[#2D2D2D]">AstroRegal</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10 relative z-10">
            <a className="font-display text-sm italic hover:text-[#C5A028] transition-colors py-1" href="#">Lobby</a>
            <a className="font-display text-sm italic text-[#C5A028] py-1 border-b border-[#C5A028]/30" href="#">KarmaGPT</a>
            <a className="font-display text-sm italic hover:text-[#C5A028] transition-colors py-1" href="#">Wallet</a>
          </div>

          <div className="flex items-center gap-4 md:gap-6 relative z-10">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden w-9 h-9 flex items-center justify-center text-[#2D2D2D] hover:text-[#C5A028] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>

            <div className="hidden sm:flex flex-col items-end">
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#2D2D2D]/40 leading-none mb-1">Seeker</p>
              <p className="text-xs font-bold text-[#2D2D2D] leading-none">Shivani</p>
            </div>
            <div className="user-orbit group cursor-pointer relative z-20">
              <div className="orbit-ring"></div>
              <div className="orbit-node"></div>
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden border-2 border-white shadow-md relative z-10">
                <img alt="Shivani Profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Shivani&background=C5A028&color=fff&size=128" />
              </div>
              <div className="absolute -bottom-1 -right-4 bg-[#2D2D2D] text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full border border-[#C5A028]/30 opacity-0 group-hover:opacity-100 transition-opacity">
                400pts
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full mt-4 p-4 bg-[#FDFBF7] border border-[#C5A028]/20 shadow-2xl rounded-2xl flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-4 fade-in duration-200 z-50">
               <a className="font-display text-lg italic text-[#2D2D2D] hover:text-[#C5A028] transition-colors text-center py-2" href="#">Lobby</a>
               <a className="font-display text-lg italic text-[#C5A028] hover:text-[#C5A028] transition-colors text-center py-2 border-b border-[#C5A028]/10 bg-[#C5A028]/5 rounded-xl" href="#">KarmaGPT</a>
               <a className="font-display text-lg italic text-[#2D2D2D] hover:text-[#C5A028] transition-colors text-center py-2" href="#">Wallet</a>
            </div>
          )}
        </div>
      </nav>
      <main className="relative min-h-screen">

        {/* Fixed Hero Section (Oracle) */}
        <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
             {/* Zodiac Wheel Background */}
            <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0">
                <ZodiacWheel className="text-[#C5A028] spin-slow" />
            </div>

            <section
              className="text-center mb-24 max-w-4xl mx-auto relative z-10 mt-32 transition-all duration-300 ease-out"
              style={{
                opacity: Math.max(0, 1 - scrollY / (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800)),
                transform: `scale(${Math.max(0.8, 1 - scrollY / (typeof window !== 'undefined' ? window.innerHeight * 1.5 : 1500))})`,
                filter: `blur(${Math.min(20, scrollY / 60)}px)`,
                pointerEvents: scrollY > 50 ? 'none' : 'auto'
              }}
            >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#10B981]/5 border border-[#10B981]/10 text-[#047857] text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse"></span>
                Realtime Position
                </div>
                <h1 className="font-display text-6xl md:text-7xl mb-8 italic text-[#2D2D2D] font-medium tracking-tight">Your Personal Oracle</h1>
                <p className="text-[#2D2D2D]/60 text-lg font-light mb-12 italic leading-relaxed">
                KarmaGPT merges ancient wisdom with modern intelligence to decode the universe's unique plan for you. Ask about your career, love, or the current cosmic transits.
                </p>
                <div className="relative group max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-[#C5A028]/10 blur-3xl rounded-full group-focus-within:bg-[#C5A028]/20 transition-all duration-500"></div>
                <div className="relative flex items-center">
                    <input className="w-full bg-white py-6 px-10 rounded-full border-2 border-[#C5A028]/10 focus:border-[#C5A028]/40 focus:ring-0 text-[#2D2D2D] placeholder:text-[#2D2D2D]/30 text-lg italic shadow-xl transition-all search-shadow outline-none" placeholder="Ask the cosmos anything..." type="text" />
                    <button className="absolute right-4 w-12 h-12 bg-[#2D2D2D] text-white rounded-full flex items-center justify-center hover:bg-[#C5A028] transition-all duration-300 cursor-pointer">
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                </div>
                </div>
            </section>
        </div>

        {/* Scrolling Content Overlay */}
        <div className="relative z-10 mt-[100vh] bg-[#FDFBF7] rounded-t-[3rem] pb-20">
             <div className="max-w-7xl mx-auto px-8 pt-24 space-y-24">
                <section className="relative">
                <div className="absolute -right-20 -top-20 w-64 h-48 pointer-events-none z-0 float-slow">
                    <ConstellationDecoration className="text-[#C5A028]" />
                </div>
                <div className="flex items-center gap-3 mb-8 px-2 relative z-10">
                    <span className="material-symbols-outlined text-[#C5A028] text-xl">brightness_4</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]/50">Cosmic Weather</span>
                </div>
                <div className="glass-card p-12 md:p-16 rounded-3xl flex flex-col md:flex-row items-center gap-16 glow-subtle">
                    <div className="relative w-64 h-64 flex-shrink-0">
                    <div className="absolute inset-0 bg-[#C5A028]/15 rounded-full blur-3xl"></div>
                    <img alt="Moon Phase" className="relative z-10 w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-aFuvXT6u-xxCw-viASY1Djc874jkBUSRV3g6d6-nTWWlAYtKgVK6iHf5SrTs9d8YyNTYBfDfq432hUP4hupe9KkkqYIOptfGKg-fpPw9LuNfo2UyPnPbS0U-Np2AiNBvSqGdN0qZ2oiYN0CpQ49Wk79AVKpzbsIbawBBLH3HT_uUXBlytem52tECdgnCszIcrRnWpywTo5VKSH8UMIIYae0HwAZsPcZzR4D0AnFrZaufy0YGhNZEJRBVBGiqzYCKtfqmJfYQswJ" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                    <h2 className="font-display text-5xl md:text-6xl mb-6 italic text-[#2D2D2D] leading-tight">Moon in Scorpio</h2>
                    <p className="text-[#2D2D2D]/70 leading-relaxed max-w-2xl mb-10 text-xl font-light italic">
                        A profound emotional transition begins. This lunar phase invites you to delve into your subconscious depths. Trust the whispers of your intuition; the stars suggest a powerful spiritual breakthrough is within reach.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <span className="px-6 py-2.5 bg-white/60 border border-[#C5A028]/20 text-[#C5A028] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">Nakshatra: Bharani</span>
                        <span className="px-6 py-2.5 bg-white/60 border border-[#C5A028]/20 text-[#C5A028] text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">Rising Sign: Libra</span>
                    </div>
                    </div>
                </div>
                </section>
                <div className="grid md:grid-cols-2 gap-12">
                <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden group glow-subtle">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C5A028]/5 rounded-full blur-3xl"></div>
                    <div className="flex justify-center items-center gap-4 mb-12">
                    <div className="h-px w-8 bg-[#C5A028]/20"></div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]/40">Angel Number</span>
                    <div className="h-px w-8 bg-[#C5A028]/20"></div>
                    </div>
                    <div className="text-9xl font-display text-[#C5A028] mb-10 tracking-tighter italic font-semibold">11:11</div>
                    <p className="text-[#2D2D2D]/60 text-base leading-relaxed max-w-xs mx-auto mb-12 font-light italic">
                    Universal synchronicity is calling. Your thoughts are manifesting rapidly; maintain focus on your highest aspirations.
                    </p>
                    <button className="px-12 py-4 bg-[#2D2D2D] text-white rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#C5A028] transition-all shadow-xl shadow-[#2D2D2D]/10 active:scale-95 cursor-pointer">
                    Claim Blessing
                    </button>
                </div>
                <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden glow-subtle">
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#C5A028]/5 rounded-full blur-3xl"></div>
                    <div className="flex justify-center items-center gap-4 mb-12">
                    <div className="h-px w-8 bg-[#C5A028]/20"></div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]/40">Daily Horoscope</span>
                    <div className="h-px w-8 bg-[#C5A028]/20"></div>
                    </div>
                    <div className="relative w-32 h-32 mx-auto mb-10">
                    <div className="absolute inset-0 bg-[#C5A028]/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10 w-full h-full rounded-full border border-[#C5A028]/20 flex items-center justify-center bg-white/60 p-6 shadow-inner">
                        <span className="material-symbols-outlined text-6xl text-[#C5A028] font-light">article</span>
                    </div>
                    </div>
                    <h3 className="font-display text-3xl mb-4 italic text-[#2D2D2D]">Aries Today</h3>
                    <p className="text-[#2D2D2D]/60 text-base leading-relaxed max-w-xs mx-auto mb-12 font-light italic">
                    Your fiery ambition is tempered by wisdom today. A new opportunity in your professional sphere awaits your bold initiative.
                    </p>
                    <button className="px-12 py-4 border-2 border-[#C5A028]/20 text-[#C5A028] rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#C5A028]/5 transition-all active:scale-95 cursor-pointer">
                    Read More
                    </button>
                </div>
                </div>
                <section className="py-16">
                <div className="flex items-center gap-6 mb-16">
                    <div className="h-px flex-grow bg-[#C5A028]/15"></div>
                    <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#C5A028] text-xl">auto_awesome_motion</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#2D2D2D]/50">The Navgrah Squad</span>
                    </div>
                    <div className="h-px flex-grow bg-[#C5A028]/15"></div>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-10 px-4 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
                    <MysticKnot className="text-[#C5A028]" />
                    </div>
                    {[
                    { name: 'Surya', icon: 'light_mode' },
                    { name: 'Chandra', icon: 'dark_mode' },
                    { name: 'Mangal', icon: 'flare' },
                    { name: 'Budha', icon: 'radio_button_checked' },
                    { name: 'Guru', icon: 'grade' },
                    { name: 'Shukra', icon: 'diamond' },
                    { name: 'Shani', icon: 'hourglass_bottom' },
                    ].map((planet) => (
                    <div key={planet.name} className="text-center group cursor-pointer">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full glass-card flex items-center justify-center group-hover:border-[#C5A028] group-hover:scale-110 transition-all duration-500 shadow-sm planet-illustration">
                        <span className="material-symbols-outlined text-4xl text-[#C5A028]/80 font-light">{planet.icon}</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D2D2D]/50 group-hover:text-[#C5A028] transition-colors">{planet.name}</p>
                    </div>
                    ))}
                </div>
                </section>
                
                {/* New Staggered Cosmic Charts Section */}
                <section>
                  <div className="flex items-center gap-3 mb-16 px-2">
                    <span className="material-symbols-outlined text-[#C5A028] text-xl">account_tree</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]/50">Cosmic Blueprints</span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    
                    {/* Column 1: Birth Chart (Lagna) */}
                    <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                      <div className="w-full aspect-square bg-[#C5A028]/5 rounded-2xl mb-6 relative flex items-center justify-center border border-[#C5A028]/10">
                         <ZodiacWheel className="text-[#C5A028]/40 w-48 h-48 spin-slow" />
                         <div className="absolute inset-0 flex items-center justify-center">
                             <span className="font-display text-4xl text-[#2D2D2D]">Asc</span>
                         </div>
                      </div>
                      <h3 className="font-display text-2xl italic text-[#2D2D2D] mb-2">Birth Chart</h3>
                      <p className="text-xs text-[#2D2D2D]/60 mb-6 leading-relaxed">The Lagna chart. Your soul's map at the exact moment of arrival.</p>
                      <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#C5A028] hover:text-[#2D2D2D] transition-colors cursor-pointer">
                        View Full Chart <span className="material-symbols-outlined text-sm">arrow_outward</span>
                      </button>
                    </div>

                    {/* Column 2: Moon Chart (Pushed Down) */}
                    <div className="glass-card p-8 rounded-3xl md:mt-16 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-full aspect-square bg-[#2D2D2D]/5 rounded-2xl mb-6 relative flex items-center justify-center border border-[#2D2D2D]/10">
                            <div className="absolute inset-0 bg-[#C5A028]/5 rounded-2xl"></div>
                            <ZodiacWheel className="text-[#2D2D2D]/20 w-48 h-48 spin-slow reverse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-display text-4xl text-[#2D2D2D]">Mo</span>
                            </div>
                        </div>
                        <h3 className="font-display text-2xl italic text-[#2D2D2D] mb-2">Moon Chart</h3>
                        <p className="text-xs text-[#2D2D2D]/60 mb-6 leading-relaxed">Chandra Lagna. The lens through which your mind perceives the world.</p>
                        <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#C5A028] hover:text-[#2D2D2D] transition-colors cursor-pointer">
                            View Moon Chart <span className="material-symbols-outlined text-sm">arrow_outward</span>
                        </button>
                    </div>

                    {/* Column 3: Navamsa (D9) */}
                    <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-full aspect-square bg-[#2D2D2D] rounded-2xl mb-6 relative flex items-center justify-center overflow-hidden">
                             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                             <MysticKnot className="text-[#C5A028] w-full h-full opacity-20 scale-150 animate-pulse" />
                             <div className="relative z-10 text-center">
                                 <span className="material-symbols-outlined text-4xl text-[#C5A028] mb-2">grid_view</span>
                                 <div className="text-white font-display text-xl">D9 Chart</div>
                             </div>
                        </div>
                        <h3 className="font-display text-2xl italic text-[#2D2D2D] mb-2">Navamsa</h3>
                        <p className="text-xs text-[#2D2D2D]/60 mb-6 leading-relaxed">The fruit of the tree. Uncover the hidden strength of your planets.</p>
                        <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#C5A028] hover:text-[#2D2D2D] transition-colors cursor-pointer">
                        Analyze D9 <span className="material-symbols-outlined text-sm">arrow_outward</span>
                      </button>
                    </div>

                  </div>
                </section>
                
                <section>
                <div className="flex items-center gap-3 mb-12 px-2">
                    <span className="material-symbols-outlined text-[#C5A028]">water_drop</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#2D2D2D]/50">Daily Drop</span>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                    {
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdKZeN2D-mFjtMiaiPvYKW2dGAo8Ha9aOptoBNnuk5gMBcnGodiJtQTc2s5GnnhdO03jRkZRfYWeiN1oROv6jIQQ4TFkDIHTaBJ7DuYflaTYYIeuD2cEE3nFRwzw5vkF8Tx8j8jClLTAKvPMWX1PbCyvursqpIu2nqfLqOFe0smlJuwgzR70mFapnv28rxSYGvL9qu6O5tR5OKO17YbQRbWSjVsnM97Lou8UUr2N6mO3aPaE7d3xGsIi6f6RYnXHY-_WilWYSt-Fno",
                        quote: "\"Chaotic Good. You're the friend who plans the heist but also packs snacks.\"",
                        likes: "1.2k"
                    },
                    {
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVX5uwSBa76-sJBtJwCZo8DfQ2_s5fkX7Dfcm9IzIUxmB7SHapH99FNr-dOLfCfJ0MZSyJdDx1l9BPGWPDcFFLD8Rm7U5-SB_9WzI5V3JsI-LcanzhMTIMj4gJ52DXGzoS-hUAM6nkT0PjXe2IqgxRFsn7jx-etlAVlrrrUhclaBRqRBKOc9VfJKQHwiZgiCy_NvzX_JIztRwvcAGxute7hdcSI2olPIR6UW2wAFpb6fMnreXo4AhIaHnhArv4g2lWS0Gr_c1hXzND",
                        quote: "\"Retrograde survival kit: Silence, expensive candles, and ignoring all DMs.\"",
                        likes: "892"
                    },
                    {
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvEpzS13wvuOBNv1X5KJsEIpPn3G6-i1tn3W14PgW7lrgFLSR0F1y1NGTY5lMHf18gFZs8fjoj6hfBFIaPPuozT8T46tm3sloB-z1NeO-x6qrPwsKpYouty8YA00nqew8wJbwtTrh8r4HmyYiV9SsoWOs51dBm1rfTDgixZQyoGmKdr9-V7m7Gd-mJ_0_DAVqYBYNWF9ahCJ_Iu0TQG25okwH52TNcImRJMcVncXkF8V2NqXPkSrOu7BEbjqSj2Zyg8gWH66n6Z-J_",
                        quote: "\"Your main character energy is currently fueled by the Jupiter transit.\"",
                        likes: "2.1k"
                    }
                    ].map((item, i) => (
                        <div key={i} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#2D2D2D]/5 border border-white/60">
                        <img alt="Atmospheric" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={item.img} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/90 via-[#2D2D2D]/40 to-transparent"></div>
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                            <p className="text-white text-2xl font-display italic mb-10 leading-snug">{item.quote}</p>
                            <div className="flex items-center justify-between pt-8 border-t border-white/20">
                                <button className="flex items-center gap-2 text-white/90 text-[10px] font-bold tracking-widest uppercase hover:text-[#C5A028] transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-lg">favorite</span> {item.likes}
                                </button>
                                <button className="px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-widest border border-white/20 hover:bg-white hover:text-[#2D2D2D] transition-all cursor-pointer">Share</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </section>
                <section>
                <div className="flex items-center gap-3 mb-8 px-2">
                    <span className="material-symbols-outlined text-[#C5A028] text-xl">calendar_month</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]/50">Celestial Calendar</span>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar -mx-4 px-4">
                    {[
                    { date: 'May 14', icon: 'laundry', title: 'Mercury Retrograde Ends', desc: 'Communication barriers dissolve. Clear your inbox.' },
                    { date: 'May 19', icon: 'nights_stay', title: 'New Moon in Taurus', desc: 'A fertile time for grounding and manifesting abundance.', highlight: true },
                    { date: 'May 21', icon: 'wb_sunny', title: 'Sun Enters Gemini', desc: 'Social energy peaks. Expect sudden invitations.' },
                    { date: 'June 04', icon: 'join_full', title: 'Full Moon in Sag', desc: 'Adventure calls. Release your inner explorer.' },
                    { date: 'June 11', icon: 'star', title: 'Venus in Leo', desc: 'Romance gets theatrical and bold. Shine bright.' },
                    ].map((item, i) => (
                    <div key={i} className={`flex-shrink-0 w-64 glass-card p-8 rounded-3xl transition-transform hover:-translate-y-1 ${item.highlight ? 'border-[#C5A028]/30 shadow-lg shadow-[#C5A028]/5' : ''}`}>
                        <div className="text-[10px] font-bold text-[#C5A028] uppercase tracking-widest mb-4">{item.date}</div>
                        <div className={`w-12 h-12 mb-6 ${item.highlight ? 'bg-[#C5A028]/10' : 'bg-[#C5A028]/5'} rounded-2xl flex items-center justify-center`}>
                        <span className="material-symbols-outlined text-[#C5A028] font-light">{item.icon}</span>
                        </div>
                        <h4 className="font-display text-xl italic text-[#2D2D2D] mb-2 leading-tight">{item.title}</h4>
                        <p className="text-xs text-[#2D2D2D]/50 font-light leading-relaxed">{item.desc}</p>
                    </div>
                    ))}
                </div>
                </section>
                <section>
                <div className="flex items-center gap-3 mb-8 px-2">
                    <span className="material-symbols-outlined text-[#C5A028] text-xl">favorite</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]/50">Cosmic Match</span>
                </div>
                <div className="glass-card p-12 rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#C5A028]/5 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left">
                        <h3 className="font-display text-4xl mb-4 italic text-[#2D2D2D]">Daily Connection</h3>
                        <p className="text-[#2D2D2D]/60 text-lg font-light italic max-w-sm">How your energies align today with Rohan. The stars favor deep conversations and shared visions.</p>
                        <div className="mt-8 flex gap-4">
                        <button className="px-8 py-3 bg-[#2D2D2D] text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A028] transition-all cursor-pointer">View Details</button>
                        <button className="px-8 py-3 border border-[#C5A028]/20 text-[#2D2D2D] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/50 transition-all cursor-pointer">Switch Partner</button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex items-center -space-x-12">
                        <div className="w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-0">
                            <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzpCKF82kBlHaWIAz1vpAdGpsnXOmxWsl9OTEqlrCRwRVCQuUTXD2hUrC2s0j3AporYgsJ-RfpUfbxRfTpGS6jrdwaWdIjVUGjVuCv9aA6bdU51Kdsqj0nFJV9-CxKErgW4DzNGFb4InzboidUl-aNVLAFcoKtUxYOUl7eAL6aEgNnlhmGrU_3bw3P2UZRoD6DIj8_fqq_fJ4wSLep-5K9zpg7WcMSypnS3kKHdBpWCb6YnUTIfN69fhEtctp7zK8sBnv7Da5MQio9" />
                        </div>
                        <div className="w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-10">
                            <img alt="Partner" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdKZeN2D-mFjtMiaiPvYKW2dGAo8Ha9aOptoBNnuk5gMBcnGodiJtQTc2s5GnnhdO03jRkZRfYWeiN1oROv6jIQQ4TFkDIHTaBJ7DuYflaTYYIeuD2cEE3nFRwzw5vkF8Tx8j8jClLTAKvPMWX1PbCyvursqpIu2nqfLqOFe0smlJuwgzR70mFapnv28rxSYGvL9qu6O5tR5OKO17YbQRbWSjVsnM97Lou8UUr2N6mO3aPaE7d3xGsIi6f6RYnXHY-_WilWYSt-Fno" />
                        </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-[#C5A028]/20 flex flex-col items-center justify-center glow-subtle">
                        <span className="text-2xl font-display font-bold text-[#C5A028]">88%</span>
                        <span className="text-[8px] font-bold uppercase tracking-widest text-[#2D2D2D]/40">Sync</span>
                        </div>
                        <div className="absolute inset-0 bg-[#C5A028]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </div>
                    </div>
                </div>
                </section>
                <section>
                <div className="flex items-center gap-3 mb-8 px-2">
                    <span className="material-symbols-outlined text-[#C5A028] text-xl">self_improvement</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]/50">Manifestation Rituals</span>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    {[
                    {
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVX5uwSBa76-sJBtJwCZo8DfQ2_s5fkX7Dfcm9IzIUxmB7SHapH99FNr-dOLfCfJ0MZSyJdDx1l9BPGWPDcFFLD8Rm7U5-SB_9WzI5V3JsI-LcanzhMTIMj4gJ52DXGzoS-hUAM6nkT0PjXe2IqgxRFsn7jx-etlAVlrrrUhclaBRqRBKOc9VfJKQHwiZgiCy_NvzX_JIztRwvcAGxute7hdcSI2olPIR6UW2wAFpb6fMnreXo4AhIaHnhArv4g2lWS0Gr_c1hXzND",
                        tag: "Full Moon Ritual",
                        title: "Lunar Cleansing",
                        steps: ["Charge crystals in moonbeams", "Journal what you release"]
                    },
                    {
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvEpzS13wvuOBNv1X5KJsEIpPn3G6-i1tn3W14PgW7lrgFLSR0F1y1NGTY5lMHf18gFZs8fjoj6hfBFIaPPuozT8T46tm3sloB-z1NeO-x6qrPwsKpYouty8YA00nqew8wJbwtTrh8r4HmyYiV9SsoWOs51dBm1rfTDgixZQyoGmKdr9-V7m7Gd-mJ_0_DAVqYBYNWF9ahCJ_Iu0TQG25okwH52TNcImRJMcVncXkF8V2NqXPkSrOu7BEbjqSj2Zyg8gWH66n6Z-J_",
                        tag: "Daily Habit",
                        title: "Morning Gratitude",
                        steps: ["Light a golden candle", "State 3 positive affirmations"]
                    }
                    ].map((item, i) => (
                    <div key={i} className="glass-card flex flex-col md:flex-row rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-[#C5A028]/5 transition-all">
                        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                        <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={item.img} />
                        <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                        <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <div className="text-[9px] font-bold text-[#C5A028] uppercase tracking-widest mb-4">{item.tag}</div>
                        <h4 className="font-display text-2xl italic text-[#2D2D2D] mb-4 leading-tight">{item.title}</h4>
                        <ul className="space-y-3 mb-8">
                            {item.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs text-[#2D2D2D]/60 font-light italic">
                                <span className="text-[#C5A028] text-[10px] mt-1">0{idx + 1}</span>
                                {step}
                            </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 border border-[#2D2D2D]/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#2D2D2D] hover:text-white transition-all cursor-pointer">Begin Guide</button>
                        </div>
                    </div>
                    ))}
                </div>
                </section>
             </div>
             
             {/* Footer moved inside scrolling container */}
            <footer className="py-20 px-8 border-t border-[#C5A028]/10 relative z-10 bg-white/20 backdrop-blur-sm mt-32">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-5 opacity-60">
                    <div className="w-9 h-9 bg-[#C5A028]/15 rounded-full flex items-center justify-center text-[#C5A028]">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2D2D2D]">© AstroRegal. All cosmic alignments reserved.</span>
                </div>
                <div className="flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2D2D2D]/40">
                    <a className="hover:text-[#C5A028] transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-[#C5A028] transition-colors" href="#">Terms of Service</a>
                    <a className="hover:text-[#C5A028] transition-colors" href="#">Support</a>
                </div>
                </div>
            </footer>
        </div>
      </main>
    </div>
  );
};
