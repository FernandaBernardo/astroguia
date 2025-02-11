import React, { useState, useEffect } from 'react';
import { Star, DollarSign, Heart, GraduationCap, Sparkles, Book, Target, User, Gift, Clock, Shield } from 'lucide-react';

function App() {

  // Estado para armazenar o tempo restante em segundos
  const [remainingTime, setRemainingTime] = useState(15 * 60); // 15 minutos

  // Função para formatar números com dois dígitos
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  // Efeito para atualizar o cronômetro a cada segundo
  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => setRemainingTime((prevTime) => prevTime - 1), 1000);
      return () => clearTimeout(timer); // Limpa o temporizador ao desmontar o componente
    } else {
      alert('A oferta expirou!');
    }
  }, [remainingTime]);

  // Calcula horas, minutos e segundos a partir do tempo restante
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

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
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-4 rounded-lg mb-8 shadow-lg shadow-pink-500/20">
            <p className="text-lg font-bold mb-2">🔥 OFERTA ESPECIAL DE LANÇAMENTO</p>
            <p className="text-sm">Desconto de 50% expira em:</p>
            <div className="flex justify-center gap-4 mt-2">
              <div className="bg-black/30 px-3 py-2 rounded">
                <span className="text-2xl font-bold">{formatTime(hours)}</span>
                <p className="text-xs">HORAS</p>
              </div>
              <div className="bg-black/30 px-3 py-2 rounded">
                <span className="text-2xl font-bold">{formatTime(minutes)}</span>
                <p className="text-xs">MIN</p>
              </div>
              <div className="bg-black/30 px-3 py-2 rounded">
                <span className="text-2xl font-bold">{formatTime(seconds)}</span>
                <p className="text-xs">SEG</p>
              </div>
            </div>
          </div>
          
          <a href="https://pay.kirvano.com/38a801d5-9355-4530-9172-5ad12388590a" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xl px-12 py-6 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 mb-4">
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
                    <h4 className="font-bold text-white">Reflexões práticas</h4>
                    <p className="text-sm text-gray-300">Insights transformadores para sua vida</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500/20 p-2 rounded-full mr-4">
                    <span className="text-green-400 text-xl">✓</span>
                  </span>
                  <div>
                    <h4 className="font-bold text-white">+50 páginas sobre você</h4>
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
              <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30">
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
                icon: <GraduationCap className="w-8 h-8" />, 
                title: "Orientação Profissional", 
                desc: "Direcionamento para alinhar carreira e vocação",
                highlight: "Transformador"
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
            <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm">
              50% OFF
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-yellow-200 text-transparent bg-clip-text">
                Oferta Especial de Lançamento
              </h2>
              
              <div className="mb-8">
                <div className="text-2xl line-through text-gray-400 mb-2">De R$297,00</div>
                <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 mb-4">
                  <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 mb-2">12 x</span> R$14,99
                </div>
                <div className="text-xl mb-2">ou R$149,90 à vista!</div>
                <p className="text-gray-300 text-sm">Economia de R$147,10</p>
              </div>
              
              {/* Bonus Section */}
              <div className="bg-purple-900/50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 text-yellow-300">🎁 Bônus Exclusivos</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-purple-800/30 p-4 rounded-lg flex justify-center items-center flex-col">
                    <Gift className="w-6 h-6 mb-2 text-yellow-300" />
                    <h4 className="font-bold mb-1">Dicionário Astrológico</h4>
                    <p className="text-sm text-gray-300 line-through">Valor: R$97,90</p>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg flex justify-center items-center flex-col">
                    <Book className="w-6 h-6 mb-2 text-yellow-300" />
                    <h4 className="font-bold mb-1">Perguntas Poderosas</h4>
                    <p className="text-sm text-gray-300 line-through">Valor: R$47,90</p>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg flex justify-center items-center flex-col">
                    <User className="w-6 h-6 mb-2 text-yellow-300" />
                    <h4 className="font-bold mb-1">Suporte Especializado</h4>
                    <p className="text-sm text-gray-300 line-through">Valor: R$147,90</p>
                  </div>
                </div>
              </div>
              
              <a href="https://pay.kirvano.com/38a801d5-9355-4530-9172-5ad12388590a" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xl px-12 py-6 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 mb-6 w-full md:w-auto">
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
                name: "Mariana Souza, 32 anos", 
                text: "O AstroGuia me ajudou a me entender de uma forma profunda. As orientações práticas mudaram minha vida!",
                highlight: "Reflexão" 
              },
              { 
                name: "Renata Almeida, 40 anos", 
                text: "O AstroGuia me deu clareza nas minhas decisões profissionais. Foi mais do que eu esperava!",
                highlight: "Direção"
              },
              { 
                name: "Fernanda Lima, 34 anos", 
                text: "O AstroGuia me ajudou a entender aspectos da minha personalidade que eu nunca tinha percebido. Agora, sinto que estou no caminho certo para me desenvolver pessoalmente!",
                highlight: "Desbloqueio"
              },
              { 
                name: "Larissa Silva, 25 anos", 
                text: "A leitura foi reveladora. Já comecei a aplicar as dicas e estou vendo mudanças reais!",
                highlight: "Impacto"
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
                q: "O AstroGuia é personalizado para mim ou é um modelo genérico?", 
                a: "O seu AstroGuia é totalmente personalizado! Ele é feito manualmente de acordo com o alinhamento dos planetas no dia, hora e local do seu nascimento. Isso garante que o conteúdo seja único e relevante para a sua jornada de autoconhecimento." 
              },
              { 
                q: "Em quanto tempo recebo meu AstroGuia?", 
                a: "Em até 5 dias úteis, no e-mail informado no checkout. Você receberá um PDF personalizado e completo." 
              },
              { 
                q: "O que faço depois de comprar o AstroGuia?", 
                a: "Após a compra, você receberá um e-mail de confirmação com todos os detalhes. Em até 5 dias úteis, o seu mapa astral personalizado será enviado para o e-mail informado durante o checkout. Fique de olho na sua caixa de entrada!" 
              },
              { 
                q: "⁠Como posso informar meus dados para criar o meu mapa astral personalizado?", 
                a: "Após a compra, você será solicitado a fornecer seus dados de nascimento, como: data, hora e local de nascimento. Isso é essencial para garantir que o seu mapa astral seja preciso e totalmente personalizado."
              },
              { 
                q: "⁠⁠Em quanto tempo posso começar a ver resultados?", 
                a: "Os resultados podem começar a aparecer rapidamente! Como o AstroGuia oferece ações práticas e conselhos específicos, você pode aplicar as recomendações já no mesmo dia. O autoconhecimento é um processo contínuo, então você verá novas descobertas e insights conforme vai refletindo sobre as orientações." 
              },
              { 
                q: "⁠⁠Posso obter suporte se eu tiver dúvidas após a compra?", 
                a: "Sim! Se você tiver qualquer dúvida sobre o conteúdo do seu mapa ou como aplicar as orientações, pode entrar em contato conosco por e-mail. Nosso time de suporte estará disponível para te ajudar." 
              },
              { 
                q: "⁠⁠Como posso garantir que meu mapa astral seja refeito se não fizer sentido para mim?", 
                a: "Nós oferecemos uma garantia de 7 dias. Se você sentir que o mapa astral não refletiu sua realidade ou não fez sentido, basta entrar em contato com nosso suporte dentro desse prazo, e nós refaremos o seu mapa para você." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-gradient-to-b from-purple-800/30 to-purple-900/30 p-6 rounded-xl border border-purple-500/20">
                <summary className="font-bold cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="text-pink-500 group-open:rotate-180 transition-transform">▼</span>
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
            
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-4 rounded-lg mb-8 block">
              <p className="text-xl font-bold">🔥 Oferta limitada – Últimas vagas disponíveis!</p>
              <p className="text-sm mt-2">Apenas 7 vagas restantes com desconto</p>
            </div>

            <a href="https://pay.kirvano.com/38a801d5-9355-4530-9172-5ad12388590a" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xl px-12 py-6 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 mb-6">
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