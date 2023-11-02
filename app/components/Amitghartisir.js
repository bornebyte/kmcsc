import Image from "next/image"

const Ecaheadsir = () => {
    return (
        <div>
            <div className="flex justify-between items-center gap-6">
                <div><Image src={"/amitsir.jpg"} alt="Eca sir" height={1500} width={1500} className="rounded-lg" /></div>
                <div className="text-white">Extracurricular activities are those activities that are “External to the Curriculum”. Extra activities are indispensable for the overall development of students. Through ECA students learn to manage time, and organizational skills and instill self-confidence. </div>
            </div>
        </div>
    )
}

export default Ecaheadsir