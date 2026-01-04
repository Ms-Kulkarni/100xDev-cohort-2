"use client";

export function AuthPage({isSignin}: {
    isSignin: boolean
}) {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="p-6 m-2 bg-white rounded">
            <div className="p-2">
                <input 
                type="text"
                 placeholder="Email"
                 className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400">

                 </input>
            </div>
            <div className="p-2">
                
            </div>

            <div className="pt-2">
                <button className="bg-red-200 rounded p-2 w-full" onClick={() => {

                }}>{isSignin ? "Sign in" : "Sign up"}</button>
            </div>
        </div>
    </div>

}