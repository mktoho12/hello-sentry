import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-center text-3xl">Hello Sentry</h1>

        <button
          type="button"
          onClick={() => {
            throw new Error('Sentry Frontend Error')
          }}
        >
          Throw error
        </button>
      </main>
    </>
  )
}
