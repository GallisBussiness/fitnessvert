

const Coach = ({image,title}) => {
  return (
    <>
    <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg h-72 w-72 object-cover object-top" src={image} alt="coach"/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
    </div>
  </div>
</div>
    </>
  )
}

export default Coach