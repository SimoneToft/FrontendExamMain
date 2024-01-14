import React, { useState } from "react";

const Grid = () => {

    return (
        <>
            <div> 
                <div className="container gridexample">
                    <h1>Grid example</h1>
                    <br />
                    <br />
                    <h5>Columns without a specified width will automatically layout as equal width columns</h5>
                    <div className="row">
                        <div className="col" style={{ border: "1px solid" }}>
                            col
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            col
                        </div>
                        <div className="col" style={{ border: "1px solid"  }}>
                            col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{ border: "1px solid" }}>
                            One of one
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            One of two
                        </div>
                    </div>
                    <br />
                    <br />
                    <h5>Grid uses a 12 column system, and column classes indicate the number of columns you want to use out of the possible 12</h5>
                    <div className="row">
                        <div className="col-8" style={{ border: "1px solid" }}>
                            col-8
                        </div>
                        <div className="col-4" style={{ border: "1px solid" }}>
                            col-4
                        </div>
                    </div>
                    <br />
                    <br />
                    <h5>Grid has five default responsive tiers</h5>
                    <div className="row">
                        <div className="col" style={{ border: "1px solid" }}>
                            Extra small <br></br> &lt; 576px
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            Small <br></br> &ge; 576px
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            Medium <br></br> &ge; 768px
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            Large <br></br> &ge; 992px
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            Extra large <br></br> &ge; 1200px
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{ border: "1px solid" }}>
                            .col-
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            .col-sm-
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            .col-md-
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            .col-lg-
                        </div>
                        <div className="col" style={{ border: "1px solid" }}>
                            .col-xl-
                        </div>
                    </div>
                    <br />
                    <br />
                    <h5>Example of responsive grid</h5>
                    <div className="row">
                        <div className="col-lg-8 col-xl-4" style={{ border: "1px solid" }}>
                            col-lg-8 col-xl-4
                        </div>
                        <div className="col-lg-4 col-xl-8" style={{ border: "1px solid" }}>
                            col-lg-4 col-xl-8
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Grid;
