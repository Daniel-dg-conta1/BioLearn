import React, { useState } from 'react';
import { NAV_ITEMS, CURRENT_USER, DASHBOARD_STATS, MODULES, GLOSSARY_TERMS, NEWS_ITEMS, DISCUSSIONS } from './constants';
import { Module, Term, Question } from './types';

// Icons using Material Symbols
const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const Sidebar = ({ currentScreen, setScreen }: { currentScreen: string, setScreen: (s: string) => void }) => {
  return (
    <aside className="w-64 h-full bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 flex-col hidden md:flex z-20 shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary/20 p-2 rounded-lg text-green-800 dark:text-primary">
          <Icon name="biotech" className="text-3xl" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">BioLearn</h1>
          <p className="text-xs text-text-sub dark:text-gray-400">Portal do Aluno</p>
        </div>
      </div>
      <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setScreen(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all w-full text-left
              ${currentScreen === item.id 
                ? 'bg-primary text-slate-900 shadow-sm' 
                : 'text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5'
              }`}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer">
          <div 
            className="w-10 h-10 rounded-full bg-cover bg-center" 
            style={{ backgroundImage: `url('${CURRENT_USER.avatar}')` }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white">{CURRENT_USER.name}</span>
            <span className="text-xs text-text-sub dark:text-gray-400">{CURRENT_USER.role}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <section className="@container">
        <div className="flex flex-col md:flex-row gap-6 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 items-center">
          <div className="w-full md:w-1/3 aspect-video rounded-xl bg-cover bg-center overflow-hidden relative group" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3ZPBnxDrGbNJluvoJZlwjKmqlTzqKZ_0mmwyL2Ryjq3Wzufc6ylN2X-t0yLX319_NvsX4spcFp_KpHSBKXEZHryV2xDY5MaxuB3Cd0i84ezdZAL3oQp7YQhorq_lm4_9Y2vVnVb26AvgTI5E1g6aTSZ7ZEz0xrnzA95YIhY8NXoUF-qq0pRVxJNR0qB3F3vINi2bFgftwSypJxOELcZhtHSwEh5ZtUh0Fp8q6dAdjjTZJdi7K6OGzway39SUSNZAFQbD6CbKdB4A')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider bg-primary/90 text-slate-900 px-2 py-1 rounded">Em Andamento</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4 text-left">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-2">Bem-vinda de volta, {CURRENT_USER.name.split(' ')[0]}!</h1>
              <p className="text-text-sub dark:text-gray-400 text-lg">
                Você parou em <span className="text-slate-900 dark:text-white font-semibold">'Respiração Celular'</span>. Pronta para explorar como as células geram energia?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-green-400 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-primary/20">
                <Icon name="play_arrow" />
                Continuar Módulo
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white font-medium rounded-lg transition-colors">
                <Icon name="quiz" />
                Fazer Quiz
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DASHBOARD_STATS.map((stat, idx) => (
          <div key={idx} className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <span className="text-text-sub text-sm font-medium">{stat.label}</span>
              <span className={`material-symbols-outlined ${stat.colorClass} bg-opacity-10 p-1 rounded bg-current`}>{stat.icon}</span>
            </div>
            <div>
              <span className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</span>
              <span className="text-xs text-text-sub ml-1">{stat.subValue}</span>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Módulos Atuais</h2>
          <a href="#" className="text-sm font-medium text-primary hover:text-green-400 flex items-center gap-1">
            Ver Todos <Icon name="arrow_forward" className="text-sm" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((module) => (
            <div key={module.id} className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${module.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-primary hover:text-slate-900 transition-colors">
                  <Icon name="bookmark_border" />
                </button>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{module.category}</span>
                  <span className="text-xs text-text-sub bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">{module.modulesCount} Módulos</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{module.title}</h3>
                <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2 mb-4">{module.description}</p>
                <div className="mt-auto">
                  <div className="flex justify-between text-xs mb-1 font-medium text-slate-600 dark:text-gray-400">
                    <span>Progresso</span>
                    <span>{module.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2 mb-4">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${module.progress}%` }}></div>
                  </div>
                  <button className="w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    Continuar Aprendendo
                    <Icon name="arrow_forward" className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Modules = () => {
    // This matches Screen 2 structure
  return (
    <div className="space-y-6">
       <nav className="flex mb-6 text-sm">
        <ol className="flex items-center gap-2">
            <li><a href="#" className="text-text-sub dark:text-primary/80 hover:underline">Currículo</a></li>
            <li className="text-slate-400">/</li>
            <li className="font-medium text-slate-900 dark:text-white">Todos os Módulos</li>
        </ol>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="flex flex-col gap-2 max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Módulos de Conteúdo</h1>
                <p className="text-slate-600 dark:text-slate-300 text-lg">Explore temas de biologia e acompanhe seu progresso de aprendizado em ecologia, genética e anatomia.</p>
            </div>
            <div className="w-full md:w-96">
                <label className="relative flex items-center group">
                    <span className="absolute left-4 text-text-sub group-focus-within:text-primary transition-colors material-symbols-outlined">search</span>
                    <input type="text" className="w-full h-12 pl-12 pr-4 rounded-xl border-none bg-white dark:bg-[#152e1e] text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary shadow-sm" placeholder="Pesquisar tópicos como 'Mitose'..." />
                </label>
            </div>
        </div>

        <div className="mb-12 relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyDfY7WGmLJpW3eSzKsJUHWI6UTAdv0EAkF-Su5njqnwv3jw7Gu2bTn842ZI9bwRQ_AR4rMKp4zHZ3JczKoebL4YV86TyLlLncbucskGN33ixfFwdKgdZPfQPpGjAzSzysNtS2EwcKmdNFzrEx8leY_a11CALs6m6XH0BJMUp-VF_98qPGfiSWc7lkdDlVb_9osx7-HQWW14e6wgDXhni32xsoTHDyuOOaJHt4iwjYs2Bet7kECs9lYaanjkFU2U1XwERYTaCxYps')" }}></div>
            <div className="relative z-20 p-8 md:p-12 flex flex-col justify-center h-full min-h-[320px] max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm w-fit mb-4">
                    <Icon name="star" className="text-[18px] text-black" />
                    <span className="text-xs font-bold text-black uppercase tracking-wider">Destaque da Semana</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">Dinâmica de Ecossistemas e Biodiversidade</h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                    Mergulhe nas interações complexas dentro dos ecossistemas. Entendendo teias alimentares, fluxo de energia e o delicado equilíbrio da natureza.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="h-12 px-8 rounded-lg bg-primary text-[#0d1b12] font-bold text-base hover:bg-[#20c858] transition-colors flex items-center gap-2">
                        <Icon name="play_circle" />
                        Iniciar Aula
                    </button>
                    <button className="h-12 px-6 rounded-lg bg-white/10 backdrop-blur-md text-white font-medium border border-white/20 hover:bg-white/20 transition-colors">
                        Ver Ementa
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Extended modules for this view */}
            {[
                { ...MODULES[0], type: 'video' as const, category: 'Genética', title: 'Replicação e Reparo do DNA', desc: 'Entendendo os mecanismos moleculares da replicação do DNA e como erros são corrigidos.' },
                { ...MODULES[1], type: 'quiz' as const, category: 'Anatomia', title: 'Sistema Cardiovascular Humano', desc: 'Explore a estrutura do coração, vasos sanguíneos e circulação sistêmica.' },
                { ...MODULES[2], type: '3d' as const, category: 'Biologia Celular', title: 'Estrutura e Função Celular', desc: 'Exploração interativa das organelas de células animais e vegetais.' },
                { id: 4, type: 'reading' as const, category: 'Ecologia', title: 'Aprofundamento em Fotossíntese', desc: 'Como as plantas convertem energia luminosa em energia química.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCliFR0QGL-Kkbl5KDsx9A1yEbWetC8OjljtzF6HJ-5iLWSrndlPg_IxyqXjjy0WfeKZiQJzi2T3hFiAJ32q1d5W_asPFJblKBz0HjAofV1ZIouNsKGWYyPIz8-gnhamIL1HaF-tCHdVVHbk6kUiySlT-ysZbfXp4w8fUFlcR2AGc9E0o3z_adrQoclLe1daJARzktIrxoYC24lH1s3j-ltZ9ZhejWuIvIfoLP9BYq6tEc1vTSgP58eJPOm-teETjpE3oCKiSy-2Rg' },
                { id: 5, type: 'presentation' as const, category: 'Plano de Aula', title: 'Materiais de Preparação (Exame Q3)', desc: 'Guias em PDF para download, gabaritos e apresentações.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgK1v-VTsuJ5295cjkUif-PCsSVHiIdTxmshHG5kchl8FPPWQnYgegND4Siy4GbZJpZySRsGGcypQqInulBGlbm0UyA9wQdVwYT8KbEDiKrgO0Y21T5ZIVahmk8qIeuBH_bjDKn_COPp9QVCAPYxTmKo2sISi5q9w1f_tZcZ5YJe_B9D0dfipzyh6mFTJ74HYw_mJXhvg93w0m36nua4VjcIaVh1lHMK4wbLgxl9lyGR64TmD7IoTgqHRiXdEg3ZXfBLJKfu2vIhs' },
                { id: 6, type: 'animation' as const, category: 'Microbiologia', title: 'Vetores de Transmissão Viral', desc: 'Estude como os vírus se espalham através de populações e vetores.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkmEY42P0H0Kxe9aQlvYYMDewFvWTVeS-RYoWPFzzIKZOa-f6H0nBb_6hCyDV1UTrvBIf_HJW1ccmNIik9tT7c7BKPSqZcdjO6kCu7bVKebbQNx0TyVJPwXK5bDXxotDMprmd14J2cOIvkKUcTNJ9cT5ysPM_8FiB8Y8lonaXqV4oA5_xJvKv-JGuckMiFiqAxu3mbhkes01ENGH3MmcHvuvtxLsqdhoKWlGToj2Up4PuD2Inz0Jo1VVAwcA1OBWvgQUlsPWWX-NU' },
            ].map((mod: any, idx) => (
                 <div key={idx} className="group flex flex-col bg-white dark:bg-[#152e1e] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-xl dark:hover:shadow-primary/5 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                        <div className="absolute top-3 right-3 z-10 bg-black/50 backdrop-blur-md rounded-lg px-2 py-1 flex items-center gap-1">
                            <Icon name={mod.type === 'video' ? 'videocam' : mod.type === 'quiz' ? 'quiz' : mod.type === '3d' ? 'view_in_ar' : mod.type === 'reading' ? 'description' : mod.type === 'presentation' ? 'folder' : 'play_circle'} className="text-white text-[16px]" />
                            <span className="text-xs font-medium text-white">{mod.type === '3d' ? 'Modelo 3D' : mod.type.charAt(0).toUpperCase() + mod.type.slice(1)}</span>
                        </div>
                        <img src={mod.image} alt={mod.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                         {mod.type === 'video' && <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"><div className="h-full bg-primary w-3/4"></div></div>}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between mb-2">
                            <span className="text-xs font-bold text-primary uppercase tracking-wide">{mod.category}</span>
                            <span className="text-xs font-medium text-slate-400">45 min</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">{mod.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">{mod.desc}</p>
                        <div className="mt-auto flex items-center justify-between">
                             <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400">Ver Detalhes</span>
                            </div>
                            <button className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-primary group-hover:text-black transition-colors">
                                <Icon name="arrow_forward" />
                            </button>
                        </div>
                    </div>
                 </div>
            ))}
        </div>
    </div>
  );
}

const Glossary = () => {
    return (
        <div className="space-y-6">
            <div className="rounded-xl overflow-hidden relative min-h-[320px] flex flex-col items-center justify-center p-8 text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(16, 34, 22, 0.7), rgba(16, 34, 22, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-oLcBbNa78CvzGEJLF5NGI5rCOn2r9D2znAQJWnYZksdyVS13k7rkemMo-MgOCuUdn_a1Mo-RtfXt-ZqjiVO2p8leZyUtX2Uo94UHWp6W2lcYgY3WfZNGTtGcJYzl7VqLrQS-aMuw-62YuHWpOHvY7g7-Np5nWhtNcoB6eEbyDHlCWzf2OQ8Ro-kBDkSasgGFA_68jIia1urNrtNOc6ms0vmmL2qDqaOG40qWwNUfRFhSwhK3jC_ISzTyzDTYsq4ry_ebXUVAXqo')" }}>
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">Glossário de Biologia</h1>
                <h2 className="text-gray-200 text-base md:text-lg font-normal leading-normal max-w-2xl mb-8">
                    Explore mais de 500 termos essenciais. De Mitose a Zoologia, encontre as definições que você precisa para seus estudos.
                </h2>
                <label className="flex flex-col w-full max-w-[600px] h-14 md:h-16 shadow-lg">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-white dark:bg-[#1f3b29] overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                        <div className="text-text-sub flex items-center justify-center pl-4 pr-2"><Icon name="search" /></div>
                        <input className="flex w-full min-w-0 flex-1 resize-none bg-transparent text-slate-900 dark:text-white focus:outline-0 placeholder:text-text-sub dark:placeholder:text-gray-400 text-base font-normal leading-normal h-full" placeholder="Pesquise um termo (ex: Clorofila)" />
                        <div className="flex items-center justify-center pr-2">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-green-400 text-[#0d1b12] text-sm font-bold leading-normal tracking-[0.015em] transition-colors">Buscar</button>
                        </div>
                    </div>
                </label>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <aside className="md:w-16 shrink-0">
                    <div className="sticky top-24 flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 items-center md:bg-white md:dark:bg-[#1f3b29] md:rounded-full md:py-4 md:shadow-sm">
                        <a href="#" className="flex size-8 md:size-10 shrink-0 items-center justify-center rounded-full bg-primary text-[#0d1b12] text-sm font-bold shadow-sm">A</a>
                        {['B','C','D','E'].map(l => (
                            <a key={l} href="#" className="flex size-8 md:size-10 shrink-0 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-[#e7f3eb] dark:hover:bg-gray-700 hover:text-[#0d1b12] dark:hover:text-white text-sm font-medium transition-colors">{l}</a>
                        ))}
                         <span className="text-gray-300 dark:text-gray-600 hidden md:block">...</span>
                        <a href="#" className="flex size-8 md:size-10 shrink-0 items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-[#e7f3eb] dark:hover:bg-gray-700 hover:text-[#0d1b12] dark:hover:text-white text-sm font-medium transition-colors">Z</a>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-4">
                        {GLOSSARY_TERMS.map(term => (
                            <div key={term.id} className="group relative flex flex-col gap-4 rounded-xl border border-[#e7f3eb] dark:border-[#2a4d36] bg-white dark:bg-[#1f3b29] p-6 shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-xl font-bold text-[#0d1b12] dark:text-white group-hover:text-primary transition-colors cursor-pointer">{term.term}</h3>
                                            </div>
                                            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">{term.category}</span>
                                        </div>
                                        <p className="text-[#0d1b12] dark:text-gray-200 text-sm leading-relaxed">{term.definition}</p>
                                        {term.example && (
                                            <div className="rounded-r-lg border-l-4 border-primary bg-primary/10 p-3 dark:bg-green-900/20">
                                                <p className="text-sm italic text-[#0d1b12] dark:text-gray-300">
                                                    <span className="font-bold not-italic text-primary-dark dark:text-primary">Exemplo:</span> {term.example}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    {term.image && (
                                        <div className="sm:w-32 sm:h-32 shrink-0 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden self-start">
                                            <img src={term.image} alt={term.term} className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const QuizCreator = () => {
    return (
        <div className="grid grid-cols-12 gap-6 lg:gap-8 h-full">
            <div className="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
                <div className="flex flex-wrap justify-between items-end gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Construtor de Questões</h2>
                        <p className="text-text-sub dark:text-gray-400 mt-1">Configure os parâmetros para gerar novos itens de avaliação.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-surface-dark p-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                        <button className="px-3 py-1.5 rounded-md text-sm font-medium bg-primary/20 text-green-800 dark:text-primary">Manual</button>
                        <button className="px-3 py-1.5 rounded-md text-sm font-medium text-text-sub dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">Gerar com IA</button>
                    </div>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-bold text-slate-900 dark:text-gray-200">Tipo de Pergunta</span>
                            <select className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary">
                                <option>Múltipla Escolha</option>
                            </select>
                        </label>
                        <label className="flex flex-col gap-2">
                             <span className="text-sm font-bold text-slate-900 dark:text-gray-200">Tópico / Tag</span>
                             <input type="text" className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" placeholder="ex: Mitose" />
                        </label>
                    </div>
                     <div className="flex flex-col gap-2">
                         <span className="text-sm font-bold text-slate-900 dark:text-gray-200">Enunciado da Pergunta</span>
                         <textarea className="w-full rounded-lg bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 p-4 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" rows={4} placeholder="Digite sua pergunta..."></textarea>
                     </div>
                      <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                         <button className="px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-gray-800">Limpar</button>
                         <button className="px-5 py-2.5 rounded-lg bg-primary text-slate-900 text-sm font-bold shadow-md hover:bg-green-400 flex items-center gap-2"><Icon name="add" className="text-lg" /> Adicionar ao Quiz</button>
                      </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col h-full gap-6">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Prévia do Questionário</h2>
                    <div className="flex items-center justify-between text-sm text-text-sub dark:text-gray-400">
                        <span>Unidade 3 - Biologia Celular</span>
                        <button className="text-primary font-medium hover:underline">Editar Título</button>
                    </div>
                </div>
                <div className="flex-grow flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden sticky top-24 max-h-[calc(100vh-8rem)]">
                     <div className="p-4 bg-primary/10 border-b border-primary/20 flex justify-between items-center">
                        <div className="flex flex-col"><span className="text-xs uppercase font-bold text-text-sub">Questões</span><span className="text-xl font-bold text-slate-900 dark:text-white">5</span></div>
                        <div className="flex flex-col"><span className="text-xs uppercase font-bold text-text-sub">Pontos</span><span className="text-xl font-bold text-slate-900 dark:text-white">50</span></div>
                     </div>
                     <div className="p-4 space-y-3 overflow-y-auto">
                        {[1,2,3].map(i => (
                             <div key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-black/20 hover:border-primary/50 cursor-move">
                                <div className="flex gap-3">
                                    <span className="flex-shrink-0 size-6 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-text-sub">{i}</span>
                                    <div>
                                        <p className="text-sm text-slate-900 dark:text-white font-medium line-clamp-2">Exemplo de questão {i} sobre biologia celular?</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-600 px-2 py-0.5 rounded">M. Escolha</span>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    )
}

const NewsFeed = () => {
    return (
        <div className="space-y-8">
            <div className="@container mb-8">
                <div className="flex flex-col gap-6 px-4 py-6 @[480px]:gap-8 @[864px]:flex-row bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-800">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[864px]:w-1/2" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_GgsWjujF_DmdAhqNI2ZsNdFla9U1BG2uUq-ZJqT40h417Yb9GVy2mW864auc-hg9kn_lQ3Y7qsKjYdrWqUw4ehtwf1rphxJMIJ7lgjg6Lnuaqv9Fg0kl0SMAsNN1Vn4BN3_vbej8BIeFd-AM16KRN-Gx-W0QG8xUFCF_hKXJGNbZ6TaSqIUc42xYk5kB1KKPH9kTuYvKh7dc-2KOW9fo2smqt1FA9wrnSiLQQWL_sep1DXqZxPtGk1POFmm0_PeacUFW0HesqvQ')" }}></div>
                    <div className="flex flex-col gap-6 @[864px]:justify-center @[864px]:w-1/2">
                        <div className="flex flex-col gap-2 text-left">
                            <span className="inline-flex items-center gap-1 w-fit rounded bg-primary/20 px-2 py-1 text-xs font-bold text-primary dark:text-primary"><Icon name="breaking_news" className="text-[16px]" /> DESTAQUE</span>
                            <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Avanço no CRISPR: Nova Técnica de Edição Genética Explicada</h1>
                            <h2 className="text-slate-900/80 dark:text-gray-300 text-sm font-normal leading-normal">Um mergulho profundo nos últimos avanços da tecnologia de edição genética e o que isso significa para o futuro da medicina personalizada.</h2>
                        </div>
                        <button className="flex w-fit items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-green-500 text-[#0d1b12] text-sm font-bold leading-normal tracking-[0.015em] transition-colors">Ler Artigo Completo</button>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 flex flex-col gap-6">
                     <h3 className="text-slate-900 dark:text-white text-xl font-bold border-l-4 border-primary pl-3">Descobertas Recentes</h3>
                     {NEWS_ITEMS.map(item => (
                         <div key={item.id} className="flex flex-col md:flex-row gap-5 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden p-5 group hover:shadow-md transition-shadow">
                             <div className="w-full md:w-64 h-48 md:h-auto bg-cover bg-center rounded-lg shrink-0" style={{ backgroundImage: `url('${item.image}')` }}></div>
                             <div className="flex flex-col justify-center gap-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-wider text-text-sub dark:text-primary">{item.type}</span>
                                    <span className="text-xs text-gray-400">{item.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{item.title}</h3>
                                <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2">{item.excerpt}</p>
                                <a href="#" className="text-primary font-bold text-sm flex items-center gap-1 mt-2 hover:gap-2 transition-all">Ler Mais <Icon name="arrow_forward" className="text-[16px]" /></a>
                             </div>
                         </div>
                     ))}
                </div>
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                            <Icon name="trending_up" className="text-primary" />
                            <h3 className="text-lg font-bold">Em Alta</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[1,2,3].map(i => (
                                <div key={i} className="flex gap-4 items-start group cursor-pointer">
                                    <span className="text-primary font-bold text-lg opacity-50">0{i}</span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Tópico em alta #{i}</p>
                                        <p className="text-xs text-text-sub dark:text-gray-400">Categoria • 5 min leitura</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Community = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Discussões Recentes</h1>
                 <div className="flex bg-[#e7f3eb] dark:bg-surface-dark rounded-lg p-1">
                    <button className="px-4 py-1.5 rounded-md bg-white dark:bg-[#254231] shadow-sm text-xs font-bold text-slate-900 dark:text-white">Recentes</button>
                    <button className="px-4 py-1.5 rounded-md text-xs font-medium text-text-sub dark:text-gray-400 hover:text-slate-900 dark:hover:text-white">Populares</button>
                 </div>
            </div>
            {DISCUSSIONS.map(discussion => (
                <div key={discussion.id} className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 group hover:border-primary/50 transition-all duration-300">
                    {discussion.image && discussion.isTrending && (
                        <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("${discussion.image}")` }}>
                            <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                <p className="text-white text-xs font-bold">#{discussion.tags[0]}</p>
                            </div>
                        </div>
                    )}
                    <div className="p-5 flex flex-col gap-3">
                         <div className="flex items-center gap-2 mb-1">
                            <div className="size-6 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${discussion.avatar}')` }}></div>
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{discussion.author} • {discussion.role} • {discussion.timeAgo}</span>
                             {discussion.isResource && <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full">Recurso</span>}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary transition-colors cursor-pointer">{discussion.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{discussion.content}</p>
                        <div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex gap-4">
                                <button className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                                    <Icon name="arrow_upward" className="text-[20px]" /> <span className="text-sm font-medium">{discussion.upvotes}</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                                    <Icon name="chat_bubble" className="text-[20px]" /> <span className="text-sm font-medium">{discussion.comments} Comentários</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Games = () => (
    <div className="space-y-6 text-center py-20">
        <Icon name="stadia_controller" className="text-6xl text-primary mb-4" />
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Quiz & Games Arena</h2>
        <p className="text-text-sub dark:text-gray-400">Conteúdo de jogos e quizzes estará disponível em breve.</p>
    </div>
);

const Downloads = () => (
    <div className="space-y-6">
        <div className="relative overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-8 lg:p-12 flex flex-col items-center justify-center text-center gap-6 shadow-lg" style={{ backgroundImage: 'linear-gradient(rgba(16, 34, 22, 0.7), rgba(16, 34, 22, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC42E8aNHbWe8Hxi7WsiL82yBTuLluWIfMKo9ap2DAJHo22HucyQO5OlRUU5uKXmxPw4aKfpwn1fW0ixigT5jW8vD2qfZmMzdRspcQgYwmb7cGcznzmD7bAzAFBYbkzVLXzpAuKjIf6f2D7yEoXmsOeT7A8sYTDjIS0s0YWUwN041PQ8Rp-ocTLkFlXL1hPQlDW-1a0hYijC-_aDWcnsqrMQtjQLIPOhWaQO71PHCSbTvsatyMSM1WMpU5aBtbIHqOTN0WEWeSqiN0")'}}>
            <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">Biblioteca de Recursos de Biologia</h1>
            <p className="text-gray-200 text-base md:text-lg font-normal">Acesse apostilas, exercícios, mapas conceituais e modelos de provas projetados para estudantes e professores.</p>
             <label className="flex w-full max-w-xl relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-text-sub"><Icon name="search" /></div>
                <input type="text" className="w-full h-14 pl-12 pr-32 rounded-lg border-none focus:ring-2 focus:ring-primary bg-white text-slate-900 placeholder:text-gray-400 text-base shadow-xl" placeholder="Pesquise por fotossíntese, genética, anatomia..." />
                <button className="absolute right-2 top-2 h-10 px-6 bg-primary text-[#0d1b12] rounded-md text-sm font-bold hover:bg-[#25d360] transition-colors">Pesquisar</button>
            </label>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['PDF', 'DOCX', 'PPTX'].map((type, i) => (
                <div key={i} className="group flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md hover:border-primary/50 transition-all duration-300">
                    <div className="h-48 w-full bg-gray-100 dark:bg-gray-800 relative flex items-center justify-center">
                        <Icon name="description" className="text-6xl text-slate-300 dark:text-slate-600" />
                         <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 dark:text-white">{type === 'PDF' ? 'Apostila' : type === 'DOCX' ? 'Exercício' : 'Slides'}</div>
                    </div>
                    <div className="flex flex-col p-4 gap-2 flex-1">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">Recurso de Biologia {i+1}</h3>
                        <p className="text-sm text-text-sub dark:text-gray-400 line-clamp-2">Descrição breve do material disponível para download.</p>
                         <div className="mt-auto pt-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-text-sub dark:text-gray-500">
                                <span className="uppercase font-bold bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-slate-900 dark:text-gray-300">{type}</span>
                                <span>2.4 MB</span>
                            </div>
                            <button className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-[#0d1b12] transition-colors"><Icon name="download" className="text-[20px]" /></button>
                        </div>
                    </div>
                </div>
            ))}
         </div>
    </div>
);

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderScreen = () => {
    switch(currentScreen) {
      case 'dashboard': return <Dashboard />;
      case 'modules': return <Modules />;
      case 'glossary': return <Glossary />;
      case 'quiz-creator': return <QuizCreator />;
      case 'news': return <NewsFeed />;
      case 'community': return <Community />;
      case 'games': return <Games />;
      case 'downloads': return <Downloads />;
      default: return <Dashboard />;
    }
  };

  const isQuizCreator = currentScreen === 'quiz-creator';

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-gray-100 font-display transition-colors duration-200 min-h-screen flex overflow-hidden">
      {!isQuizCreator && <Sidebar currentScreen={currentScreen} setScreen={setCurrentScreen} />}
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className={`h-16 bg-surface-light dark:bg-surface-dark/50 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shrink-0 backdrop-blur-sm z-10 ${isQuizCreator ? 'bg-surface-light/95 dark:bg-surface-dark/95' : ''}`}>
          <div className="flex items-center gap-4">
             {isQuizCreator ? (
                <div className="flex items-center gap-3">
                     <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Icon name="biotech" className="text-2xl" /></div>
                     <div><h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Gerador BioQuest</h1><p className="text-xs text-text-sub dark:text-gray-400 font-medium">Edição do Professor</p></div>
                </div>
             ) : (
                <>
                    <button className="md:hidden p-2 text-slate-600 dark:text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <Icon name="menu" />
                    </button>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white hidden sm:block">
                        {NAV_ITEMS.find(n => n.id === currentScreen)?.label || 'BioLearn'}
                    </h2>
                </>
             )}
             
             {isQuizCreator && (
                 <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-sub dark:text-gray-300 ml-8">
                    <button onClick={() => setCurrentScreen('dashboard')} className="hover:text-primary transition-colors">Voltar</button>
                    <a href="#" className="text-slate-900 dark:text-white font-semibold">Criador</a>
                    <a href="#" className="hover:text-primary transition-colors">Meus Questionários</a>
                 </nav>
             )}
          </div>
          
          <div className="flex items-center gap-4 flex-1 justify-end max-w-2xl">
            {!isQuizCreator && (
                <div className="hidden sm:flex relative w-full max-w-md group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon name="search" className="text-text-sub" />
                </div>
                <input className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-text-sub focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Buscar..." type="text" />
                </div>
            )}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors relative">
                <Icon name="notifications" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
              </button>
              {isQuizCreator ? (
                 <div className="size-9 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-800 ml-2 cursor-pointer" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAZ5UXEVMl9KeYSFFvIXi6HKvqheYHNYU5qdZ8SoWcIb6QdaOjiL_rbon6FKa6x-5YygCO-65UEY3lNK80nSmM9ibNj7rH8u9gnB40KrzUzZaCEjy7VQxW7r3NT-CGxsRuQziQeVe4FsIiBHPDavlkfSgcjt2-kuvAoYZnATxTDGNddvMMziqEm6oWs8RNMN-5gA_Baz3rI2eTCHcU1qcmV_D9794KRIMNdhlq10FwS95shY-7eKXEhi7PeKz5oRCtPJi093ZLFYc')" }}></div>
              ) : (
                <button className="p-2 rounded-lg text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <Icon name="settings" />
                </button>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scroll-smooth">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
};

export default App;
