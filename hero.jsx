// Hero variants A, B, C

const CARD_LINK = "https://alfabank.ru/lp/retail/dc/flexible-agent/?platformId=alfapartners_msv_DC-flexible_1177186_3469097&utm_source=alfapartners&utm_medium=msv&utm_term=DC-flexible&utm_campaign=1177186be&utm_content=alfapartners_msv_DC-flexible_1177186_3469097";
const PARTNER_LINK = "https://svoy.alfabank.ru/ref/1177186";
const TEL = "+79220043621";
const TG = "https://t.me/Ludm125";

// Product photo: Alfa card + rouble coin + "кэшбэк" sticker (transparent PNG)
const AlfaCard = ({ tilt=0, onDark=false }) => (
  <div style={{
    position:'relative', width:'100%',
    transform:`rotate(${tilt}deg)`,
    filter: onDark
      ? 'drop-shadow(0 20px 28px rgba(239,49,36,.45)) drop-shadow(0 6px 14px rgba(0,0,0,.4))'
      : 'drop-shadow(0 18px 28px rgba(239,49,36,.25)) drop-shadow(0 6px 14px rgba(0,0,0,.1))',
  }}>
    <img src="alfa-card-hero.png" alt="Альфа-Карта с кэшбэком"
         style={{width:'100%',height:'auto',display:'block'}} loading="lazy"/>
  </div>
);

// HERO A: bold red with floating card
const HeroA = () => (
  <div style={{position:'relative', padding:'22px 20px 28px', overflow:'hidden',
    background:'radial-gradient(120% 80% at 80% -10%, #FFE2DE 0%, transparent 55%), linear-gradient(180deg,#fff 0%, #FFF7F5 100%)'}}>
    {/* floating blobs */}
    <div aria-hidden style={{position:'absolute',top:-60,right:-60,width:220,height:220,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(239,49,36,.18),transparent 65%)',filter:'blur(6px)'}}/>
    <TopBar />
    <div className="reveal in" style={{marginTop:18}}>
      <div className="eyebrow"><span className="dot"/>ПАРТНЁР АЛЬФА-БАНКА</div>
      <h1 style={{fontSize:34,lineHeight:1.02,letterSpacing:'-.03em',fontWeight:800,margin:'0 0 12px'}}>
        Оформите карту<br/>
        <span style={{background:'linear-gradient(90deg,#EF3124,#FF6B5B)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>с выгодой</span><br/>
        или начните<br/>зарабатывать
      </h1>
      <p style={{color:'#3A3A42',fontSize:15.5,margin:'0 0 18px',maxWidth:'36ch'}}>
        Кэшбэк, бонусы и удобный банк — или доход на рекомендациях без вложений.
      </p>
    </div>
    <div className="reveal in" style={{marginTop:18,position:'relative',perspective:1000}}>
      <div style={{transform:'translateZ(0)'}}>
        <div style={{width:'78%',margin:'0 auto 20px'}}>
          <div style={{animation:'float 6s ease-in-out infinite'}}>
            <AlfaCard tilt={-6}/>
          </div>
        </div>
      </div>
    </div>
    <div className="reveal in stagger" style={{display:'grid',gap:10,marginTop:6}}>
      <a className="btn btn-primary" href={CARD_LINK} target="_blank" rel="noopener" style={{'--d':'0ms'}}>
        Оформить карту <IconArrow size={18}/>
      </a>
      <a className="btn btn-dark" href={PARTNER_LINK} target="_blank" rel="noopener" style={{'--d':'80ms'}}>
        Стать партнёром
      </a>
    </div>
    <TrustRow/>
    <style>{`
      @keyframes float { 0%,100%{transform:translateY(0) rotate(-6deg)} 50%{transform:translateY(-8px) rotate(-4deg)} }
    `}</style>
  </div>
);

// HERO B: banner with product photo
const HeroB = () => (
  <div style={{position:'relative',overflow:'hidden'}}>
    <div style={{padding:'22px 20px 0'}}>
      <TopBar />
    </div>
    <div style={{position:'relative',margin:'18px 20px 0',borderRadius:22,overflow:'hidden',
      background:'linear-gradient(160deg,#FFE2DE 0%, #FFF7F5 60%, #fff 100%)',
      border:'1px solid #FFE0DB',
      boxShadow:'0 20px 40px rgba(239,49,36,.15)'}}>
      <div aria-hidden style={{position:'absolute',top:-60,right:-60,width:220,height:220,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(239,49,36,.25),transparent 65%)'}}/>
      <div style={{position:'relative',padding:'20px 18px 10px',display:'flex',justifyContent:'center'}}>
        <div style={{width:'70%'}}>
          <AlfaCard tilt={-3}/>
        </div>
      </div>
      <div style={{position:'absolute',left:18,top:18}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.7)',backdropFilter:'blur(10px)',padding:'6px 10px',borderRadius:999,fontSize:11,fontWeight:700,letterSpacing:'.08em',color:'#EF3124'}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:'#EF3124',boxShadow:'0 0 0 3px rgba(239,49,36,.3)'}}/>
          ПАРТНЁР АЛЬФА-БАНКА
        </div>
      </div>
    </div>
    <div style={{padding:'22px 20px 4px'}}>
      <h1 className="reveal in" style={{fontSize:32,lineHeight:1.05,letterSpacing:'-.03em',fontWeight:800,margin:'0 0 12px'}}>
        Оформите карту <span style={{color:'#EF3124'}}>с выгодой</span> или начните зарабатывать онлайн
      </h1>
      <p className="reveal in" style={{color:'#3A3A42',fontSize:15.5,margin:'0 0 18px'}}>
        Получите кэшбэк, бонусы и удобный банк — или зарабатывайте на рекомендациях без вложений.
      </p>
      <div className="reveal in stagger" style={{display:'grid',gap:10}}>
        <a className="btn btn-primary" href={CARD_LINK} target="_blank" rel="noopener">Оформить карту <IconArrow size={18}/></a>
        <a className="btn btn-dark" href={PARTNER_LINK} target="_blank" rel="noopener">Стать партнёром</a>
      </div>
      <TrustRow/>
    </div>
  </div>
);

// HERO C: premium dark with card
const HeroC = () => (
  <div style={{
    position:'relative',overflow:'hidden',color:'#fff',
    background:'radial-gradient(130% 90% at 100% 0%, #2A1512 0%, #0D0D0F 55%)',
    padding:'22px 20px 30px'
  }}>
    {/* glow blob */}
    <div aria-hidden style={{position:'absolute',top:-80,right:-80,width:280,height:280,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(239,49,36,.45),transparent 65%)'}}/>
    <TopBar dark />
    <div className="reveal in" style={{marginTop:22,position:'relative'}}>
      <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.08)',padding:'6px 10px',borderRadius:999,fontSize:11,fontWeight:700,letterSpacing:'.08em',color:'#FFB3AC'}}>
        <span style={{width:6,height:6,borderRadius:'50%',background:'#EF3124',boxShadow:'0 0 0 3px rgba(239,49,36,.3)'}}/>
        ПАРТНЁР АЛЬФА-БАНКА
      </div>
      <h1 style={{fontSize:36,lineHeight:1.02,letterSpacing:'-.03em',fontWeight:800,margin:'14px 0 12px'}}>
        Карта с выгодой<br/>
        <span style={{background:'linear-gradient(90deg,#FF6B5B,#EF3124)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>
          или доход онлайн
        </span>
      </h1>
      <p style={{color:'rgba(255,255,255,.72)',fontSize:15.5,margin:'0 0 20px'}}>
        Кэшбэк, бонусы и удобный банк — или зарабатывайте на рекомендациях без вложений.
      </p>
    </div>
    <div className="reveal in" style={{width:'76%',margin:'0 auto 22px',animation:'floatC 6s ease-in-out infinite'}}>
      <AlfaCard tilt={-4} onDark/>
    </div>
    <div className="reveal in stagger" style={{display:'grid',gap:10}}>
      <a className="btn btn-primary" href={CARD_LINK} target="_blank" rel="noopener">Оформить карту <IconArrow size={18}/></a>
      <a className="btn" href={PARTNER_LINK} target="_blank" rel="noopener"
         style={{background:'rgba(255,255,255,.1)',color:'#fff',border:'1.5px solid rgba(255,255,255,.18)'}}>
        Стать партнёром
      </a>
    </div>
    <TrustRow dark/>
    <style>{`@keyframes floatC{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-10px) rotate(-2deg)}}`}</style>
  </div>
);

const TopBar = ({dark=false}) => (
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <div style={{
        width:36,height:36,borderRadius:10,
        background:'#EF3124',color:'#fff',display:'grid',placeItems:'center',
        fontWeight:900,fontSize:22,lineHeight:1,
        boxShadow:'0 6px 16px rgba(239,49,36,.35)'
      }}>α</div>
      <div>
        <div style={{fontWeight:800,fontSize:14.5,letterSpacing:'-.01em',color:dark?'#fff':'#111'}}>Свой Альфа</div>
        <div style={{fontSize:11,color:dark?'rgba(255,255,255,.6)':'#6B6B75'}}>Людмила · партнёр</div>
      </div>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:4,fontSize:12,color:dark?'rgba(255,255,255,.7)':'#6B6B75'}}>
      <span style={{width:6,height:6,borderRadius:'50%',background:'#10B67A',boxShadow:'0 0 0 3px rgba(16,182,122,.22)'}}/>
      На связи
    </div>
  </div>
);

const TrustRow = ({dark=false}) => (
  <ul className="reveal in stagger" style={{listStyle:'none',padding:0,margin:'18px 0 0',display:'grid',gap:8,fontSize:13.5}}>
    {[
      'Онлайн оформление за несколько минут',
      'Без визита в банк',
      'Поддержка на каждом этапе'
    ].map((t,i)=>(
      <li key={i} style={{display:'flex',alignItems:'center',gap:10,color:dark?'rgba(255,255,255,.85)':'#3A3A42','--d':`${i*60}ms`}}>
        <span style={{
          width:20,height:20,borderRadius:'50%',
          background: dark ? 'rgba(16,182,122,.2)' : 'rgba(16,182,122,.14)',
          color:'#10B67A',display:'grid',placeItems:'center',flexShrink:0
        }}>
          <IconCheck size={13} stroke={2.6}/>
        </span>
        {t}
      </li>
    ))}
  </ul>
);

Object.assign(window, { HeroA, HeroB, HeroC, AlfaCard, TopBar, TrustRow, CARD_LINK, PARTNER_LINK, TEL, TG });
