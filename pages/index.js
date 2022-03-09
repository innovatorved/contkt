import Head from 'next/head';
import Image from 'next/image';
import Message from '../components/Message';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Contkt</title>
        <meta name="description" content="Contkt App : Online Messaging Application" />
        <link rel="icon" href="/logonew.png" />
      </Head>

      <div className='text-center mt-24'>
        <Image
          src="/contkt-logo-extra-low-quality.png"
          alt='Contkt Logo'
          width={200}
          height={200}
        />
      </div>

      <main>
        <Message/>
      </main>
    </div>
  )
}
