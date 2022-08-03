import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import postgreSQL from './assets/postgresql-logo-svgrepo-com.svg'
import marketting from './assets/marketing.ddb9a5b3.png'
import servers from './assets/servers.png'

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cloud Database</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&family=Rubik&display=swap" rel="stylesheet" />
            </Helmet>

            <div className="relative h-screen overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <a href="#">
                                                <span className="sr-only">Database</span>
                                                <img alt="Database Management" className="h-8 w-auto sm:h-10" src={servers} />
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-28">
                            <div className="sm:text-center px-8 bg-white sm:max-w-2xl sm:m-auto py-3 lg:text-left">
                                <h1 className="text-2xl tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
                                    <span className="block xl:inline">
                                        Cloud infrastructure for your
                                    </span>
                                    <span className="block ml-2 text-emerald-600 xl:inline">
                                         database solutions.
                                    </span>
                                </h1>

                                <p className="mt-3 text-sm sm:text-left rubik text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                                    All the services you need to create, migrate, backup, build, and run your databases under one roof. 

                                    <span className="block mt-5">
                                        Connect to your database cloud solution:
                                        {/* Choose a database to connect to: */}
                                    </span>
                                </p>
                                
                                <div className="mt-5 sm:mt-5 sm:flex flex-col lg:w-7/12 md:w-6/12 md:ml-4 lg:ml-0 mb-6 sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow-none">
                                        <a href="https://database.kennedykitho.me/pgadmin4" className="w-full text-sm flex align-middle px-4 py-3 border border-emerald-500 font-medium rounded-md text-gray-700 hover:bg-emerald-50 md:py-3 md:text-lg md:px-5 flex-row">
                                            <div className="w-6 h-6 mr-3">
                                                <img alt="psql" className="" src={postgreSQL} />
                                            </div>
                                            
                                            <span>
                                                PostgreSQL Database
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={marketting} alt="" />
                </div>
            </div>

        </div>
    );
}

export default App;
