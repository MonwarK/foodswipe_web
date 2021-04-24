import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Download from '../../components/Download'
import "./HomeScreen.css"

function HomeScreen() {

  const history = useHistory()
  const [download, setDownload] = useState(false)
  const [device, setDevice] = useState()

  return (
    <div>
      {
        download?      
        <Download phoneType={device} close={() => setDownload(false)}/>
        : null
      }
      <section id="title" className="green-background">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">            
            <a className="navbar-brand" href="/">FoodSwipe</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cta">Download</a>
                    </li>
                </ul>
            </div>
        </nav>
  
  
  
          <div className="row">
            <div data-aos="fade-in" class="titleinfo col-lg-6 col-md-12">
              <h1 className="primary-heading-format secondary-heading-format">Find healthy meals in a more interactive way.</h1>
              <button onClick={() => history.push("/login")} type="button" class="btn btn-download btn-lg btn-secondary">Start now</button>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src="https://monwark.github.io/FoodSwipe_Bootstrap/images/iphone6.png" alt="iphone-mockup" />
            </div>
          </div>        
  
          </div>
      </section>
  
      <section id="features" className="section-format white-background">
  
        <div data-aos="fade-left" className="container-fluid">
          <div className="row">
  
            <div className="col-lg-4 col-md-12">
              <i className="fas fa-check-circle"></i>
              <h3>Easy to use.</h3>
              <p>So easy to use, even your dog could do it.</p>
            </div>
  
            <div className="col-lg-4 col-md-12">
              <i className="fas fa-bullseye"></i>
              <h3>Delicious Meals</h3>
              <p>We have a great selection of delicious meals.</p>
            </div>
  
            <div className="col-lg-4 col-md-12">
              <i className="fas fa-heart"></i>
              <h3>Guaranteed to work.</h3>
              <p>99.9% of our users use our app.</p>
            </div>
  
          </div>
        </div>
      
      </section>
  
      <section id="testimonials" className="section-format green-background">
  
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2 className="secondary-heading-format">"I no longer have to do tireless searching for delicious healthy foods."</h2>
              <em>- Rufus, UK</em>
            </div>
            <div className="carousel-item">
              <h2 className="secondary-heading-format">"I just love eating healthy food now!"</h2>
              <em>- Ahmed, Yemen</em>
            </div>
            <div className="carousel-item">
              <h2 className="secondary-heading-format">"This app cured my unhealthy lifestyle."</h2>
              <em>- Abdi, Somalia</em>
            </div>
          </div>
        </div>
  
      </section>
  
      <section id="pricing" class="white-background">
  
      <div class="container-fluid">
        <h2 class="secondary-heading-format">A Plan for a Healthier Lifestyle</h2>
        <p>Simple and affordable price plans for you.</p>
        
          <div className="row">
            <div data-aos="zoom-in-right" className="col-lg-4 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3>Starter</h3>
                </div>
                <div className="card-body feature">
                  <h2 className="secondary-heading-format">Free</h2>
                  <div className="feature-list">
                    <p>Unlimited Matches</p>
                    <p>Unlimited Checks</p>
                    <p>Unlimited App Usage</p>
                  </div>
                  <button onClick={() => history.push("/register")} className="btn btn-lg btn-block btn-outline-success" type="button">Sign Up</button>
                </div>
              </div>
            </div>  
  
            <div className="col-lg-4 col-md-12">
              <div data-aos="flip-up" className="card">
                <div className="card-header">
                  <h3>Advanced</h3>
                </div>
                <div className="card-body feature">
                  <h2 className="secondary-heading-format">$2.99 / mo</h2>
                  <div className="feature-list">
                    <p>Unlimited Matches</p>
                    <p>Category Selection</p>
                    <p>Unlimited Checks</p>
                    <p>Unlimited App Usage</p>
                  </div>
                  <button disabled className="btn btn-lg btn-block btn-dark" type="button">Unavailable</button>
                </div>
              </div>  
            </div>
  
            <div className="col-lg-4 col-md-12">
              <div data-aos="zoom-in-left" className="card">
                <div className="card-header">
                  <h3>Ultimate</h3> 
                </div>
                <div className="card-body feature">
                  <h2 className="secondary-heading-format">$9.99 / mo</h2>
                  <div className="feature-list">
                    <p>Priority Listing</p>
                    <p>Early access to features</p>
                    <p>Unlimited Matches</p>
                    <p>Unlimited App Usage</p>
                  </div>
                  <button disabled className="btn btn-lg btn-block btn-dark" type="button">Unavailable</button>
                </div>
              </div>
            </div>
          </div>  
        </div>  
            
  
      </section>
  
      <section id="cta" class="section-format green-background">
  
        <h3 className="secondary-heading-format">Live your healthy life today!</h3>
        <button 
          type="button" 
          onClick={() => {
            setDevice("ios")
            setDownload(true)
          }} 
          className="btn btn-download btn-lg my-1 btn-secondary"
        ><i className="fab fa-apple"></i>Download</button>
        <button 
          type="button" 
          onClick={() => {
            setDevice("android")
            setDownload(true)
          }} 
          className="btn btn-download btn-lg my-1 btn-light"
        ><i className="fab fa-android"></i>Download</button>
  
      </section>
    </div>
  )
}

export default HomeScreen
