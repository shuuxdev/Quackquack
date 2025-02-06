import Feed from './Feed';
import AnimatedBackground from './AnimatedBackground';
import DuckIcon from './DuckIcon';

const App = () => {
  return (
    <div className="relative min-h-screen bg-yellow-50 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-10 bg-yellow-500 shadow py-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center space-x-4">
          <DuckIcon />
          <DuckIcon />

          <DuckIcon />
          <DuckIcon />
          <DuckIcon />
          <DuckIcon />
          <DuckIcon />
          <DuckIcon />
          <DuckIcon />
          <DuckIcon />
          <DuckIcon />

          <h1 className="text-4xl font-extrabold text-white">
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 py-10">
        <Feed />
      </main>
    </div>
  );
};

export default App;
