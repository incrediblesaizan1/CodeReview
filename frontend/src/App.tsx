  import { useState } from "react";
  import arrow from "../public/arrow.svg";
  import { axiosInstance } from "./function/axiosInstance";
  import Loader2 from "./constant/Loader";

  function App() {
    const [code, setCode] = useState("");
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [response, setResponse] = useState(String);
    const [loading, setLoading] = useState(false);

    const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!code) {
        setError(true);
        return setErrorText("please enter some text ");
      }
      setLoading(true);
      setError(false);
      const res: string = await axiosInstance.post("/", {
        code: code,
      });
      setResponse(res.data);
      setLoading(false);
    };

    return (
      <>
            <h1 className=" bg-[#242424]  absolute p-4 text-white z-40 text-2xl font-[cursive]">Sk'ask</h1>
        <div className="flex bg-[#242424] gap-4 p-4 h-full custom-scrollbar2">
          <form onSubmit={onsubmit} className="relative ">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              name="code"
              className=" custom-scrollbar2 w-[50vw] text-white rounded-r h-[95vh] p-4 pl-24 bg-[#0a0a0a] resize-none"
            ></textarea>
            <button
              type="submit"
              className=" cursor-pointer absolute bottom-4 right-4 text-white"
            >
              <img src={arrow} className="bg-white rounded-3xl" alt="submit" />
            </button>
          </form>

          <div className="bg-[#343434] w-[50vw] h-[95vh] overflow-auto custom-scrollbar2 rounded-r text-white p-4 pl-6">
            {error ? (
              <span className="text-red-700 text-center">{errorText}</span>
            ) : loading ? (
              <Loader2 />
            ) : (
              <pre className="whitespace-pre-wrap">{typeof response === "string"? response:JSON.stringify(response, null,2)}</pre>
            )}
          </div>
        </div>
      </>
    );
  }

  export default App;
