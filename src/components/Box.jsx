export const Box = (props) => {
    return (
        <div className="flex flex-row items-center mt-8 mx-8">
            <div className="w-80 h-40 border rounded border-sky-500">
                <Img>{props.image}</Img>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>Lihat Selengkapnya</button>
            </div>
        </div>
    )
}