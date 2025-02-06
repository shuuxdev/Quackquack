import Feed from './Feed';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow py-6 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Modern Feed
          </h1>
        </div>
      </header>

      {/* Feed */}
      <main className="max-w-5xl mx-auto px-4">
        <Feed />
      </main>
    </div>
  );
};

export default App;
