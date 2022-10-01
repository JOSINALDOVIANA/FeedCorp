import React from "react";
import Loader1 from '../../../src/assets/img/loader.svg';
import LogoLoader from "../../../src/assets/img/brand/icon.png"
const Loader = () => <div>
    {/* <div className="global-loader">
        <div className="loader-img lds-dual-ring"></div>
    </div> */}
    <div id="global-loader">
        <img src={LogoLoader}
            className="loader-img" alt="Loader" />

        {/* <div className="lds-heart loader-img">
            <div></div>
        </div> */}
    </div>

</div>;

Loader.propTypes = {};

Loader.defaultProps = {};
export default Loader;
