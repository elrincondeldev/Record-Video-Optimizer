import { useValueStore } from "../store/valueStore";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const { setScript } = useValueStore((state) => ({
    setScript: state.setScript,
    script: state.script,
  }));

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = (
      e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement
    ).value;
    setScript(message.split(/(?<=\.)\s*/));
    navigate("/record-optimizer");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" mx-auto p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Record Video Optimizer</h2>
        <form action="#" method="POST" onSubmit={onHandleSubmit}>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write the script for your video"
              className="w-[500px] px-3 py-2 h-[500px] border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Record!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
