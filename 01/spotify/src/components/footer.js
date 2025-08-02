
import "../assets/styles/footer.css";
import {FaInstagram , FaFacebook , FaTwitter } from "react-icons/fa";
export default function Footer (){

	return(
		<div className="footer-container">

			<ul className="footer-menu">
				<li className="footer-header">
				 <a className="footer-header-link" >Company</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">About</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">Jobs</a>
				</li>

				<li  className="footer-items">
				<a className="footer-items-link">For the record</a>
				</li>
			</ul>

			<ul className="footer-menu">
				<li className="footer-header">
				 <a className="footer-header-link" >Communities</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">For Artists</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">Developers</a>
				</li>

				<li  className="footer-items">
				<a className="footer-items-link">Adversting</a>
				</li>

				<li  className="footer-items">
				<a className="footer-items-link">Investors</a>
				</li>

				<li  className="footer-items">
				<a className="footer-items-link">Vendors</a>
				</li>
			</ul>

			<ul className="footer-menu">
				<li className="footer-header">
				 <a className="footer-header-link" >UseFull links</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">Support</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">Free Mobile App</a>
				</li>

				<li  className="footer-items">
				<a className="footer-items-link">Popular by Country</a>
				</li>
			</ul>




			<ul className="footer-menu">
				<li className="footer-header">
				 <a className="footer-header-link" >Spotify Plans</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">Premium individual</a>
				</li>

				<li  className="footer-items">
				 <a className="footer-items-link">Premium Duo</a>
				</li>

				<li  className="footer-items">
				<a className="footer-items-link">Premium Family</a>
				</li>
		
				<li  className="footer-items">
				<a className="footer-items-link">Premium Student</a>
				</li>

				<li  className="footer-items">
				<a className="footer-items-link">Spotify Free</a>
				</li>
			</ul>


			<ul className="footer-menu-icons">
				<li className="footer-icons">
					<FaInstagram/>

				</li>

				<li  className="footer-icons">
				
					<FaTwitter/>
				</li>

				<li  className="footer-icons">
				 	<FaFacebook/>
				</li>

			</ul>
		</div>


	);
}
