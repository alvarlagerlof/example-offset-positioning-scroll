import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <div className="bg-gray-200 grid grid-areas-layout grid-cols-layout grid-rows-layout h-screen">
          <Header />
          {searchOpen ? (
            <div
              className="bg-black/20 w-full h-full grid-in-sidebar z-10"
              onClick={() => setSearchOpen(false)}
            />
          ) : null}
          {searchOpen ? (
            <div
              className="bg-black/20 w-full h-full grid-in-content z-10"
              onClick={() => setSearchOpen(false)}
            />
          ) : null}

          <Nav searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  );
}

function Sidebar() {
  return (
    <aside className="grid-in-sidebar sticky top-0 self-start	py-28 ml-6">
      <ul className="space-y-3 hidden md:block">
        {Array(15)
          .fill(null)
          .map((item) => (
            <div key={item} className="bg-gray-300 rounded-lg h-6 w-full" />
          ))}
      </ul>
    </aside>
  );
}

function Header() {
  return (
    <header className="grid-in-header bg-gray-800 text-white px-6 py-2">
      <span>This is a banner</span>
    </header>
  );
}

function Nav({
  searchOpen,
  setSearchOpen,
}: {
  searchOpen: boolean;
  setSearchOpen: (searchOpen: boolean) => void;
}) {
  return (
    <nav className="grid-in-nav z-20 bg-white px-6 py-3 flex flex-row justify-between space-x-4 sm:space-x-8 md:space-x-32 items-center sticky top-0 shadow">
      <h1>Name goes here</h1>
      <div className="flex-1 h-full top-0">
        <div className="relative">
          <input
            placeholder="Search..."
            className="border-2 border-orange-300 px-3 py-2 rounded-lg w-full"
            onClick={() => setSearchOpen(true)}
          />

          {searchOpen ? (
            <div className="bg-white px-3 py-4 rounded-lg w-96 absolute mt-2 overflow-y-scroll h-search">
              <SearchResults />
            </div>
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
    <ul className="space-y-4 sticky top-24">
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
    <main className="grid-in-content ml-10 mr-6 space-y-6 pt-12 h-screen overflow-y-auto">
      <h2 className="text-4xl font-bold">TailwindCSS + React</h2>
      <ItemGrid />
    </main>
  );
}

function ItemGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {Array(56)
        .fill(null)
        .map((item) => (
          <div key={item} className="bg-gray-100 rounded-lg aspect-square" />
        ))}
    </div>
  );
}
