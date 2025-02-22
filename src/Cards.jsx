// eslint-disable-next-line react/prop-types
function Cards({ hs, imgSrc, description }) {
      return (
            <>
                  <div className="card d-flex font-medium align-items-center p-3 rounded-md p-3 m-3 text-white h-96">
                        <img className="h-56 w-96 img-fluid mb-4 rounded-md" src={imgSrc} alt="project visual" />
                        <h2 className="text-lg mb-2">{hs}</h2>
                        <p className="text-gray-300 align-items-center">{description}</p>
                  </div>
            </>
      );
}

export default Cards;
