import { useEffect, useState } from "react";

interface RecordOptimizerProps {
  id: string;
  paragraph: string;
  scene: string;
}

function RecordOptimizer() {
  const [script, setScript] = useState<RecordOptimizerProps[]>([]);
  const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    const scriptFromLocalStorage = localStorage.getItem("script");
    if (scriptFromLocalStorage) {
      const scriptArray = JSON.parse(scriptFromLocalStorage);
      setScript(scriptArray);
    }
  }, []);

  const recordTime = (paragraph: string) => {
    const wps = 3.5;
    const words = paragraph.trim().split(/\s+/).length;
    const time = Math.ceil(words / wps);
    return time;
  };

  const updateTotalTime = () => {
    let total = 0;
    script.forEach((paragraph) => {
      total += recordTime(paragraph.paragraph);
    });
    setTotalTime(total);
  };

  const handleSceneChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedScript = script.map((item, idx) =>
      idx === index ? { ...item, scene: event.target.value } : item
    );
    setScript(updatedScript);
    localStorage.setItem("script", JSON.stringify(updatedScript));
  };

  useEffect(() => {
    updateTotalTime();
  }, [script]);

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
                  <tr key={index + 1} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <p className="font-semibold text-black">{paragraph.id}</p>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      <p className="text-left">{paragraph.paragraph}</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Write the shot for your video."
                        value={paragraph.scene}
                        onChange={(e) => handleSceneChange(index, e)}
                        className="border rounded-md w-full p-3"
                      />
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {recordTime(paragraph.paragraph)} s
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      <input type="checkbox" name="" id="" />
                    </td>
                  </tr>
                ))}
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border"></td>
                  <td className="px-4 py-3 text-ms font-semibold border">
                    <p className="text-left">Total time</p>
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {totalTime} s
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecordOptimizer;
