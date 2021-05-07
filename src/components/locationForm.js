import React, {useState} from 'react';
import '../bootstrap.min.css';
import '../components/styles.scss';

const LocationForms = () => {
    const [locName, setlocName] = React.useState("")
    const [locAdd, setlocAdd] = React.useState("")
    const [locCoord, setlocCoord] = React.useState("")
    //const [locCat, setlocCat] = React.useState("")

    const handleLocName = (e) => {
        setlocName(e.target.value)
    }
    const handleLocAdd = (e) => {
        setlocAdd(e.target.value)
    }
    const handleLocCoord = (e) => {
        setlocCoord(e.target.value)
    }
    
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-11 col-lg-10 mx-auto">
                        <div className="box box-shadow text-center">
                            <h2>
                                Locations
                            </h2>
                            &nbsp;
                            <div className="space-md" />
                            &nbsp;
                            <p className="lead">
                                Kindly enter the following information to create a new location
                            </p>
                            &nbsp;
                            <div className="space-md" />
                            &nbsp;
                            <form className="form row align-items-center align-content-center">
                                <label className="col-2 label d-none d-lg-block">
                                    Name
                                </label>
                                <input 
                                    className="col-8 col-lg-7 form-control form-control-lg"
                                    type="text"
                                    name="name"
                                    placeholder="Location Name"
                                    value={locName}
                                    onInput={handleLocName} />
                                <label className="col-2 label d-none d-lg-block">
                                    Address
                                </label>
                                <input 
                                    className="col-8 col-lg-7 form-control form-control-lg"
                                    type="text"
                                    name="address"
                                    placeholder="Location Address" 
                                    value={locAdd}
                                    onInput={handleLocAdd} />
                                <label className="col-2 label d-none d-lg-block">
                                    Co-ordinates
                                </label>
                                <input 
                                    className="col-8 col-lg-7 form-control form-control-lg"
                                    type="text"
                                    name="co-ordinates"
                                    placeholder="Location Co-ordinates" 
                                    value={locCoord} 
                                    onInput={handleLocCoord} />
                                <label className="col-2 label d-none d-lg-block">
                                    Category
                                </label>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Okponglo</a>
                                    <a class="dropdown-item active" href="#">East Legon</a>
                                    <a class="dropdown-item" href="#">Cantonments</a>
                                </div>
                                <input 
                                    className="col-4 col-lg-3 form-control form-control-lg" 
                                    type="submit"
                                    name="submit"
                                    value="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationForms;