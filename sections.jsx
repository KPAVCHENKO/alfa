// Sections: benefits, cards, earn, trust, contacts, final CTA, sticky bar

const Section = ({children, bg, style}) => (
  <section style={{background:bg, ...style}}>{children}</section>
);

const BenefitsSection = () => {
  const items = [
    {icon:<IconCashback/>, title:'Кэшбэк', sub:'за повседневные покупки', color:'#EF3124'},
    {icon:<IconLightning/>, title:'Быстро', sub:'оформление онлайн', color:'#FF8A3D'},
    {icon:<IconShield/>, title:'Надёжно', sub:'крупнейший частный банк', color:'#10B67A'},
    {icon:<IconTrendUp/>, title:'Доход', sub:'на рекомендациях', color:'#6B5BFF'},
  ];
  return (
    <Section bg="#fff" style={{paddingTop:10}}>
      <div className="reveal">
        <div className="eyebrow"><span className="dot"/>ПОЧЕМУ «СВОЙ АЛЬФА»</div>
        <h2>Быстрые выгоды</h2>
      </div>
      <div className="reveal stagger" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:6}}>
        {items.map((it,i)=>(
          <div key={i} className="benefit-card" style={{'--d':`${i*70}ms`}}>
            <div className="benefit-ico" style={{background:`${it.color}15`, color:it.color}}>{it.icon}</div>
            <div style={{fontWeight:700,fontSize:15,letterSpacing:'-.01em',marginTop:10}}>{it.title}</div>
            <div style={{fontSize:13,color:'#6B6B75',marginTop:2}}>{it.sub}</div>
          </div>
        ))}
      </div>
      <style>{`
        .benefit-card{
          background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px;
          transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .benefit-card:hover,.benefit-card:active{
          transform:translateY(-2px);border-color:#e0e0e6;box-shadow:var(--shadow-md);
        }
        .benefit-ico{width:40px;height:40px;border-radius:12px;display:grid;place-items:center}
      `}</style>
    </Section>
  );
};

