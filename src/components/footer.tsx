import Link from "next/link";   

export default function Footer () {
    return (
    //     <ul className="flex justify-between items-center">
    //     <div className="footer-logo">
    //         <Link href={"/"}><img src="rd.jpg" alt="Logo" /></Link>
    //       </div>
    //        <div> <h1>RD Organic!Embrace Nature’s Secret to Luscious Locks</h1></div>
    //     <div className="footer-button">
    //         <Link href={"/"}><li>Home</li></Link>
    //         <Link href={"about"}> <li>About</li></Link>
    //         <Link href={"blog"}><li>Blog</li></Link>
    //         <Link href={"product"}><li>Product</li></Link>
    //         <Link href={"contact"}><li>Contact</li></Link>
    //     </div>
    // </ul>    
    <footer className="footer">
    <div className="logo"> <img src="rd.jpg" alt="logo" /></div>

    <div className="inform"><h2>Information</h2> <ul>            
        <Link href={"/"}><li>Home</li></Link><br />
        <Link href={"about"}><li>About</li></Link><br />
        <Link href={"blog"}><li>Blog</li></Link><br />
        <Link href={"product"}><li>Product</li></Link><br />
        <Link href={"Contact"}><li>Contact</li></Link><br />          
    </ul> </div>

    <div className="contact"><h3>Contacts</h3><ul><p>
    <i className="bi bi-geo-alt"></i>  1235 sample street austin texes 78704 <br /><br />
    <i className="bi bi-telephone"></i>  031224567 <br /><br />
    <i className="bi bi-envelope-fill"></i>  malikrimsha@gmail.com</p>
    </ul></div>
    
    <div className="icons"><h4>Social Media</h4><ul>
    <i className="bi bi-facebook"></i>
    <i className="bi bi-twitter"></i>
    <Link href={"www.linkedin.com/in/malik-rimsha-4319"} target="blank">
    <i className="bi bi-linkedin"></i>
    </Link>
    <i className="bi bi-whatsapp"></i>
    <Link href={"https://github.com/settings/profile"} target="blank">
    <i className="bi bi-github"></i>
    </Link>
    </ul></div>
</footer>

    )
}