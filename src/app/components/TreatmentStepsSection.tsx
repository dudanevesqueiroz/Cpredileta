import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router";
import imagem1 from "../../imports/imagem_1.jpeg";
import imagem2 from "../../imports/imagem_2_.jpeg";
import imagem3 from "../../imports/imagem_3.jpeg";

interface Step {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Avaliação Clínica Completa",
    description: "Consulta inicial com diagnóstico e recolha de exames",
    imageUrl: imagem1
  },
  {
    id: 2,
    title: "Exames e Planeamento",
    description: "Radiografias e definição do plano de tratamento personalizado",
    imageUrl: imagem2
  },
  {
    id: 3,
    title: "Preparação do Tratamento",
    description: "Higienização e preparação da cavidade oral",
    imageUrl: imagem3
  },
  {
    id: 4,
    title: "Procedimento Clínico",
    description: "Execução do tratamento com técnicas modernas",
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=800"
  },
  {
    id: 5,
    title: "Acompanhamento e Manutenção",
    description: "Revisão e recomendações pós-tratamento",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=800"
  }
];

export default function TreatmentStepsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.min(Math.floor(latest * steps.length), steps.length - 1);
      setActiveStep(stepIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="bg-white py-24 md:py-32" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Coluna Esquerda - Timeline Fixa */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-3xl p-8 md:p-10"
            >
              <h2 className="text-4xl md:text-5xl font-light text-[#2934b7] mb-4">
                Etapas do Tratamento
              </h2>
              <p className="text-gray-600 font-light mb-8 leading-relaxed">
                Desde a primeira consulta até ao acompanhamento final, garantimos cuidado e profissionalismo em cada etapa da sua jornada para um sorriso saudável.
              </p>

              <Link
                to="/marcar-consulta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2934b7] to-[#1E2894] text-white rounded-full hover:shadow-xl hover:-translate-y-1 transition-all font-medium mb-12"
              >
                <Calendar className="w-5 h-5" />
                Marcar Consulta de Avaliação
              </Link>

              {/* Timeline Vertical */}
              <div className="relative pl-12">
                {/* Linha de fundo */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

                {/* Linha de progresso */}
                <motion.div
                  className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-[#2934b7] to-[#1BADC4]"
                  style={{ height: lineProgress }}
                />

                {/* Círculos numerados */}
                <div className="space-y-16">
                  {steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <motion.div
                        className={`absolute -left-12 w-12 h-12 rounded-full border-4 flex items-center justify-center font-medium transition-all duration-500 ${
                          index <= activeStep
                            ? "bg-gradient-to-br from-[#2934b7] to-[#1E2894] border-white text-white shadow-lg scale-110"
                            : "bg-white border-gray-300 text-gray-400"
                        }`}
                      >
                        {step.id}
                      </motion.div>
                      <div className={`transition-opacity duration-500 ${index === activeStep ? "opacity-100" : "opacity-40"}`}>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-light">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coluna Direita - Imagens Scrolláveis */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <ImageStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoStep({ step, index }: { step: Step; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const handlePlayPause = async (shouldPlay: boolean) => {
      const video = videoRef.current;
      if (!video) return;

      if (shouldPlay && !isPlayingRef.current) {
        // Wait for any pending play promise to resolve first
        if (playPromiseRef.current) {
          try {
            await playPromiseRef.current;
          } catch (e) {
            // Ignore
          }
        }

        try {
          playPromiseRef.current = video.play();
          isPlayingRef.current = true;
          await playPromiseRef.current;
        } catch (error) {
          isPlayingRef.current = false;
          // Auto-play was prevented or interrupted
        }
      } else if (!shouldPlay && isPlayingRef.current) {
        // Wait for any pending play promise before pausing
        if (playPromiseRef.current) {
          try {
            await playPromiseRef.current;
          } catch (e) {
            // Ignore
          }
        }

        try {
          video.pause();
          isPlayingRef.current = false;
        } catch (error) {
          // Pause failed
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        handlePlayPause(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
      isPlayingRef.current = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="min-h-[80vh] flex flex-col justify-center"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
        <div className="relative aspect-video bg-gray-900">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          ><source src={step.videoUrl} type="video/mp4" /></video>
          <div className="absolute top-4 left-4 bg-[#2934b7] text-white px-4 py-2 rounded-full text-sm font-medium">
            Etapa {step.id}
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">
            {step.title}
          </h3>
          <p className="text-gray-600 font-light leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ImageStep({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="min-h-[80vh] flex flex-col justify-center"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
        <div className="relative aspect-video">
          {/* Imagem de fundo */}
          <img
            src={step.imageUrl}
            alt={step.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay escuro para legibilidade */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Selo da etapa */}
          <div className="absolute top-4 left-4 bg-[#2934b7] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-10">
            Etapa {step.id}
          </div>

          {/* Título e descrição sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
              {step.title}
            </h3>
            <p className="text-white/90 font-light leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
