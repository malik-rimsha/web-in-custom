import Link from "next/link";

export default function Header (){
    return (
        //  <div className="header">
            <ul className="flex justify-between items-center">
                <div className="header-logo">
                    <Link href={"/"}><img src="rd.jpg" alt="Logo" /></Link>
                  </div>
                   <div> <h1><b>RD </b> Organic! Embrace Nature’s Secret to Luscious Locks</h1></div>
                <div className="header-button">
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"about"}> <li>About</li></Link>
                    <Link href={"blog"}><li>Blog</li></Link>
                    <Link href={"product"}><li>Product</li></Link>
                    <Link href={"contact"}><li>Contact</li></Link>
                </div>
            </ul>    
        //  </div>
    )
}

