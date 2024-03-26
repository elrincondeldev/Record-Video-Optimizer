import { useValueStore } from "../store/valueStore";

function RecordOptimizer() {
  const { script } = useValueStore((state) => ({
    script: state.script,
  }));

  const recordTime = (paragraph: string) => {
    const wps = 2.5;
    const words = paragraph.trim().split(/\s+/).length;
    const time = Math.ceil(words / wps);
    return time;
  };

  return (
    <>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Id</th>
                  <th className="px-4 py-3">Paragraph</th>
                  <th className="px-4 py-3">Duration</th>
                  <th className="px-4 py-3">It's done?</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {script.map((paragraph, index) => (
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <p className="font-semibold text-black">{index + 1}</p>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      <p className="text-left">{paragraph}</p>
                      <textarea
                        name=""
                        id=""
                        placeholder="Write the shot for your video."
                        className="border rounded-md w-full h-[100px] p-3"
                      />
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {recordTime(paragraph)} s
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      <input type="checkbox" name="" id="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecordOptimizer;
