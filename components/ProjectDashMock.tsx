export const ProjectDashMock = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 p-10">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
        <header className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Project Dashboard
          </h2>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
          </div>
        </header>

        <main className="grid grid-cols-3 gap-5">
          <div className="rounded-xl bg-pink-50 p-4">
            <h3 className="mb-4 text-sm font-medium text-pink-700">To Do</h3>

            <div className="flex flex-col gap-3">
              <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-3/4 rounded-full bg-pink-300"></div>
                  <div className="h-2 w-full rounded-full bg-gray-200"></div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-3/4 rounded-full bg-pink-300"></div>
                  <div className="h-2 w-full rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-blue-50 p-4">
            <h3 className="mb-4 text-sm font-medium text-blue-700">
              In Progress
            </h3>

            <div className="flex flex-col gap-3">
              <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-3/4 rounded-full bg-blue-300"></div>
                  <div className="h-2 w-full rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-green-50 p-4">
            <h3 className="mb-4 text-sm font-medium text-green-700">Done</h3>

            <div className="flex flex-col gap-3">
              <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-3/4 rounded-full bg-green-300"></div>
                  <div className="h-2 w-full rounded-full bg-gray-200"></div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-3/4 rounded-full bg-green-300"></div>
                  <div className="h-2 w-full rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
