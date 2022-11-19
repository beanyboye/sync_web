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
          <br></br>
          <div style={{padding: ".5em 0"}}>
            <CustomBtn placeholder="SignUp" background={true} />
          </div>
        </p>
      </div>

      <div className={styles.container}>
        <Head>
          <title>Enhanced Interiors</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main className={styles.main}>

          <Text maxWidth="50%">
            Lorem ipsum dolor sit amet, consectetur adipiscin suscipit quis vel erat. scing elit. Nam a risus id ipsum dictum susciscing elit. Nam a risus id ipsum dictum susci
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a risus id ipsum dictum suscipit quis vel erat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ris vel erat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a risus id ipsum dictum suscipit quis vel erat. scing elit. Nam a risus id ipsum dictum susci
          </Text>
          
          <div style={{padding: "2em 0"}}/>

          <ContentStack>
            <ImageCap path='/Intro_1.png'/>
            <ImageCap path='/Intro_2.png'/>
            <ImageCap path='/Intro_3.png'/>
            <ImageCap path='/Intro_4.png'/>
          </ContentStack>

          <div style={{padding: "2em 0"}}/>

          <Section
            title="About"
            text=
            "Lorem ipsum dolor sit amet"
            id="about"
            src="/placeholder.png"
            orientation={true}
            button={true}
          />
          <div style={{padding: "2em 0"}}/>
          <Section 
            title="Review"
            text=
            "Nam a risus id ipsum dictum suscipit quis vel erat. "
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
            <ImageCap path='/nick.jpg' caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a risus id ipsum dictum suscipit quis vel erat. " fill={true} name="nick"/>
            <ImageCap path='/katie.png' caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a risus id ipsum dictum suscipit quis vel erat. " fill={true} name="katie"/>   
            <ImageCap path='/callum.jpg' caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a risus id ipsum dictum suscipit quis vel erat. " fill={true} name="callum"/> 
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
