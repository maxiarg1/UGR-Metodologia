import React, { useState } from 'react';
import { Shield, BookOpen, AlertTriangle, CheckCircle, Crosshair, Server, Code, Lock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');

  const tabs = [
    { id: 'resumen', label: 'Resumen y Objetivos', icon: BookOpen },
    { id: 'metodologia', label: 'Metodología', icon: Crosshair },
    { id: 'vulnerabilidades', label: 'Vulnerabilidades', icon: AlertTriangle },
    { id: 'conclusiones', label: 'Conclusiones', icon: CheckCircle },
  ];

  const vulnerabilidades = [
    { id: 'V-01', nombre: 'Unknown Key-Share (UKS) en rekeying', cvss: '7.4', severidad: 'Alta', categoria: 'Protocolar', fuente: 'Miculan & Vitacolonna (2021)' },
    { id: 'V-02', nombre: 'Reordenamiento y borrado de mensajes', cvss: '7.1', severidad: 'Alta', categoria: 'Protocolar', fuente: 'Albrecht et al. (2022)' },
    { id: 'V-03', nombre: 'Timing side-channel en clientes', cvss: '5.9', severidad: 'Media', categoria: 'Implementación', fuente: 'Albrecht et al. (2022)' },
    { id: 'V-04', nombre: 'Replay attacks en bibliotecas de terceros', cvss: '6.5', severidad: 'Media', categoria: 'Implementación', fuente: 'Von Arx & Paterson (2023)' },
    { id: 'V-05', nombre: 'Exfiltración de claves vía padding (ASA)', cvss: '8.1', severidad: 'Alta', categoria: 'Criptográfica', fuente: 'Cogliati et al. (2023)' },
    { id: 'V-06', nombre: 'Ausencia de E2EE por defecto', cvss: '6.8', severidad: 'Media', categoria: 'Arquitectural', fuente: 'Telegram (2024)' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'resumen':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" /> El Problema de Investigación
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Telegram utiliza <strong>MTProto 2.0</strong>, un protocolo criptográfico propietario ("homegrown"). La controversia radica en que <strong>no implementa cifrado de extremo a extremo (E2EE) por defecto</strong> en chats regulares. ¿Constituye esto y su arquitectura no estándar una vulnerabilidad frente a protocolos abiertos y auditados?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Objetivo General</h4>
                <p className="text-slate-300 text-sm">
                  Evaluar la robustez técnica de MTProto 2.0 en comparación con estándares internacionales (NIST SP 800-57) para determinar su eficacia (2024-2025).
                </p>
              </div>
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Estándares Utilizados</h4>
                <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                  <li><strong>NIST SP 800-57:</strong> Gestión de claves.</li>
                  <li><strong>ENISA:</strong> Reporte de amenazas (Threat Landscape).</li>
                  <li><strong>MITRE ATT&CK:</strong> Tácticas y técnicas.</li>
                  <li><strong>OWASP WSTG:</strong> Metodología de pruebas.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'metodologia':
        return (
          <div className="space-y-6 animate-fade-in">
             <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <Crosshair className="w-5 h-5" /> Diseño Metodológico
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-900 p-4 rounded-lg">
                    <span className="block text-xs text-slate-500 uppercase font-bold mb-1">Enfoque</span>
                    <span className="text-slate-200">Mixto Secuencial (Descriptivo-Correlacional)</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg">
                    <span className="block text-xs text-slate-500 uppercase font-bold mb-1">Muestra</span>
                    <span className="text-slate-200">Chats secretos (Clientes oficiales y de terceros)</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg">
                    <span className="block text-xs text-slate-500 uppercase font-bold mb-1">Taxonomía</span>
                    <span className="text-slate-200">CVSS v3.1 para evaluación de riesgo</span>
                  </div>
                </div>
             </div>

             <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
                <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" /> Herramientas de Análisis
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <Server className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div><strong>ProVerif & Tamarin Prover:</strong> Análisis formal simbólico y computacional de los protocolos criptográficos.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div><strong>OWASP WSTG-CRYP:</strong> Pruebas controladas de cifrado (SSL/TLS débiles, Padding Oracles).</div>
                  </li>
                </ul>
             </div>
          </div>
        );

      case 'vulnerabilidades':
        return (
          <div className="space-y-4 animate-fade-in">
            <p className="text-slate-300 mb-4">Se identificaron 6 vulnerabilidades principales basadas en el análisis bibliográfico y verificación formal:</p>
            <div className="grid gap-4">
              {vulnerabilidades.map((vuln) => (
                <div key={vuln.id} className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-slate-500 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded font-mono">{vuln.id}</span>
                      <h4 className="font-bold text-slate-100">{vuln.nombre}</h4>
                    </div>
                    <p className="text-sm text-slate-400">Fuente: {vuln.fuente} • Categoría: {vuln.categoria}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <div className="text-xs text-slate-500 uppercase font-bold">CVSS v3.1</div>
                      <div className="font-mono text-lg text-slate-200">{vuln.cvss}</div>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-bold shadow-sm ${
                      vuln.severidad === 'Alta' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {vuln.severidad}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'conclusiones':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Conclusiones Clave
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p><strong>Hipótesis aceptada parcialmente:</strong> MTProto 2.0 tiene primitivas robustas (AES-256, RSA) pero presenta debilidades estructurales reales, aunque su explotación no es trivial en el uso cotidiano.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p><strong>Cumplimiento NIST:</strong> Cumple ~60% de los controles NIST SP 800-57. Falla principalmente en la gestión del padding y el proceso de rekeying.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                  <p><strong>Riesgo Arquitectural:</strong> La falta de E2EE por defecto es la mayor vulnerabilidad organizacional (V-06), permitiendo posible interceptación en servidores.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <p><strong>Ecosistema Frágil:</strong> El uso de criptografía "homegrown" hace que la implementación en clientes de terceros (ej. Pyrogram, Telethon) sea propensa a errores críticos (Replay attacks).</p>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-bold text-blue-400 mb-2">💡 Recomendación Principal</h4>
              <p className="text-blue-200">
                Para organizaciones: Restringir el uso de Telegram para datos sensibles o asegurar el uso estricto y exclusivo de <strong>Chats Secretos</strong>. Para máxima seguridad corporativa, migrar a plataformas con E2EE por defecto (como Signal Protocol).
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-3">
            Auditoría MTProto 2.0
          </h1>
          <h2 className="text-slate-400 text-lg">Guía de Estudio - Trabajo Final Ciberseguridad UGR</h2>
          <p className="text-sm text-slate-500 mt-2">Autores: Argañaras & Becette</p>
        </header>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <main className="min-h-[400px]">
          {renderContent()}
        </main>

      </div>
    </div>
  );
}