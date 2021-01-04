import React from 'react'
import './Home.scss'

const Home: React.FC = () => {
    return (
        <>
            <div className='container'>
                <div className='row m-auto p-auto'>
                    <div className='col-12'>
                        <h1 className='textHomePage'>Home page</h1>
                        <section>
                            <p>Hello, this site is designed to count the important things in everyday life. <br />
                                Here you will find all the necessary formulas and calculators.</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home