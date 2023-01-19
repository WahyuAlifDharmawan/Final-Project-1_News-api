import React from "react";
// import fotoprofil1 from "./src/assets/fotoprofil1"

const NewsListAbout = () => {
    return (
        <>
            <div className="mx-6">
                <h1 className="text-4xl my-10 text-center font-serif">About</h1>
            </div>
            <div className="flex justify-center gap-6 lg:grid-cols-3 sm:grid-cols-2 w-30 m-4">
                <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black bg-sky-300">
                    <p className="py-4">Leader</p>
                    <img
                        src="src/assets/fotoprofil/fotoprofil1.jpg"
                        className="px-4 aspect-[1/1] rounded-2xl"
                    />
                    <h1 className="text-lg px-6 py-5">A. Muh. Fahrial S.</h1>
                    <p className="text-center px-4 ">RCTN-KS05-012</p>
                    
                    <div className="flex flex-row mt-4 px-4 py-1">
                    </div>
                </div>
                <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black bg-sky-300">
                    <p className="py-4">Anggota</p>
                    <img
                        src="src/assets/fotoprofil/fotoprofil2.jpg"
                        className="px-4 aspect-[1/1] rounded-2xl"
                    />
                    <h1 className="text-lg px-4 py-5">Ella Budi Wijayanti</h1>
                    <p className="text-center px-4 ">RCTN-KS05-005</p>
                    <div className="flex flex-row mt-4 px-4 py-1">
                    </div>
                </div>
                <div className="flex flex-col text-center py-2 px-6 rounded-md border border-black bg-sky-300">
                    <p className="py-4">Anggota</p>
                    <img
                        src="src/assets/fotoprofil/fotoprofil3.jpg"
                        className="px-4 aspect-[2/2] rounded-2xl"
                    />
                    <h1 className="text-lg px-4 py-5">Wahyu Alif Dharmawan</h1>
                    <p className="text-center px-4 ">RCTN-KS05-014</p>
                    <div className="flex flex-row mt-4 px-4 py-1">
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default NewsListAbout;