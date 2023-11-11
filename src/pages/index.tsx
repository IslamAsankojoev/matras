import Image from 'next/image'
import { Montserrat, Alumni_Sans } from 'next/font/google'
import { Button, Col, Grid, Row, Space } from 'antd'
import React from 'react'

const whatsapp = 'https://wa.me/+996555555779'
const montserrat = Montserrat({ subsets: ['latin'] })
const alumniSans = Alumni_Sans({ subsets: ['latin'] })

const Container = ({ children }: { children: any }) => (
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      padding: '0 20px',
    }}
  >
    {children}
  </div>
)

export default function Home() {
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${montserrat.className}`}
    >
      <div className="overlay fixed w-full h-screen bg-[rgba(0,0,0,.0)]"></div>
      <div
        className="h-screen"
        style={{
          backgroundImage: 'url(/firstBG.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          // padding: '0 10%',
          flexDirection: 'column',
          zIndex: 10,
          width: '100%',
        }}
      >
        <section
          id="header"
          className="fixed top-0 left-0 w-full flex justify-between py-6 transition"
          style={{
            background: scrollY > 0 ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.3)',
            padding: scrollY > 0 ? '15px 0' : '20px 0',
          }}
        >
          <Container>
            <div className="flex justify-between w-full">
              <h1 className={`${alumniSans.className} text-4xl text-white font-extrabold`}>
                UZGEN SPORT
              </h1>
              <div className="flex items-center justify-center">
                <Button
                  href={whatsapp}
                  target="_blank"
                  type="primary"
                  size="middle"
                  className="bg-blue-600"
                >
                  Свяжитесь с нами
                </Button>
              </div>
            </div>
          </Container>
        </section>
        <Container>
        <Row
        >
          <Col md={12} sm={24}>
            <Space size="large" direction="vertical">
              <h2 className={`${montserrat.className} text-xl md:text-3xl text-white`}>
                Купите качественные матрасы и груши для вашего спортзала
              </h2>
              <p className={`${montserrat.className} text-sm md:text-lg text-white`}>
                Добро пожаловать в наш магазин спортивного оборудования, где вы найдете широкий
                ассортимент матрасов и груш для спортзала. Наши продукты обеспечат вам комфорт и
                безопасность во время тренировок. Мы гордимся предоставлением продукции высокого
                качества по доступным ценам.
              </p>
              <Button
                href={whatsapp}
                target="_blank"
                type="primary"
                size="large"
                className="bg-blue-600"
              >
                Свяжитесь с нами
              </Button>
            </Space>
          </Col>
          <Col md={12} sm={24}></Col>
        </Row>
        </Container>
      </div>

      {/* block1 */}
      <Container>
        <section className="py-40">
          <Row>
            <Col md={12} sm={24}>
              <Space className="p-4">
                <Image src="/155-tatami-large.png" width={500} height={500} alt="logo" />
              </Space>
            </Col>
            <Col md={12} sm={24}>
              <Space className="p-4" direction="vertical" size={20}>
                <h2 className={`${montserrat.className} text-2xl md:text-3xl`}>
                  Матрасы Татами Пазлы: Комфорт и Защита
                </h2>
                <p className={`${montserrat.className} text-base md:text-lg`}>
                  Наши матрасы Татами Пазлы - это идеальное решение для спортзалов и тренажерных
                  помещений. Они обеспечивают отличное смягчение при падениях и ударах, что делает
                  их идеальным выбором для занятий боевыми искусствами, гимнастикой, йогой и многими
                  другими видами физической активности. Наши матрасы легко соединяются в единое
                  целое и удобны в уходе. Выберите качество и надежность с нашими матрасами Татами
                  Пазлы.
                </p>
              </Space>
            </Col>
          </Row>
        </section>
      </Container>

      <section id="our-prems" className="w-full p-10 bg-gray-800">
        <Container>
          <Row className="gap-8 md:gap-0">
            <Col md={6} sm={24}>
              <Space direction="vertical" align="center">
                <Image src="/quality.png" alt="quality" width={80} height={80} className="invert" />
                <h4 className="text-sm text-white">Высокое качество матрасов</h4>
                <p className="text-xs text-white text-center">
                  Наши матрасы изготовлены из прочных материалов, обеспечивая долгий срок службы и
                  максимальный комфорт.
                </p>
              </Space>
            </Col>
            <Col md={6} sm={24}>
              <Space direction="vertical" align="center">
                <Image
                  src="/in-stock.png"
                  alt="quality"
                  width={80}
                  height={80}
                  className="invert"
                />
                <h4 className="text-sm text-white">Широкий выбор груш для спорта</h4>
                <p className="text-xs text-white text-center">
                  Мы предлагаем разнообразие груш для тренировок, подходящих для разных видов спорта
                  и уровней подготовки.
                </p>
              </Space>
            </Col>
            <Col md={6} sm={24}>
              <Space direction="vertical" align="center">
                <Image
                  src="/shipped.png"
                  alt="shipping"
                  width={80}
                  height={80}
                  className="invert"
                />
                <h4 className="text-sm text-white ">Быстрая доставка и установка</h4>
                <p className="text-xs text-white text-center">
                  Мы гарантируем быструю доставку и помощь в установке вашего спортивного
                  оборудования для немедленного использования.
                </p>
              </Space>
            </Col>
            <Col md={6} sm={24}>
              <Space direction="vertical" align="center">
                <Image
                  src="/businessman.png"
                  alt="quality"
                  width={80}
                  height={80}
                  className="invert"
                />
                <h4 className="text-sm text-white">Профессиональные консультации</h4>
                <p className="text-xs text-white text-center">
                  Наши эксперты готовы предоставить вам советы и рекомендации по выбору и уходу за
                  вашим оборудованием.
                </p>
              </Space>
            </Col>
          </Row>
        </Container>
      </section>

      {/* block2 */}
      <Container>
        <section className="py-40">
          <Row>
            <Col md={12} sm={24}>
              <Space className="p-4" direction="vertical" size={20}>
                <h2 className={`${montserrat.className} text-2xl md:text-3xl`}>
                  Груши для Тренировок: Сила и Устойчивость
                </h2>
                <p className={`${montserrat.className} text-base md:text-lg`}>
                  Если вы ищете эффективное оборудование для упражнений и тренировок, наши груши -
                  идеальный выбор. Груши спроектированы для укрепления мышц и улучшения координации
                  движений. Они подходят для бокса, ударных тренировок и многих других видов спорта.
                  Все груши в нашем ассортименте изготовлены из высококачествных материалов,
                  обеспечивая долгий срок службы.
                </p>
              </Space>
            </Col>
            <Col md={12} sm={24}>
              <Space className="p-4">
                <Image src="/punch-bag.jpg" width={500} height={500} alt="logo" />
              </Space>
            </Col>
          </Row>
        </section>
      </Container>

      {/* footer */}
      <section id="footer" className="w-full p-10 bg-gray-900">
        <Container>
          <Space className="flex justify-between md:flex-row flex-col gap-4 ">
            <div className="flex items-center justify-center">
              <Image src="/vercel.svg" width={100} height={100} alt="logo" className="invert" />
            </div>
            <div className="flex items-center justify-center text-white text-center">
              @2023 by Islam & Beknazar. Защищено законом об авторских правах.
            </div>
            <div className="flex items-center justify-center">
              <Button
                href={whatsapp}
                target="_blank"
                type="primary"
                size="middle"
                className="bg-blue-600"
              >
                Свяжитесь с нами
              </Button>
            </div>
          </Space>
        </Container>
      </section>

      <Button
        href={whatsapp}
        type="link"
        className="whatsapp-button fixed bottom-10 right-8 z-50 w-14 h-14 rounded-full p-0 m-0 hover:scale-110 active:scale-100"
      >
        <Image src="/whatsapp.png" alt="whatsapp" width={50} height={50} />
      </Button>
    </main>
  )
}
