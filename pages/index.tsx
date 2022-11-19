import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text, Heading } from "@chakra-ui/react"


import CustomNavBar from '../components/navbarcontainer'
import CustomBtn from '../components/button'
import ImageCap from '../components/captionimage'
import ContentStack from '../components/contentstack'
import Section from '../components/section'
import { useRef } from 'react'

export default function Home() {

  const about = useRef<HTMLDivElement>(null)
  const home = useRef<HTMLDivElement>(null)
  const freq = useRef<HTMLDivElement>(null)

  return (   
    <div> 

      <CustomNavBar 
        onAboutClick={() => about.current?.scrollIntoView({ behavior: 'smooth'})}
        onHomeClick={() => home.current?.scrollIntoView({ behavior: 'smooth' })}
        onFreqClick={() => freq.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <div className={styles.backgroundImage}>
        <div className={styles.logo}>
        </div>

        <p className={styles.description}>
          Design smarter, not harder
        </p>
      </div>

      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>



        <main className={styles.main}>

          <ContentStack>
            <ImageCap path='/Intro_1.png'/>
            <ImageCap path='/Intro_2.png'/>
            <ImageCap path='/Intro_3.png'/>
            <ImageCap path='/Intro_4.png'/>
          </ContentStack>

          <Section
            title="About"
            text="Enhanced Interiors takes the guess work out of decorating your home. Using AR we size up your walls and do the calculations to make sure what you see is what you get!"
            id="about"
            src="/Intro_1.png"
            orientation={true}
          />

          <Section 
            title="Review"
            text="Hosting a wide variety of providers, we let you select from a wide catalogue of designs to help you make that crucial decision and get things looking the way you want."
            id="review"
            src="/Intro_2.png"
            orientation={false}
          />

          <div style={{padding: '5em 0em'}} id="freq">
            <Heading>Frequently Asked Questions</Heading>
            <Text className={styles.listStylePosition}>
              "How much is the app?"
            </Text>
            <Text style={{textAlign: 'left'}} >
              
            </Text>
          </div>

          <ContentStack>
            <ImageCap path='/Intro_2.png' caption="fsdfds"/>
            <ImageCap path='/Intro_3.png' caption="fsdfds"/>   
            <ImageCap path='/Intro_4.png' caption="fsdfds"/>                 
          </ContentStack>

        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </div>
  )
}
