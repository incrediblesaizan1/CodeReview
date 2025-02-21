import {  useState } from "react";
import arrow from "../public/arrow.svg";
import { axiosInstance } from "./function/axiosInstance";
import Loader from "./constant/Loader";

function App() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showDiv, setShowDiv] = useState("hidden");
  const [question, setQuestion] = useState("");

 
  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDiv("flex");
    setCode("");
    if (!code) {
      setError(true);
      return setErrorText("please enter some text ");
    }
    setLoading(true);
    setError(false);

    try {
      const res = await axiosInstance.post<string>("/", {
        code: code,
      });
      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setErrorText(`An unexpected error occurred please try again.`);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-[#242424] w-full h-full overflow-hidden">
      <h1 className=" text-white text-2xl font-[cursive]">Sk'ask</h1>
      <div  className="bg-[#000000] text-justify h-[90.9vh] rounded-lg overflow-auto custom-scrollbar2 rounded-r text-white p-4 pl-6">
        <div
          className={`${showDiv} mb-8 bg-slate-700/50 text-white relative -right-[28%] md:-right-[43%] lg:-right-[46%] max-h-56 md:max-h-72 max-w-[60vw] md:max-w-[50vw] overflow-x-hidden p-2 px-4 rounded md:rounded-lg overflow-y-auto custom-scrollbar2 `}
        >
          <pre className="whitespace-pre-wrap">{question}</pre>
        </div>
        {error ? (
          <span className="text-red-700 text-center">{errorText}</span>
        ) : loading ? (
          <Loader />
        ) : (
          <pre className="whitespace-pre-wrap">
            {typeof response === "string"
              ? response
              : JSON.stringify(response, null, 2)}
          </pre>
        )}
      </div>
      <div className=" fixed bottom-12 w-[97%] flex justify-center items-center">
        <form onSubmit={onsubmit}>
       
         <textarea
         id="chat"
            value={code}
            onChange={(e) => (
              setCode(e.target.value),
              setQuestion(e.target.value),
              setShowDiv("hidden"),
              setResponse("")
            )}
            name="code"
            className=" w-[70vw] md:w-[70vw] lg:w-[50vw]  max-h-[40vh] text-white rounded p-4 bg-[#0a0a0a] custom-scrollbar2 resize-none"
             placeholder="Type your message..."
          ></textarea>
          <button
            type="submit"
            className=" cursor-pointer relative -left-10 bottom-2 text-white"
          >
            <img src={arrow} className="bg-white rounded-3xl" alt="submit" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
