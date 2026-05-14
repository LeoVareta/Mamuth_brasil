import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react'; // Adicionado Loader2
import { useToast } from '@/components/ui/use-toast';
import WhatsappButton from '@/components/WhatsappButton';
import { Button } from '@/components/ui/button';
import CTASection from "@/components/CTASection";
import { CONTACT_INFO } from '@/constants/contactInfo';
import emailjs from '@emailjs/browser'; // 1. Importação do EmailJS

const Contato = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false); // 2. Estado de carregamento

  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    howYouKnew: '',
    howYouKnewOther: ''
  });

  const [errors, setErrors] = useState({});

  const subjects = [
    t('assunto.orcamentoP'),
    t('assunto.orcamentoS'),
    t('assunto.suporte'),
    t('assunto.infos'),
    t('assunto.parceiras'),
    t('assunto.outros')
  ];

  const knowledgeSources = [
    'Google',
    t('assunto.indicacao'),
    'Instagram',
    'Facebook',
    'Youtube',
    'Tiktok',
    'Linkedin',
    t('assunto.cliente'),
    t('assunto.outros')
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = t('form.erroNome');
    if (!formData.email.trim()) {
      newErrors.email = t('form.erroEmail');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('form.erroEmail2');
    }
    if (!formData.telefone.trim()) newErrors.telefone = t('form.erroTelefone');
    if (!formData.assunto) newErrors.assunto = t('form.erroAssunto');
    if (!formData.mensagem.trim()) newErrors.mensagem = t('form.erroMensagem');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 3. Função handleSubmit Atualizada
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSending(true);

      // Mapeia os dados para as chaves {{}} do seu template no EmailJS
      const templateParams = {
        nome: formData.nome,
        empresa: formData.empresa || "Não informada",
        email: formData.email,
        telefone: formData.telefone,
        assunto: formData.assunto,
        mensagem: formData.mensagem,
        conheceu_por: formData.howYouKnew === 'Outros' ? formData.howYouKnewOther : formData.howYouKnew
      };
      //Config De Envio EmailJS
      emailjs.send(
        'service_irlq2q8',   // Substitua pelo seu Service ID
        'template_01u5nu2',  // Substitua pelo seu Template ID
        templateParams,
        'Z0G0yqrAUeD8jlqM1'    // Substitua pela sua Public Key
      )
      .then(() => {
        toast({
          title: "Mensagem Enviada!",
          description: "Obrigado pelo contato. Nossa equipe responderá em breve.",
        });

        // Limpa o formulário após sucesso
        setFormData({
          nome: '', empresa: '', email: '', telefone: '',
          assunto: '', mensagem: '', howYouKnew: '', howYouKnewOther: ''
        });
      })
      .catch((err) => {
        console.error('Erro ao enviar e-mail:', err);
        toast({
          title: "Erro no envio",
          description: "Não conseguimos enviar sua mensagem. Tente novamente ou use o WhatsApp.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSending(false);
      });
    } else {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contato.titlefone'),
      content: CONTACT_INFO.phone.display,
      link: CONTACT_INFO.phone.whatsapp
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: CONTACT_INFO.email.address,
      link: CONTACT_INFO.email.link
    },
    {
      icon: MapPin,
      title: t('contato.matriz'),
      content: t('footer.endereco'),
      link: null
    },
    {
      icon: MapPin,
      title: t('contato.filial'),
      content: 'Av. Pref. Aristeu Ferreira da Silva, 321 Novo Cavaleiros - Macaé/RJ',
      link: null
    },
    {
      icon: Clock,
      title: t('contato.titleHorario'),
      content: t('contato.horario'),
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Mamuth | Fale Conosco</title>
        <meta name="description" content="Entre em contato com a Mamuth. Estamos prontos para atender suas necessidades em equipamentos industriais e soluções de alta pressão." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contato.titleContato')}</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              {t('contato.subtitleContato')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
                {t('form.titleMsg')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.nome')}*
                  </label>
                  <input
                    type="text" id="nome" name="nome"
                    value={formData.nome} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-900 ${errors.nome ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={t('form.placeNome')}
                  />
                  {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                </div>

                {/* Campo Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.empresa')}*
                  </label>
                  <input
                    type="text" id="empresa" name="empresa"
                    value={formData.empresa} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-900"
                    placeholder={t('form.placeEmpresa')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Campo E-mail */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.Email')}*
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder={t('form.placeEmail')}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Campo Telefone */}
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('form.Telefone')}*
                    </label>
                    <input
                      type="tel" id="telefone" name="telefone"
                      value={formData.telefone} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-900 ${errors.telefone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder={t('form.placeTelefone')}
                    />
                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.assunto')} *
                  </label>
                  <select
                    id="assunto" name="assunto"
                    value={formData.assunto} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-900 ${errors.assunto ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">{t('form.placeAssunto')}</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                  {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto}</p>}
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('mensagem')} *
                  </label>
                  <textarea
                    id="mensagem" name="mensagem"
                    value={formData.mensagem} onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-all resize-none bg-white text-gray-900 ${errors.mensagem ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder={t('form.placemensagem')}
                  ></textarea>
                  {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>}
                </div>

                {/* Como nos conheceu */}
                <div>
                  <label htmlFor="howYouKnew" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('form.conheceu')}
                  </label>
                  <select
                    id="howYouKnew" name="howYouKnew"
                    value={formData.howYouKnew} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-900"
                  >
                    <option value="">{t('form.placeConheceu')}</option>
                    {knowledgeSources.map((source, index) => (
                      <option key={index} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                <AnimatePresence>
                  {formData.howYouKnew === 'Outros' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label htmlFor="howYouKnewOther" className="block text-sm font-medium text-gray-700 mb-1">
                        Como nos conheceu?
                      </label>
                      <input
                        type="text" id="howYouKnewOther" name="howYouKnewOther"
                        value={formData.howYouKnewOther} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-900"
                        placeholder="Por favor, especifique"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Botão com Loading */}
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 text-white font-semibold rounded-lg transition-all hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#FF5101' }}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('form.btn')}
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
                  {t('contato.titleInfos')}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5101' }}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1" style={{ color: 'var(--color-dark-blue)' }}>
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            style={{ color: '#FF5101' }}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.465322530075!2d-46.5881926238852!3d-23.515760559920015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58d2b1123363%3A0x113d89cba51c4b4!2sMamuth%20-%20Mangueiras!5e0!3m2!1spt-PT!2sbr!4v1777496144166!5m2!1spt-PT!2sbr"
                  width="100%" height="320" style={{ border: 0 }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Mamuth"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection />
      <WhatsappButton />
    </>
  );
};

export default Contato;