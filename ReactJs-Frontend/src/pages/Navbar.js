import React from 'react'
// import Logo from '../images/logo.png'
import Source from './Source'
export default function Navbar() {
    return (
        <header class="header shop">
            <div class="middle-inner">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-2 col-12">
						<div class="logo">
							<a href="index.html"><img src={Source["logo"]} alt="logo"/></a>
						</div>
                    </div>
                </div>
            </div>
            </div>
        </header>
    )
}
