import Link from "next/link"

export default function Blog (){
    return (
        <div className="homeContainer">
                  <div className="blogContainer ">
        <div className=" imageContainer"> <img src="oil.jpg" alt="oil" /></div>
        <h1 className="title"> Benefits of taramira: </h1>
        <p className="description">
        The Benefits of Taramira Oil for Hair.
        </p>
        <Link href={"blog1"}> 
        <button className="readMore"> Read More</button>
        </Link>
      </div>
      <div className="blogContainer">
        <div className=" imageContainer"> <img src="image.png" alt="seeds" /></div>
        <h1 className="title"> Purely Organic: </h1>
        <p className="description">
         Purify Organic
        </p>
        <Link href={"blog2"}>
        <button className="readMore"> Read More</button>
        </Link>
      </div>
      <div className="blogContainer">
        <div className=" imageContainer"> <img src="imageee.png" alt="growth" /></div>
        <h1 className="title"> Hair Growth : </h1>
        <p className="description">
        Hair Growth and strong
        </p>
        <Link href={"blog3"}>
        <button className="readMore"> Read More</button>
        </Link>
      </div>
    </div>
    )
}