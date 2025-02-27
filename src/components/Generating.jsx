import loading from '../assets/loading.png'; // Ensure this path is correct

const Generating = ({ className }) => {
    return (
        <div className={`flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]
    ${className || ""} text-base`}>
            <img
                src={loading}
                className="w-5 h-5 mr-3 animate-spin"
                alt="Loading"
            />
            <span>
                Use your drive meter to perform the <b className='animate-pulse text-yellow-300'>ULTRA</b> at the end of the combo.
            </span>
        </div>
    )
}

export default Generating;