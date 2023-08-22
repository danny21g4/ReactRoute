import { Link } from "react-router-dom"

export default function Contact() {
    const returData = (
        <>
            <div className="mt-4">
                <img src="https://source.unsplash.com/random/?home" alt="" className="w-full h-96" />
                <div className="mt-6 w-5/6 mx-auto">
                    <h1 className="text-xl font-bold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem saepe corporis ullam tenetur accusantium eligendi ipsam hic, corrupti quas expedita nihil excepturi ut ab aut, error esse, vitae rerum ad?</p>
                </div>
                <div className="mt-6 w-5/6 mx-auto bg-red-500 rounded-lg p-7" >
                    <h2 className="text-xl font-bold mb-3">Lorem ipsum dolor sit amet consectetur.</h2>
                    <Link to='/about'>home</Link><br />
                    <Link to='/contact'>contact</Link>
                </div>
            </div>

        </>
    )

    return returData
    
}