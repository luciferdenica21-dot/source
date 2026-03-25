import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const BackButton = ({ variant = 'dark' }) => {
  const navigate = useNavigate();
  const baseStyles = "inline-flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest transition-all group px-4 py-2 rounded-lg";
  const colors = variant === 'light' 
    ? "text-white hover:bg-white hover:text-brand-dark" 
    : "text-brand-dark hover:bg-brand-dark hover:text-white";

  return (
    <button onClick={() => navigate(-1)} className={`${baseStyles} ${colors}`}>
      <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
    </button>
  );
};

const CoursePopup = ({ isOpen, onClose }) => {
  const [courseRegistered, setCourseRegistered] = useState(false);
  if (!isOpen) return null;

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    setCourseRegistered(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 backdrop-blur-3xl bg-brand-dark/60 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/50 relative my-auto animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => { onClose(); setCourseRegistered(false); }}
          className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center bg-brand-magenta text-white rounded-full shadow-lg hover:bg-brand-dark transition-all hover:rotate-90 z-10"
        >✕</button>
        
        {!courseRegistered ? (
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 uppercase">Join Online Course</h3>
            <form onSubmit={handleRegistrationSubmit} className="space-y-6 md:space-y-8 text-left">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-40 font-bold">Name</label>
                <input required type="text" className="w-full border-b-2 border-brand-dark/10 py-3 md:py-4 focus:outline-none focus:border-brand-magenta transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest opacity-40 font-bold">Email</label>
                <input required type="email" className="w-full border-b-2 border-brand-dark/10 py-3 md:py-4 focus:outline-none focus:border-brand-magenta transition-all font-medium" />
              </div>
              <button type="submit" className="w-full bg-brand-brown text-white py-4 md:py-6 rounded-full font-bold uppercase tracking-[0.3em] hover:bg-brand-magenta transition-all shadow-xl">Start Course →</button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-green/20 rounded-full mx-auto mb-8 md:mb-10 flex items-center justify-center">
              <span className="text-3xl md:text-4xl">🎉</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 uppercase leading-tight">Congratulations! You now have 3 days access to SOURCE.</h3>
            <p className="text-base md:text-lg opacity-60 mb-8 md:mb-10 leading-relaxed font-medium">You will receive instructions in your inbox in a few minutes.</p>
            <button 
              onClick={() => { onClose(); setCourseRegistered(false); }}
              className="text-brand-magenta font-bold uppercase tracking-widest border-b-2 border-brand-magenta/30 hover:border-brand-magenta transition-all text-sm md:text-base"
            >Close Window</button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 md:px-10 pb-8 md:pb-12 pt-2 md:pt-4 overflow-hidden text-brand-dark">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-lime/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-brand-green/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-brand-magenta/5 rounded-full blur-[120px] -z-10"></div>

      <h1 className="text-5xl md:text-7xl font-medium mb-6 md:mb-10 opacity-80 text-center tracking-tight leading-tight uppercase">Welcome to source</h1>
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {/* Left Content Block */}
        <div className="bg-white/30 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/40 shadow-xl space-y-6 md:space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl mb-3 font-medium uppercase border-b border-brand-dark/10 pb-4">Introduction and what is this about</h2>
            <p className="text-base md:text-lg opacity-80 leading-relaxed mb-4 font-medium">3 Signature Topics text</p>
            <ul className="space-y-3 text-lg md:text-xl font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-lime rounded-full shadow-sm"></span>
                From Survival to Thriving
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-green rounded-full shadow-sm"></span>
                Clarity Beneath the Surface
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-magenta rounded-full shadow-sm"></span>
                Female Agency in Systems
              </li>
            </ul>
            <Link to="/about" className="group inline-flex items-center gap-3 mt-6 md:mt-8 text-lg font-bold">
              <span className="border-b-2 border-brand-dark/20 group-hover:border-brand-magenta transition-colors uppercase">About me</span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-brown text-white group-hover:bg-brand-dark transition-all duration-300 group-hover:translate-x-1 shadow-md">
                <span className="">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Content Blocks */}
        <div className="space-y-4 md:space-y-6">
          <div className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-500 hover:bg-brand-magenta hover:text-white group overflow-hidden">
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-brand-magenta rounded-full shadow-lg border-4 border-white/20 z-10"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase relative z-10 border-b border-white/10 pb-2">For individuals</h3>
            <ul className="space-y-3 text-base md:text-lg opacity-90 list-inside font-bold relative z-10">
              <li><Link to="/online-course" className="hover:opacity-100 transition-opacity group-hover:text-white/90 block py-1">• Online course →</Link></li>
              <li><Link to="/coaching" className="hover:opacity-100 transition-opacity group-hover:text-white/90 block py-1">• 1:1 coaching →</Link></li>
              <li><Link to="/agency" className="hover:opacity-100 transition-opacity group-hover:text-white/90 block py-1">• Agency Cycle →</Link></li>
              <li><Link to="/money" className="hover:opacity-100 transition-opacity group-hover:text-white/90 block py-1">• Money Money course →</Link></li>
              <li><Link to="/calendar" className="hover:opacity-100 transition-opacity group-hover:text-white/90 block py-1">• Community →</Link></li>
            </ul>
          </div>

          <div className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-500 hover:bg-brand-green hover:text-white group overflow-hidden">
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-brand-green rounded-full shadow-lg border-4 border-white/20 z-10"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase relative z-10 border-b border-white/10 pb-2">For organisations</h3>
            <ul className="space-y-3 text-base md:text-lg opacity-90 list-inside font-bold relative z-10">
              <li><Link to="/dei" className="hover:opacity-100 transition-opacity group-hover:text-white/90 block py-1">• DEI activities / simulations / workshops →</Link></li>
              <li><Link to="/team" className="hover:opacity-100 transition-opacity group-hover:text-white/90 block py-1">• Team change / growth / transformation →</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => (
  <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-white text-brand-dark">
    <div className="max-w-6xl mx-auto">
      <BackButton />
      
      <div className="space-y-16">
        {/* Intro Header */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 md:gap-6">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <h1 className="text-4xl md:text-6xl font-medium uppercase">About me</h1>
          </div>
          
          <div className="text-lg md:text-xl leading-relaxed opacity-90 block">
            <div className="float-right ml-12 mb-10 w-full md:w-[400px] relative group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
                <img src="/about.png" alt="About" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>
            
            <p className="font-bold text-2xl md:text-3xl leading-tight mb-8">I work at the intersection of human systems, organisational change, and embodied awareness.</p>
            <p className="mb-8">My professional path began in complex industrial environments — in large-scale projects, operational excellence programmes, and organisational transformations. For more than a decade I have supported international teams in navigating uncertainty, aligning around purpose, and turning strategy into deliberate action.</p>
            <p className="mb-8">Over time I became increasingly interested not only in what organisations do, but in how people experience themselves while doing it.</p>
            <p className="mb-8">Clarity, ownership, and the capacity to act are not only structural matters — they are deeply personal.</p>
            <p className="mb-8">This led me to integrate my corporate experience with coaching, gestalt-based approaches, and body-oriented work.</p>
            
            <p className="mb-6">Today I support professionals and leaders who want to:</p>
            <ul className="space-y-3 pl-4 mb-8">
              <li>• think clearly in complexity</li>
              <li>• restore a sense of inner grounding</li>
              <li>• take responsibility without overwhelm</li>
              <li>• make intentional decisions aligned with their values</li>
              <li>• move from survival mode to meaningful contribution</li>
            </ul>
            <p>My work creates a structured yet human space where insight becomes possible and change becomes sustainable.</p>
          </div>
        </div>

        {/* Detailed Text Sections */}
        <div className="space-y-12 text-lg md:text-xl leading-relaxed opacity-80 max-w-6xl">
          <div className="border-t border-brand-dark/10 pt-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Professional background</h2>
            <div className="space-y-6">
              <p>I have worked in international energy and industrial organisations in roles connected to:</p>
              <ul className="space-y-3 pl-4">
                <li>• operational excellence and performance culture</li>
                <li>• project and programme management</li>
                <li>• change leadership and transformation initiatives</li>
                <li>• capability development and cross-functional collaboration</li>
              </ul>
              <p>This experience allows me to understand the real pressures professionals face: tight timelines, competing priorities, organisational politics, and the invisible emotional load of responsibility.</p>
              <p>Because of this, my coaching is practical, grounded, and context-aware.</p>
            </div>
          </div>

          <div className="border-t border-brand-dark/10 pt-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Coaching approach</h2>
            <div className="space-y-6">
              <p>My approach combines:</p>
              <ul className="space-y-3 pl-4">
                <li>• Gestalt coaching principles</li>
                <li>• systemic and organisational thinking</li>
                <li>• embodiment and voice work</li>
                <li>• reflective inquiry and structured experimentation</li>
              </ul>
              <p>I do not offer quick fixes or motivational pressure. Instead, I support clients in developing agency — the ability to see clearly, choose consciously, and act with integrity.</p>
              <p>This process often brings:</p>
              <ul className="space-y-3 pl-4">
                <li>• increased confidence and professional presence</li>
                <li>• better decision-making under pressure</li>
                <li>• healthier boundaries</li>
                <li>• renewed connection to meaning and direction</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-dark/10 pt-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Who I work with</h2>
            <div className="space-y-6">
              <p>I primarily work with:</p>
              <ul className="space-y-3 pl-4">
                <li>• professionals and experts in international organisations</li>
                <li>• women in periods of transition or growth</li>
                <li>• leaders navigating complexity and responsibility</li>
                <li>• people who seek depth, clarity, and sustainable change</li>
              </ul>
              <p>Sessions and programmes are offered in English and Russian.</p>
            </div>
          </div>

          <div className="border-t border-brand-dark/10 pt-12 space-y-8 pb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">What matters to me</h2>
            <div className="space-y-6">
              <p>I believe that real development happens when:</p>
              <ul className="space-y-3 pl-4">
                <li>• thinking and sensing are connected</li>
                <li>• structure and humanity are balanced</li>
                <li>• performance does not exclude wellbeing</li>
                <li>• responsibility grows together with inner stability</li>
              </ul>
              <p>My intention is to create environments — in organisations and in individual work — where people can restore clarity, strengthen ownership, and act deliberately.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 pt-12 font-bold uppercase tracking-widest text-xs md:text-sm border-t border-brand-dark/10">
          <a href="#" className="block border-b border-brand-dark/10 w-fit pb-2 hover:border-brand-magenta transition-colors">link to linked in</a>
          <a href="#" className="block border-b border-brand-dark/10 w-fit pb-2 hover:border-brand-magenta transition-colors">link to insta</a>
        </div>
      </div>
    </div>
  </div>
);

const DEIActivities = () => (
  <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-[#F5F5F5] text-brand-dark">
    <div className="max-w-6xl mx-auto">
      <BackButton />
      <div className="p-8 md:p-16 bg-white rounded-2xl md:rounded-[3rem] shadow-sm border border-brand-dark/5">
         <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-10">
           <img src="/logo.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0" />
           <h3 className="text-3xl md:text-6xl font-bold leading-tight uppercase">DEI activities / simulations / workshops</h3>
         </div>
         <div className="md:ml-24 space-y-6">
            <ul className="space-y-3 md:space-y-4 text-lg md:text-2xl opacity-70 list-disc list-inside leading-relaxed">
              <li>Description of the process and the goals</li>
              <li>Who can participate</li>
            </ul>
            <button className="mt-8 md:mt-10 w-full md:w-auto px-8 md:px-10 py-3 md:py-4 bg-brand-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-green transition-all shadow-lg text-sm md:text-base">Learn More & Contact</button>
         </div>
      </div>
    </div>
  </div>
);

const TeamChange = () => (
  <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-[#F5F5F5] text-brand-dark">
    <div className="max-w-6xl mx-auto">
      <BackButton />
      <div className="p-8 md:p-16 bg-white rounded-2xl md:rounded-[3rem] shadow-sm border border-brand-dark/5">
         <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-8 md:mb-10">
           <img src="/logo.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0" />
           <h3 className="text-3xl md:text-6xl font-bold leading-tight uppercase">Team change / growth / transformation work</h3>
         </div>
         <div className="md:ml-24 space-y-6">
            <ul className="space-y-3 md:space-y-4 text-lg md:text-2xl opacity-70 list-disc list-inside leading-relaxed">
              <li>Description of the process and the goals</li>
              <li>Who can participate</li>
            </ul>
            <button className="mt-8 md:mt-10 w-full md:w-auto px-8 md:px-10 py-3 md:py-4 bg-brand-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-green transition-all shadow-lg text-sm md:text-base">Learn More & Contact</button>
         </div>
      </div>
    </div>
  </div>
);

const OnlineCoursePage = () => {
  const [showCoursePopup, setShowCoursePopup] = useState(false);
  return (
    <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 relative overflow-hidden text-brand-dark">
      <div className="absolute inset-0 -z-10">
        <img src="/onlinecourse.jpg" alt="Online Course Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      </div>
      <CoursePopup isOpen={showCoursePopup} onClose={() => setShowCoursePopup(false)} />
      <div className="max-w-6xl mx-auto">
        <BackButton />
        <div className="bg-white/60 backdrop-blur-xl p-10 md:p-20 rounded-2xl md:rounded-[4rem] border border-white/50 shadow-2xl text-center">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto mb-8 md:mb-10" />
          <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 tracking-tight leading-tight uppercase">Online course</h2>
          <ul className="space-y-4 md:space-y-6 text-lg md:text-2xl opacity-80 mb-10 md:mb-16 leading-relaxed">
            <li>Description of the process and the goals</li>
            <li>Who can participate</li>
            <li className="text-brand-magenta font-bold">Start your course <span className="opacity-40">→ click below to register</span></li>
          </ul>
          <button 
            onClick={() => setShowCoursePopup(true)}
            className="bg-brand-brown text-white px-10 md:px-16 py-4 md:py-6 rounded-full text-lg md:text-xl font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-brand-magenta transition-all shadow-2xl"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CoachingPage = () => (
  <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 relative overflow-hidden text-brand-dark">
    <div className="absolute inset-0 -z-10">
      <img src="/couching.jpg" alt="Coaching Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
    </div>
    <div className="max-w-6xl mx-auto">
      <BackButton />
      <div className="bg-white/60 backdrop-blur-xl p-10 md:p-16 rounded-2xl md:rounded-[3rem] border border-white/50 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
            <h3 className="text-3xl md:text-5xl font-bold uppercase">1:1 coaching</h3>
          </div>
          <p className="text-lg md:text-xl opacity-70 mb-8 leading-relaxed">contracting (text with roles, responsibilities, logistics)</p>
        </div>
        <a href="#" className="text-base md:text-lg font-bold border-b-2 border-brand-magenta/30 w-fit pb-2 hover:border-brand-magenta transition-all">Contact me for chemistry chat → email / WhatsApp</a>
      </div>
    </div>
  </div>
);

const AgencyCyclePage = () => (
  <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-[#EBE7E4] text-brand-dark">
    <div className="max-w-6xl mx-auto">
      <BackButton />
      <div className="relative p-10 md:p-16 rounded-2xl md:rounded-[3rem] overflow-hidden text-brand-dark shadow-sm bg-white border border-brand-dark/5">
        <div className="absolute inset-0 -z-10">
           <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80" alt="Shiny" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <h3 className="text-4xl md:text-5xl font-bold uppercase">Agency Cycle</h3>
        </div>
        <ul className="space-y-3 text-lg md:text-xl opacity-80 mb-10 md:mb-12 font-medium">
          <li>Description of the process and the goals</li>
          <li>Who can participate</li>
          <li className="text-brand-magenta font-bold border-b border-brand-magenta/30 w-fit">Dates in English</li>
          <li className="text-brand-magenta font-bold border-b border-brand-magenta/30 w-fit">Dates in Russian</li>
        </ul>
        <a href="#" className="text-base md:text-lg font-bold border-b-2 border-brand-dark/40 hover:border-brand-magenta transition-all">Join introduction session → click to join</a>
      </div>
    </div>
  </div>
);

const MoneyCoursePage = () => (
  <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 relative overflow-hidden text-brand-dark">
    <div className="absolute inset-0 -z-10">
      <img src="/money.png" alt="Money Course Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
    </div>
    <div className="max-w-6xl mx-auto text-center">
      <BackButton />
      <div className="bg-white/60 backdrop-blur-xl p-10 md:p-20 rounded-2xl md:rounded-[4rem] border border-white/50 shadow-2xl">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto mb-8 md:mb-10" />
        <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight leading-tight uppercase">Money Money course</h2>
        <ul className="space-y-3 md:space-y-4 text-xl md:text-2xl opacity-80 mb-10 md:mb-12">
          <li>Description of the process and the goals</li>
          <li>Who can participate</li>
        </ul>
        <button className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-brand-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-magenta transition-all shadow-xl text-sm md:text-base">Contact for Details</button>
      </div>
    </div>
  </div>
);

const MyAccount = ({ isLoggedIn, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'source' && password === '123') {
      onLogin();
      setError('');
    } else {
      setError('Invalid username or password. Hint: source / 123');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-[#EBE7E4] text-brand-dark">
        <div className="max-w-6xl mx-auto text-center">
          <BackButton />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 underline decoration-brand-lime decoration-4 underline-offset-8 leading-tight uppercase">Welcome back!</h1>
          <p className="text-base md:text-lg opacity-60 font-medium leading-relaxed">You are now logged in to your account.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-brand-dark text-white text-center flex items-center justify-center">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl p-8 md:p-14 rounded-2xl md:rounded-[3rem] text-white shadow-2xl border border-white/20 relative">
        <div className="absolute top-8 left-8">
          <BackButton variant="light" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 underline decoration-brand-magenta decoration-4 underline-offset-8 uppercase">My Account</h2>
        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 uppercase">Log In</h3>
        {error && (
          <div className="bg-red-500/20 text-red-200 text-[11px] md:text-[12px] p-4 md:p-5 rounded-xl md:rounded-2xl mb-8 md:mb-10 border border-red-500/30 font-bold uppercase tracking-wider text-left">
            {error}
          </div>
        )}
        {!error && (
          <div className="bg-blue-500/20 text-blue-200 text-[10px] md:text-[11px] p-3 md:p-4 rounded-xl md:rounded-2xl mb-8 md:mb-10 border border-blue-500/30 font-medium text-left">
            Hint: source / 123
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-6 md:space-y-8 text-left">
          <div className="space-y-2 md:space-y-3">
            <label className="text-xs opacity-40 font-bold uppercase tracking-widest text-white">Username</label>
            <input 
              required
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl focus:outline-none focus:border-brand-magenta transition-all font-medium text-base md:text-lg text-white" 
            />
          </div>
          <div className="space-y-2 md:space-y-3">
            <label className="text-xs opacity-40 font-bold uppercase tracking-widest text-white">Password</label>
            <input 
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border-2 border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl focus:outline-none focus:border-brand-magenta transition-all font-medium text-base md:text-lg text-white" 
            />
          </div>
          <button type="submit" className="w-full bg-brand-brown text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-magenta transition-all shadow-xl hover:-translate-y-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

const CalendarEvents = () => {
  const events = [
    { date: "MAR 28", title: "Live Somatic Workshop", type: "Zoom Session", time: "18:00 GMT" },
    { date: "APR 05", title: "Agency Cycle Kickoff", type: "English Group", time: "19:30 GMT" },
    { date: "APR 12", title: "Money Money Masterclass", type: "Workshop", time: "17:00 GMT" }
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-[#EBE7E4] text-brand-dark">
      <div className="max-w-6xl mx-auto">
        <BackButton />
        <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-20 underline decoration-brand-lime decoration-8 underline-offset-8 leading-tight uppercase">Calendar / Events</h1>
        <div className="space-y-6 md:space-y-8">
          {events.map((event, i) => (
            <div key={i} className="bg-white p-8 md:p-12 rounded-xl md:rounded-[2rem] shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
              <div className="w-full md:w-auto">
                <span className="text-brand-magenta font-bold tracking-widest text-xs md:text-sm uppercase border-b-2 border-brand-magenta/30">{event.date}</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 uppercase">{event.title}</h3>
                <p className="opacity-60 font-medium mt-1 text-sm md:text-base">{event.type} • {event.time}</p>
              </div>
              <button className="w-full md:w-auto bg-brand-brown text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-green transition-all text-sm md:text-base">Book Spot</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-40 pt-8 md:pt-12 px-6 md:px-10 bg-white text-brand-dark">
      <div className="max-w-6xl mx-auto text-center">
        <BackButton />
        <h1 className="text-4xl md:text-6xl font-bold mb-8 md:mb-10 underline decoration-brand-magenta decoration-8 underline-offset-8 leading-tight uppercase">Feedback</h1>
        <p className="text-xl md:text-2xl opacity-60 mb-12 md:mb-20 font-medium leading-relaxed">We value your insights on individual product pages and sessions.</p>
        <div className="mt-20 md:mt-32 p-10 md:p-16 bg-brand-dark text-white rounded-2xl md:rounded-[3rem]">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 uppercase">Leave your feedback</h2>
          <form className="space-y-4 md:space-y-6 text-left">
            <textarea placeholder="Tell us about your experience..." className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 focus:outline-none focus:border-brand-lime transition-all resize-none text-base md:text-lg"></textarea>
            <button className="w-full md:w-auto bg-brand-lime text-brand-dark px-10 md:px-12 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all text-sm md:text-base">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Layout & Main App ---

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative pb-16 md:pb-20">
      <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-4 md:py-6 flex justify-between items-center bg-[#EBE7E4]/90 backdrop-blur-md border-b border-brand-dark/5 text-brand-dark shadow-sm">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 text-2xl md:text-3xl font-bold uppercase tracking-tighter hover:text-brand-magenta transition-colors">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          SOURCE
        </Link>
        <div className="flex gap-4 md:gap-8 font-bold uppercase tracking-widest text-[10px] md:text-xs items-center">
          <Link to="/account" className="bg-brand-magenta text-white px-4 md:px-6 py-2 rounded-full hover:bg-brand-dark transition-all shadow-md">Account</Link>
        </div>
      </nav>
      
      <main className="flex-grow pt-16 md:pt-20">{children}</main>
      
      <footer className="fixed bottom-0 w-full z-50 px-4 md:px-10 py-3 md:py-4 bg-[#EBE7E4]/90 backdrop-blur-md border-t border-brand-dark/5 text-brand-dark shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center gap-6 md:gap-10">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40">Policy & Terms</h4>
            <ul className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-magenta transition-all border-b border-transparent hover:border-brand-magenta">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-magenta transition-all border-b border-transparent hover:border-brand-magenta">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
            © 2026 SOURCE GROWTH STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/dei" element={<DEIActivities />} />
          <Route path="/team" element={<TeamChange />} />
          <Route path="/online-course" element={<OnlineCoursePage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/agency" element={<AgencyCyclePage />} />
          <Route path="/money" element={<MoneyCoursePage />} />
          <Route path="/calendar" element={<CalendarEvents />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/account" element={<MyAccount isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;