const CardsSection = () => {
  const perks = [
    {i:<IconWallet size={18}/>, t:'Бесплатное обслуживание', d:'навсегда и без условий'},
    {i:<IconSparkle size={18}/>, t:'Суперкэшбэк в барабане', d:'40, 60 и даже 100% в случайной категории каждый месяц'},
    {i:<IconCashback size={18}/>, t:'Кэшбэк до 30%', d:'в категориях на выбор'},
    {i:<IconMobile size={18}/>, t:'Бесплатное снятие наличных', d:'в любых банкоматах и платежи без комиссии'},
  ];
  return (
    <Section bg="linear-gradient(180deg,#FFF7F5 0%, #fff 100%)">
      <div className="reveal">
        <div className="eyebrow"><span className="dot"/>КАРТЫ</div>
        <h2>Подберите карту<br/>под себя</h2>
        <p className="lead">Дебетовые и кредитные карты Альфа-Банка — удобство, выгода и контроль финансов в одном приложении.</p>
      </div>

      {/* Award banner */}
      <div className="reveal" style={{
        marginTop:14,marginBottom:14,
        display:'flex',alignItems:'center',gap:12,
        padding:'12px 14px',borderRadius:14,
        background:'linear-gradient(135deg,#FFF3C6 0%, #FFE9A8 100%)',
        border:'1px solid #F4D781'
      }}>
        <span style={{
          width:40,height:40,borderRadius:11,flexShrink:0,
          background:'linear-gradient(135deg,#F5B100,#D48A00)',color:'#fff',
          display:'grid',placeItems:'center',
          boxShadow:'0 6px 14px rgba(213,138,0,.35)'
        }}>
          <IconStar size={20} stroke={2.4}/>
        </span>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:13,fontWeight:800,letterSpacing:'-.01em',color:'#6B4A00',lineHeight:1.25}}>
            Лучшая дебетовая карта в России
          </div>
          <div style={{fontSize:11.5,color:'#8A6A1F',lineHeight:1.35,marginTop:2}}>
            Frank Debit Cards & Daily Banking Award 2025
          </div>
        </div>
      </div>

      {/* Product hero card */}
      <div className="reveal" style={{marginBottom:18}}>
        <div style={{
          position:'relative',borderRadius:22,overflow:'hidden',
          background:'linear-gradient(160deg,#FFE2DE 0%, #FFF7F5 55%, #fff 100%)',
          padding:'20px 18px 4px',
          border:'1px solid #FFE0DB',
          boxShadow:'0 20px 40px rgba(239,49,36,.12)'
        }}>
          <div aria-hidden style={{position:'absolute',top:-40,right:-40,width:180,height:180,borderRadius:'50%',
            background:'radial-gradient(circle,rgba(239,49,36,.22),transparent 65%)'}}/>
          <div style={{position:'relative'}}>
            <div style={{fontSize:11,letterSpacing:'.08em',color:'#EF3124',fontWeight:700,marginBottom:6}}>ДЕБЕТОВАЯ</div>
            <div style={{fontSize:24,fontWeight:800,letterSpacing:'-.02em',marginBottom:4,color:'#111'}}>Альфа-Карта</div>
            <div style={{fontSize:14,color:'#3A3A42',lineHeight:1.4,marginBottom:8}}>
              Кэшбэк до <b style={{color:'#EF3124'}}>100%</b> · бесплатное обслуживание
            </div>
            <div style={{display:'flex',justifyContent:'center',padding:'4px 0'}}>
              <div style={{width:'62%'}}>
                <AlfaCard tilt={-3}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits list */}
      <ul className="reveal stagger" style={{listStyle:'none',padding:0,margin:'0 0 18px',display:'grid',gap:10}}>
        {perks.map((x,i)=>(
          <li key={i} style={{
            display:'flex',gap:12,alignItems:'flex-start',
            padding:'12px 14px',
            background:'#fff',border:'1px solid var(--line)',borderRadius:14,
            '--d':`${i*70}ms`,
            transition:'transform .15s ease, box-shadow .2s ease, border-color .2s ease'
          }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor='#FFCFC7';e.currentTarget.style.boxShadow='var(--shadow-md)'}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--line)';e.currentTarget.style.boxShadow='none'}}>
            <span style={{width:36,height:36,borderRadius:10,background:'rgba(239,49,36,.1)',color:'#EF3124',display:'grid',placeItems:'center',flexShrink:0,marginTop:1}}>{x.i}</span>
            <div style={{minWidth:0,flex:1}}>
              <div style={{fontWeight:700,fontSize:14.5,lineHeight:1.3,color:'#111'}}>{x.t}</div>
              <div style={{fontSize:13,color:'#6B6B75',lineHeight:1.4,marginTop:2}}>{x.d}</div>
            </div>
          </li>
        ))}
      </ul>

      <a className="btn btn-primary reveal" href={CARD_LINK} target="_blank" rel="noopener">
        Оформить карту сейчас <IconArrow size={18}/>
      </a>
    </Section>
  );
};

const EarnSection = () => {
  const steps = [
    {i:<IconLink size={20}/>, t:'Получаете свою ссылку', d:'После регистрации в «Свой Альфа»'},
    {i:<IconShare size={20}/>, t:'Делитесь с друзьями', d:'Или в соцсетях — любым удобным способом'},
    {i:<IconWallet size={20}/>, t:'Получаете деньги', d:'За каждое оформление — вознаграждение'},
  ];
  return (
    <Section bg="#0D0D0F" style={{color:'#fff',borderRadius:0}}>
      <div className="reveal">
        <div className="eyebrow" style={{color:'#FFB3AC',background:'rgba(239,49,36,.18)'}}>
          <span className="dot"/>ЗАРАБОТОК
        </div>
        <h2 style={{color:'#fff'}}>Зарабатывайте<br/>без вложений</h2>
        <p className="lead" style={{color:'rgba(255,255,255,.7)'}}>
          Вы рекомендуете банковские продукты — и получаете вознаграждение за каждое оформление.
        </p>
      </div>
      <ol className="reveal stagger" style={{listStyle:'none',padding:0,margin:'18px 0 0',display:'grid',gap:10}}>
        {steps.map((s,i)=>(
          <li key={i} style={{
            position:'relative',
            padding:'16px 16px 16px 60px',
            background:'rgba(255,255,255,.04)',
            border:'1px solid rgba(255,255,255,.08)',
            borderRadius:16,
            '--d':`${i*90}ms`,
            transition:'background .2s ease, transform .15s ease, border-color .2s ease'
          }}
          onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,.07)'}
          onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,.04)'}>
            <span style={{
              position:'absolute',left:14,top:14,
              width:36,height:36,borderRadius:10,
              background:'linear-gradient(135deg,#EF3124,#B31A10)',
              display:'grid',placeItems:'center',color:'#fff',
              boxShadow:'0 6px 14px rgba(239,49,36,.4)'
            }}>{s.i}</span>
            <div style={{fontWeight:700,fontSize:15,letterSpacing:'-.01em'}}>
              <span style={{color:'#FF6B5B',marginRight:6}}>0{i+1}</span>{s.t}
            </div>
            <div style={{fontSize:13,color:'rgba(255,255,255,.65)',marginTop:3}}>{s.d}</div>
          </li>
        ))}
      </ol>
      <div className="reveal" style={{display:'flex',gap:10,flexWrap:'wrap',margin:'18px 0 18px'}}>
        {['Без опыта','Без вложений','Можно начать сегодня'].map((t,i)=>(
          <span key={i} style={{
            display:'inline-flex',alignItems:'center',gap:6,
            padding:'8px 12px',borderRadius:999,
            background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)',
            fontSize:12.5,fontWeight:600
          }}>
            <IconCheck size={12} stroke={3} color="#10B67A"/>{t}
          </span>
        ))}
      </div>
      <a className="btn btn-primary reveal" href={PARTNER_LINK} target="_blank" rel="noopener">
        Стать партнёром <IconArrow size={18}/>
      </a>
    </Section>
  );
};

