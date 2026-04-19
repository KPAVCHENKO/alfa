// Main App — loads hero variant from window.__TWEAKS__, wires Tweaks panel

const { useEffect, useState, useRef } = React;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function App() {
  const [variant, setVariant] = useState(window.__TWEAKS__?.heroVariant || 'A');
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useReveal();

  // Tweaks protocol
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setTweaksOpen(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setHero = (v) => {
    setVariant(v);
    window.parent.postMessage({type:'__edit_mode_set_keys', edits:{heroVariant:v}}, '*');
  };

  const Hero = variant === 'B' ? HeroB : variant === 'C' ? HeroC : HeroA;

  return (
    <>
      <Hero key={variant}/>
      <BenefitsSection/>
      <CardsSection/>
      <EarnSection/>
      <TrustSection/>
      <ContactsSection/>
      <FinalCTA/>
      <StickyBar/>
      {tweaksOpen && (
        <div style={{
          position:'fixed',right:16,bottom:84,zIndex:100,
          background:'#fff',border:'1px solid var(--line)',
          borderRadius:16,padding:14,boxShadow:'0 20px 50px rgba(0,0,0,.2)',
          width:230,fontFamily:'inherit'
        }}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'.08em',color:'#6B6B75',marginBottom:8}}>TWEAKS</div>
          <div style={{fontSize:13,fontWeight:600,marginBottom:8}}>Hero-экран</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:6}}>
            {[
              {k:'A', label:'Светлый'},
              {k:'B', label:'С фото'},
              {k:'C', label:'Тёмный'},
            ].map(o => (
              <button key={o.k} onClick={()=>setHero(o.k)} style={{
                padding:'10px 4px',borderRadius:10,
                border: variant===o.k ? '2px solid #EF3124' : '1px solid var(--line)',
                background: variant===o.k ? 'rgba(239,49,36,.06)' : '#fff',
                fontWeight:700,fontSize:12,cursor:'pointer',
                color: variant===o.k ? '#EF3124' : '#111'
              }}>
                <div style={{fontSize:14,marginBottom:2}}>{o.k}</div>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
