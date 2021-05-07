import React, {useState} from 'react';
import '../../bootstrap.min.css';
import '../styles.scss';

const CategoriesForms = () => {
    const [catName, setCatName] = React.useState(" ")

    const handleCatName = (e) => {
        setCatName(e.target.value)
    }

    return (
        <section id="join-us" className="section CTA">
            <div className="container">
                <div className="row">
                    <div className="col-11 col-lg-10 mx-auto">
                        <div className="box box-shadow text-center">
                            <h2>
                                Categories
                            </h2>
                            &nbsp;
                            <div className="space-md" />
                            &nbsp;
                            <p className="lead">
                                Kindly enter the following information to create a new category
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
                                    placeholder="Category Name" 
                                    value={catName}
                                    onInput={handleCatName} />
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

export default CategoriesForms;