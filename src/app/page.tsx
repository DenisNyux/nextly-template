import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle title="О музее">
        Нейрофизиолог и исследователь мозга оставила уникальное наследие в науке
        и медицине. Ее вклад в понимание механизмов работы мозга навсегда
        изменил подход к лечению психических и неврологических заболеваний.
        Однако Наталья Петровна была не только новатором и ученым мирового
        уровня. Она глубоко верила в человеческую способность к развитию, поиску
        радости и исцелению через эмпатию и любовь к жизни.
        <br />
        <br />В онлайн-музее мы приглашаем вас прикоснуться к наследию этой
        великой женщины, погрузиться в её исследования, размышления и жизненные
        принципы. Здесь мы рассказываем о том, что вдохновляло Наталью Петровну,
        как её идеи продолжают жить в современных подходах психотерапии и
        нейробиологии.
      </SectionTitle>

      <Benefits imgPos="left" data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle=""
        title="Посмотрите видео"
      >
        Видео о музее. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam obcaecati 
      </SectionTitle>

      <Video videoId="5qjGU01fbRY" />

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq />
      <Cta /> */}
    </Container>
  );
}
