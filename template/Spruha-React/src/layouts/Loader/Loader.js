import React from "react";
import Loader1 from '../../../src/assets/img/loader.svg';
const Loader = () => <div>
     <div className="global-loader loader-img lds-dual-ring"></div>
    {/* <div id="global-loader">
        <img src={Loader1}
            className="loader-img" alt="Loader" />
    </div> */}
</div>;

Loader.propTypes = {};

Loader.defaultProps = {};
export default Loader;
