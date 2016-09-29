import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

const EntryView = ({ marriagePledgeHover, marriagePledgeHoverOn, marriagePledgeHoverOff }) => {
    const entryViewStyle = {
        background: 'url(https://image.winudf.com/82/67b970657730f4/screen-4.jpg)',
        height: window.innerHeight
    }
    const textStyle = {
        textAlign: 'center',
        color: 'white',
        fontSize: '4em',
    }
    let upperTextStyle = {
        ...textStyle,
        paddingTop: window.innerHeight * .3
    }
    if (window.innerWidth < 600)
        upperTextStyle.paddingTop = window.innerHeight * .1
    const lowerTextStyle = {
        textAlign: 'center',
        marginTop: 10
    }
    let linkStyle = {
        color: 'white',
        fontSize: '4em',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
    if (marriagePledgeHover) {
        linkStyle  = {
            ...linkStyle,
            color: 'gray'
        }
    }
    return (
        <div id="entry-view" style={entryViewStyle}>
            <div style={upperTextStyle}>Too old to be single? Take the</div>
            <div style={lowerTextStyle}>
                <Link onMouseOver={marriagePledgeHoverOn}
                 onMouseLeave={marriagePledgeHoverOff}
                style={linkStyle} to="/signup">Marriage Pledge</Link>
            </div>
        </div>
    )
}

const HowItWorks = () => {
    const worksStyle = {
        minHeight: window.innerHeight
    }
    const stepsStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 50,
        flexWrap: 'wrap'
    }
    const headerStyle = {
        textAlign: 'center',
        paddingTop: '5%'
    }
    const steps = [
        { 
            image: "http://www.freeiconspng.com/uploads/handshake-icon-19.png",
            text: "Choose a cause to sponsor and authorize us to make a future charge of $5000 to your credit card."
        },
        {
            image: "https://d30y9cdsu7xlg0.cloudfront.net/png/34294-200.png",
            text: "You have 1 year to get married. Send us a copy of your marriage certificate within one year, and you're off the hook!"
        },
        {
            image: "https://cdn4.iconfinder.com/data/icons/medical-blood-1/512/donation-512.png",
            text: "If you don't get married within the year, we charge your credit card and donate 90% of the money to the charity of your choice."
        }
    ]
    const stepDivs = steps.map((step, index) => (
        <Step key={index} image={step.image} text={step.text} />
    ))
    return (
        <div id="how-it-works" style={worksStyle}>
            <h1 style={headerStyle}>How it Works</h1>
            <div id="steps" style={stepsStyle}>
                {stepDivs}
            </div>
        </div>
    )
}

const Step = ({ image, text }) => {
    const stepStyle = {
        padding: 20,
        width: 300
    }
    const imgStyle = {
        width: 200,
        marginBottom: 20,
        marginLeft: 25,
        textAlign: 'center'
    }
    return (
        <div className="step" style={stepStyle}>
            <img style={imgStyle} alt="BOOP" src={image} />
            <div>{text}</div>
        </div>
    )
}

const FAQ = () => {
    return (
        <div></div>
    )
}


let Landing = ({ marriagePledgeHover, marriagePledgeHoverOn, marriagePledgeHoverOff }) => {
    
    return (
        <div id="container">
            <EntryView marriagePledgeHover={marriagePledgeHover}
            marriagePledgeHoverOn={marriagePledgeHoverOn}  
            marriagePledgeHoverOff={marriagePledgeHoverOff}  />
            <HowItWorks />
            <FAQ />
        </div>
    )
}


const mapStateToProps = (state) => ({ ...state.landing })

const mapDispatchToProps = (dispatch) => ({
    marriagePledgeHoverOn: () => dispatch({ 
        type: 'TOGGLE_HOVER_MARRIAGE_PLEDGE', 
        hover: true
    }),
    marriagePledgeHoverOff: () => dispatch({ 
        type: 'TOGGLE_HOVER_MARRIAGE_PLEDGE', 
        hover: false
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