const TrustSection = () => (
  <Section bg="#fff">
    <div className="reveal" style={{marginBottom:16}}>
      <div className="eyebrow"><span className="dot"/>ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ</div>
      <h2 style={{fontSize:26,margin:'0 0 10px'}}>Людмила, ваш партнёр</h2>
    </div>
    <p className="reveal" style={{color:'#3A3A42',fontSize:15,margin:'0 0 16px'}}>
      Помогу разобраться, подобрать лучший вариант и отвечу на все вопросы — без сложностей и навязывания.
    </p>
    <div className="reveal stagger" style={{display:'grid',gap:10}}>
      {[
        {i:<IconTarget size={18}/>, t:'Помощь в выборе', d:'Подберём продукт под ваши задачи'},
        {i:<IconHeadset size={18}/>, t:'Быстрая связь', d:'Отвечаю в Telegram в течение дня'},
        {i:<IconSparkle size={18}/>, t:'Индивидуальный подход', d:'Без шаблонов и навязывания'},
      ].map((x,i)=>(
        <div key={i} style={{
          display:'flex',gap:12,alignItems:'flex-start',
          padding:'14px 14px',border:'1px solid var(--line)',borderRadius:14,
          '--d':`${i*70}ms`,
          transition:'border-color .2s ease, background .2s ease'
        }}
        onMouseEnter={e=>{e.currentTarget.style.borderColor='#FFCFC7';e.currentTarget.style.background='#FFF9F7'}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--line)';e.currentTarget.style.background='transparent'}}>
          <span style={{width:32,height:32,borderRadius:9,background:'rgba(239,49,36,.1)',color:'#EF3124',display:'grid',placeItems:'center',flexShrink:0,marginTop:2}}>{x.i}</span>
          <div style={{minWidth:0,flex:1}}>
            <div style={{fontWeight:700,fontSize:14.5,lineHeight:1.3}}>{x.t}</div>
            <div style={{fontSize:13,color:'#6B6B75',marginTop:3,lineHeight:1.35}}>{x.d}</div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const ContactsSection = () => (
  <Section bg="linear-gradient(180deg,#FFF7F5 0%, #fff 100%)">
    <div className="reveal">
      <div className="eyebrow"><span className="dot"/>КОНТАКТЫ</div>
      <h2>Остались вопросы?<br/>Напишите или позвоните</h2>
      <p className="lead">Отвечу быстро и помогу оформить всё без лишних сложностей.</p>
    </div>
    <div className="reveal stagger" style={{display:'grid',gap:10,marginTop:16}}>
      <a href={`tel:${TEL}`} className="contact-card" style={{'--d':'0ms'}}>
        <span className="contact-ico" style={{background:'rgba(239,49,36,.1)',color:'#EF3124'}}>
          <IconPhone size={22}/>
        </span>
        <div style={{flex:1}}>
          <div style={{fontSize:12,color:'#6B6B75',fontWeight:600,letterSpacing:'.02em'}}>Позвонить</div>
          <div style={{fontWeight:700,fontSize:17,letterSpacing:'-.01em'}}>+7 (922) 004-36-21</div>
        </div>
        <IconArrow size={18} color="#6B6B75"/>
      </a>
      <a href={TG} target="_blank" rel="noopener" className="contact-card" style={{'--d':'80ms'}}>
        <span className="contact-ico" style={{background:'rgba(36,160,230,.12)',color:'#24A0E6'}}>
          <IconTelegram size={22}/>
        </span>
        <div style={{flex:1}}>
          <div style={{fontSize:12,color:'#6B6B75',fontWeight:600,letterSpacing:'.02em'}}>Telegram</div>
          <div style={{fontWeight:700,fontSize:17,letterSpacing:'-.01em'}}>@Ludm125</div>
        </div>
        <IconArrow size={18} color="#6B6B75"/>
      </a>
    </div>
    <style>{`
      .contact-card{
        display:flex;align-items:center;gap:14px;
        padding:14px 16px;background:#fff;
        border:1px solid var(--line);border-radius:16px;
        transition:transform .15s ease, box-shadow .2s ease, border-color .2s ease;
      }
      .contact-card:hover{transform:translateY(-1px);box-shadow:var(--shadow-md);border-color:#e0e0e6}
      .contact-card:active{transform:scale(.99)}
      .contact-ico{width:46px;height:46px;border-radius:12px;display:grid;place-items:center;flex-shrink:0}
    `}</style>
  </Section>
);

const FinalCTA = () => (
  <Section bg="#fff" style={{paddingBottom:24}}>
    <div className="reveal" style={{
      position:'relative',overflow:'hidden',
      borderRadius:24,padding:'26px 22px 24px',
      background:'radial-gradient(120% 100% at 0% 0%, #FFE2DE 0%, transparent 55%), linear-gradient(180deg,#fff 0%, #FFF7F5 100%)',
      border:'1px solid #FFE0DB'
    }}>
      <div aria-hidden style={{position:'absolute',right:-40,top:-40,width:160,height:160,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(239,49,36,.3),transparent 65%)'}}/>
      <div style={{position:'relative'}}>
        <div className="eyebrow"><span className="dot"/>НАЧНИТЕ СЕГОДНЯ</div>
        <h2 style={{fontSize:26}}>Не откладывайте — начните сейчас</h2>
        <p className="lead">Оформление займёт всего пару минут, а выгоду вы будете получать уже с первых дней.</p>
        <div style={{display:'flex',justifyContent:'center',margin:'8px 0 14px'}}>
          <img src="alfa-card-glow.png" alt=""
               style={{width:'78%',maxWidth:280,height:'auto',display:'block',
                 filter:'drop-shadow(0 20px 36px rgba(239,49,36,.35))',
                 animation:'finalFloat 6s ease-in-out infinite'}} loading="lazy"/>
        </div>
        <div style={{display:'grid',gap:10}}>
          <a className="btn btn-primary" href={CARD_LINK} target="_blank" rel="noopener">
            Оформить карту <IconArrow size={18}/>
          </a>
          <a className="btn btn-dark" href={PARTNER_LINK} target="_blank" rel="noopener">
            Стать партнёром
          </a>
        </div>
      </div>
    </div>
    <div style={{textAlign:'center',color:'#8D8D96',fontSize:11.5,marginTop:22,lineHeight:1.5}}>
      Партнёр программы «Свой Альфа» · Людмила · 1177186
    </div>
    <style>{`@keyframes finalFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`}</style>
  </Section>
);

const StickyBar = () => (
  <div className="sticky-bar-wrap">
    <div className="sticky-bar reveal in">
      <a href={`tel:${TEL}`} className="call">
        <IconPhone size={17}/> Позвонить
      </a>
      <a href={TG} target="_blank" rel="noopener" className="tg">
        <IconTelegram size={17}/> Telegram
      </a>
    </div>
  </div>
);

Object.assign(window, { BenefitsSection, CardsSection, EarnSection, TrustSection, ContactsSection, FinalCTA, StickyBar });
