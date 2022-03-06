import React from "react";

function Login() {
  return (
    <div className="flex justify-center h-screen items-center">
      {" "}
      <div className="bg-[#E2E8F0] p-4 rounded-lg w-full max-w-sm ">
        {/*  */}
        <div className="justify-center  space-y-2">
          {/*  */}
          <div className="flex justify-center mt-2 font-mono font-bold text-[#7180A2]">
            Sign in with
          </div>
          {/*  */}
          <div className="flex space-x-3 justify-center ">
            {/*  */}
            <div className="bg-white p-3 font-mono rounded-md shadow-lg">
              <button className="text-[#2D3748] font-bold">GITHUB</button>
            </div>
            {/*  */}
            <div className="bg-white p-3 font-mono rounded-md shadow-lg">
              <button className="text-[#2D3748] font-bold">GOOGLE</button>
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div>
          <hr className="mt-6 border-b-1 border-gray-400" />
        </div>
        {/*  */}
        <div>
          <div className="flex justify-center mt-8 mb-6 text-sm font-mono font-extrabold text-[#A0AEC0]">
            Or sign in with credentials
          </div>
        </div>
        {/*  Login */}
        <div className="space-y-2">
          <div>
            <label htmlFor="">
              <span className="w-full block font-mono font-bold">EMAIL</span>
              <input
                className="w-full block mt-2 p-[10px] rounded-md shadow-lg"
                type="text"
              />
            </label>
          </div>
          <div className="">
            <label htmlFor="">
              <span className="w-full block font-mono font-bold">PASSWORD</span>
              <input
                className="w-full block mt-2 p-[10px] rounded-md shadow-lg"
                type="password"
              />
            </label>
          </div>
          {/*  */}
          <div className="form-check">
            <input
              className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              Remember me
            </label>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="flex justify-center mt-8  ">
          <button className="bg-[#1A202C] w-full text-white font-mono font-bold p-3 rounded-lg">
            SIGN IN
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Login;
