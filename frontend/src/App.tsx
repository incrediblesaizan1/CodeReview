  import { useRef, useState } from "react";
  import arrow from "../public/arrow.svg";
  import { axiosInstance } from "./function/axiosInstance";
  import Loader2 from "./constant/Loader";

  function App() {
    const [code, setCode] = useState("");
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState("");

    const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setCode("")
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
        setLoading(false)
      } catch (error) {
        setError(true);
        setErrorText(`An unexpected error occurred please try again.`)
        console.log(error)
        setLoading(false)
      }
    };

    return (
     <div className="p-4 bg-[#242424] w-full h-full">
 <h1 className=" text-white text-2xl font-[cursive]">Sk'ask</h1>
 <div className="bg-[#343434] w- text-center min-h-[290.9vh] overflow-auto custom-scrollbar2 rounded-r text-white p-4 pl-6">
            {error ? (
              <span className="text-red-700 text-center">{errorText}</span>
            ) : loading ? (
              <Loader2 />
            ) : (
              <pre className="whitespace-pre-wrap">{typeof response === "string"? response:JSON.stringify(response, null,2)}</pre>
            )}
          </div>
          <div className=" fixed bottom-12 w-[97%] flex justify-center items-center">
          <form onSubmit={onsubmit}>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              name="code"
              className=" w-[50vw] min-h-44 text-white rounded p-4 bg-[#0a0a0a] custom-scrollbar2 resize-none"
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
