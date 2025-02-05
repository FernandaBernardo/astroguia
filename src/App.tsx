import React from 'react';
import { Star, DollarSign, Heart, Home, Sparkles, Book, Target, User, Gift, Clock, Shield } from 'lucide-react';

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black text-white">
      {/* Hero Section - Enhanced with more urgency and social proof */}
      <section className="min-h-screen relative flex items-center justify-center px-4 py-20" 
               style={{
                 backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-purple-900/70 to-black/90"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Social Proof Banner */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 backdrop-blur-sm p-2 rounded-full mb-8 animate-pulse">
            <p className="text-yellow-300 text-sm md:text-base">
              🎉 Mais de 1.247 pessoas transformaram suas vidas com o AstroGuia
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
            O SEU MAPA ASTRAL COMO VOCÊ NUNCA VIU: PERSONALIZADO, PROFUNDO E TRANSFORMADOR
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Mais de 50 páginas feitas à mão sobre você, com orientações práticas para alinhar sua vida ao seu propósito
          </p>
          
          {/* Timer Banner */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg mb-8 shadow-lg shadow-orange-500/20">
            <p className="text-lg font-bold mb-2">🔥 OFERTA ESPECIAL DE LANÇAMENTO</p>
            <p className="text-sm">Desconto de 50% expira em:</p>
            <div className="flex justify-center gap-4 mt-2">
              <div className="bg-black/30 px-3 py-2 rounded">
                <span className="text-2xl font-bold">23</span>
                <p className="text-xs">HORAS</p>
              </div>
              <div className="bg-black/30 px-3 py-2 rounded">
                <span className="text-2xl font-bold">45</span>
                <p className="text-xs">MIN</p>
              </div>
              <div className="bg-black/30 px-3 py-2 rounded">
                <span className="text-2xl font-bold">19</span>
                <p className="text-xs">SEG</p>
              </div>
            </div>
          </div>
          
          <a href="https://pay.kirvano.com/38a801d5-9355-4530-9172-5ad12388590a" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl px-12 py-6 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 mb-4">
              QUERO MEU ASTROGUIA AGORA
              <span className="block text-sm font-normal mt-1">Clique aqui para garantir seu desconto</span>
            </button>
          </a>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 mt-8 text-sm text-gray-300">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Compra Segura
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              7 Dias de Garantia
            </div>
            <div className="flex items-center">
              <Gift className="w-4 h-4 mr-2" />
              Bônus Exclusivos
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Enhanced with better visual hierarchy */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/50 via-purple-800/30 to-purple-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
              Por que o AstroGuia é diferente?
            </h2>
            <p className="text-purple-200">Compare e veja por que mais de 1.000 pessoas escolheram o AstroGuia</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-b from-purple-800/50 to-purple-900/50 p-8 rounded-2xl border border-purple-500/30 transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full inline-block mb-6">
                AstroGuia ✨
              </div>
              <ul className="space-y-6">
                <li className="flex items-center">
                  <span className="bg-green-500/20 p-2 rounded-full mr-4">
                    <span className="text-green-400 text-xl">✓</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-white">Personalizado manualmente</h4>
                    <p className="text-sm text-gray-300">Cada detalhe é analisado por especialistas</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 p-2 rounded-full mr-4">
                    <span className="text-green-400 text-xl">✓</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-white">Reflexões profundas</h4>
                    <p className="text-sm text-gray-300">Insights transformadores para sua vida</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 p-2 rounded-full mr-4">
                    <span className="text-green-400 text-xl">✓</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-white">50+ páginas sobre você</h4>
                    <p className="text-sm text-gray-300">Conteúdo completo e aprofundado</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-950/30 p-8 rounded-2xl border border-purple-800/30">
              <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full inline-block mb-6">
                Outros Mapas 👎
              </div>
              <ul className="space-y-6">
                <li className="flex items-center opacity-60">
                  <span className="bg-red-500/20 p-2 rounded-full mr-4">
                    <span className="text-red-400 text-xl">✗</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-400">Feito por IA</h4>
                    <p className="text-sm text-gray-500">Sem análise humana personalizada</p>
                  </div>
                </li>
                <li className="flex items-center opacity-60">
                  <span className="bg-red-500/20 p-2 rounded-full mr-4">
                    <span className="text-red-400 text-xl">✗</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-400">Frases genéricas</h4>
                    <p className="text-sm text-gray-500">Conteúdo superficial e repetitivo</p>
                  </div>
                </li>
                <li className="flex items-center opacity-60">
                  <span className="bg-red-500/20 p-2 rounded-full mr-4">
                    <span className="text-red-400 text-xl">✗</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-400">Resumo curto</h4>
                    <p className="text-sm text-gray-500">Falta profundidade na análise</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Mid-page CTA */}
          <div className="text-center">
            <a href="https://pay.kirvano.com/38a801d5-9355-4530-9172-5ad12388590a" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                QUERO O MELHOR MAPA ASTRAL
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with better visual presentation */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
              O Que Você Vai Receber?
            </h2>
            <p className="text-purple-200">Um guia completo para transformar sua vida através da astrologia</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Star className="w-8 h-8" />, 
                title: "Panorama do Ano", 
                desc: "Áreas em destaque + 5 conselhos práticos",
                highlight: "Exclusivo"
              },
              { 
                icon: <DollarSign className="w-8 h-8" />, 
                title: "Finanças", 
                desc: "Tendências e orientações personalizadas",
                highlight: "Importante"
              },
              { 
                icon: <Heart className="w-8 h-8" />, 
                title: "Amor", 
                desc: "Descubra padrões e como melhorá-los",
                highlight: "Essencial"
              },
              { 
                icon: <Home className="w-8 h-8" />, 
                title: "Família", 
                desc: "Reflexões sobre conexões e harmonia",
                highlight: "Valioso"
              },
              { 
                icon: <Sparkles className="w-8 h-8" />, 
                title: "Espiritualidade", 
                desc: "Como alinhar-se à sua energia interior",
                highlight: "Profundo"
              },
              { 
                icon: <Book className="w-8 h-8" />, 
                title: "Sugestões de Livros", 
                desc: "Para acelerar seu autoconhecimento",
                highlight: "Bônus"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-b from-purple-800/30 to-purple-900/30 p-6 rounded-2xl border border-purple-500/20 transform hover:scale-105 transition-all">
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-400/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 text-yellow-300 text-xs px-2 py-1 rounded-full inline-block mb-2">
                  {feature.highlight}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced with better value proposition */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/50 to-purple-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-purple-600/50 to-purple-800/50 p-8 rounded-2xl border border-purple-500/30 relative overflow-hidden">
            {/* Price Tag */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm">
              50% OFF
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
                Oferta Especial de Lançamento
              </h2>
              
              <div className="mb-8">
                <div className="text-2xl line-through text-gray-400 mb-2">De R$297</div>
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 mb-4">
                  12x de R$14,99
                </div>
                <div className="text-xl mb-2">ou R$149,90 à vista!</div>
                <p className="text-gray-300 text-sm">Economia de R$147,10</p>
              </div>
              
              {/* Bonus Section */}
              <div className="bg-purple-900/50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">🎁 Bônus Exclusivos</h3>
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="bg-purple-800/30 p-4 rounded-lg">
                    <Gift className="w-6 h-6 mb-2 text-yellow-300" />
                    <h4 className="font-bold mb-1">Dicionário Astrológico</h4>
                    <p className="text-sm text-gray-300">Valor: R$97</p>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg">
                    <Book className="w-6 h-6 mb-2 text-yellow-300" />
                    <h4 className="font-bold mb-1">Perguntas Poderosas</h4>
                    <p className="text-sm text-gray-300">Valor: R$47</p>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg">
                    <User className="w-6 h-6 mb-2 text-yellow-300" />
                    <h4 className="font-bold mb-1">Suporte Especializado</h4>
                    <p className="text-sm text-gray-300">Valor: R$197</p>
                  </div>
                </div>
              </div>
              
              <a href="https://pay.kirvano.com/38a801d5-9355-4530-9172-5ad12388590a" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl px-12 py-6 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 mb-6 w-full md:w-auto">
                  APROVEITAR OFERTA ESPECIAL
                  <span className="block text-sm font-normal mt-1">Clique aqui para garantir seu desconto</span>
                </button>
              </a>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Garantia de 7 dias
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Satisfação garantida
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Acesso imediato
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced with better social proof */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
              Depoimentos Reais
            </h2>
            <p className="text-purple-200">Veja o que dizem as pessoas que já transformaram suas vidas</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                name: "Rosana N.", 
                text: "Transformador! Meu mapa astral me trouxe uma clareza que não encontrei em outros mapas.",
                highlight: "Clareza e Direção" 
              },
              { 
                name: "Rafael M.", 
                text: "Consegui alinhar minhas decisões com meu propósito. Fez muito sentido!",
                highlight: "Alinhamento de Vida"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-b from-purple-800/30 to-purple-900/30 p-6 rounded-2xl border border-purple-500/20">
                <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 text-yellow-300 text-xs px-2 py-1 rounded-full inline-block mb-4">
                  {testimonial.highlight}
                </div>
                <p className="mb-4 text-lg">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-yellow-300">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with better UX */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/50 via-purple-800/30 to-purple-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
              Perguntas Frequentes
            </h2>
            <p className="text-purple-200">Tire suas dúvidas sobre o AstroGuia</p>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                q: "Esse mapa serve para iniciantes?", 
                a: "Sim, ele é feito para qualquer nível de conhecimento. Todo o conteúdo é explicado de forma clara e didática." 
              },
              { 
                q: "Em quanto tempo recebo meu AstroGuia?", 
                a: "Em até 5 dias úteis, no e-mail informado no checkout. Você receberá um PDF personalizado e completo." 
              },
              { 
                q: "O conteúdo é genérico ou realmente personalizado?", 
                a: "Totalmente personalizado e feito manualmente. Cada AstroGuia é único e baseado no seu mapa astral específico." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-gradient-to-b from-purple-800/30 to-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <summary className="font-bold cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-300 pl-4 border-l-2 border-purple-500/30">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced with more urgency */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
              Não perca a chance de se conhecer profundamente e transformar sua vida
            </h2>
            
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg mb-8 inline-block">
              <p className="text-xl font-bold">🔥 Oferta limitada – Últimas vagas disponíveis!</p>
              <p className="text-sm mt-2">Apenas 7 vagas restantes com desconto</p>
            </div>
            
            <a href="https://pay.kirvano.com/38a801d5-9355-4530-9172-5ad12388590a" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl px-12 py-6 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 mb-6">
                QUERO MEU ASTROGUIA AGORA
                <span className="block text-sm font-normal mt-1">Clique aqui para garantir seu desconto</span>
              </button>
            </a>
            
            {/* Final Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mt-8">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Compra 100% Segura
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                7 Dias de Garantia
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Satisfação Garantida
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;