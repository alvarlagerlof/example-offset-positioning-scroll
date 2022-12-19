import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <div className="max-h-screen overflow-hidden bg-gray-200">
          <Header />
          <Nav />
          <Main />
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="bg-gray-800 text-white px-6 py-2">
      <span>This is a banner</span>
    </header>
  );
}

function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-3 flex flex-row justify-between space-x-4 sm:space-x-8 md:space-x-32 items-center sticky top-0 shadow">
      <h1>Name goes here</h1>
      <div className="flex-1 h-full top-0">
        <div className="relative">
          <input
            placeholder="Search..."
            className="border-2 border-orange-300 px-3 py-2 rounded-lg w-full"
            onClick={() => setSearchOpen(true)}
          />

          {searchOpen ? (
            <>
              <div
                className="bg-black/20 w-full h-full left-0 fixed top-0"
                onClick={() => setSearchOpen(false)}
              />

              <ul className="bg-white px-3 py-4 rounded-lg w-96 absolute mt-2 overflow-y-scroll h-search">
                <SearchResults />
              </ul>
            </>
          ) : null}
        </div>
      </div>

      <button className="bg-gray-300 px-3 py-2 border-2 border-gray-300 rounded-lg">
        Log in
      </button>
    </nav>
  );
}

function SearchResults() {
  return (
    <ul className="space-y-4">
      <li>Result with quite a long title</li>
      <li>Another with quite a long title</li>
      <li>A third with quite a long title</li>
      <li>The forth result with quite a long title</li>
      <li>The fifth with quite a long title</li>
      <li>Quis est pariatur consectetur est eu</li>
      <li>Quis officia ea enim dolore non</li>
      <li>Aliqua dolor est sint incididunt</li>
      <li>Et id cillum et est voluptate velit</li>
      <li>Nulla dolore id. Nisi nostrud exercitation laborum</li>
      <li>Id sint consectetur mollit ullamco eiusmod</li>
      <li>Aliqua dolor est sint incididunt</li>
      <li>Et id cillum et est voluptate velit</li>
      <li>Nulla dolore id. Nisi nostrud exercitation laborum</li>
      <li>Id sint consectetur mollit ullamco eiusmod</li>
      <li>Aliqua dolor est sint incididunt</li>
      <li>Et id cillum et est voluptate velit</li>
      <li>Nulla dolore id. Nisi nostrud exercitation laborum</li>
      <li>Id sint consectetur mollit ullamco eiusmod</li>
      <li>Aliqua dolor est sint incididunt</li>
      <li>Et id cillum et est voluptate velit</li>
      <li>Nulla dolore id. Nisi nostrud exercitation laborum</li>
      <li>Id sint consectetur mollit ullamco eiusmod</li>{" "}
    </ul>
  );
}

function Main() {
  return (
    <main className="p-8 space-y-8 pt-12 overflow-y-scroll">
      <h2 className="text-4xl font-bold">TailwindCSS + React</h2>
      <ItemGrid />
    </main>
  );
}

function ItemGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {Array(100)
        .fill(null)
        .map((item) => (
          <div key={item} className="bg-gray-100 rounded-lg aspect-square" />
        ))}
    </div>
  );
}
