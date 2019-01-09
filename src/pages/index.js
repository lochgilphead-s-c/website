import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import Oswald from "typeface-oswald";
import Reactstrap from "reactstrap";
import Scrollspy from "react-scrollspy";
import Logo from "../img/logo/LSC_logo-double-small.fw.png";
import SponsorMain from "../img/sponsors/ardrishaig-community-trust-greyscale.jpg";
import SponsorMainColour from "../img/sponsors/ardrishaig-community-trust.jpg";
import Sponsor1 from "../img/sponsors/ventient-greyscale.png";
import Sponsor2 from "../img/sponsors/foundation-scotland-greyscale.png";
import Sponsor3 from "../img/sponsors/The_Coop_Logo-greyscale.png";
import Sponsor4 from "../img/sponsors/mayds-greyscale.jpg";
import Sponsor5 from "../img/sponsors/Jewson_logo-geryscale.png";
import FoundationScotland from "../img/sponsors/foundation-scotland.png";
import TheCoop from "../img/sponsors/The_Coop_Logo.png";
import Mayds from "../img/sponsors/mayds.jpg";
import Jewson from "../img/sponsors/Jewson_logo.png";
import Coerver1 from "../img/coerver/coerver-partner-club.png";
import SFA1 from "../img/coerver/quality-mark-standard-blue_1.png";
import ContentImage1 from "../img/content-image-1.jpg";
import ContentImage2 from "../img/content-image-2.jpg";
import ContentImage3 from "../img/content-image-3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/css/creative.min.css";
import "../components/css/lsc.css";

// https://github.com/mpolinowski/gatsby-reactstrap

// import Layout from '../components/Layout'
// let ticking = false;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
    this.ticking = false;
    this.state = {
      menuOpen: false
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
    // console.log(state);
    // this.setState({ menuOpen: !this.state.menuOpen });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  //  nav = React.createRef();

  handleScroll = () => {
    // lastScrollY = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const top =
          (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        // console.log(this.nav.current.classList);

        if (top > 70) {
          this.nav.current.classList.add("navbar-shrink");
        } else {
          this.nav.current.classList.remove("navbar-shrink");
        }
        this.ticking = false;
      });

      this.ticking = true;
    }
  };

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <Helmet title="Lochgilphead Soccer Centre and Lochgilphead Red Star YFC" />
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
          ref={this.nav}
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              <img
                className="lsc-logo"
                src={Logo}
                alt="Lochgilphead Soccer Centre"
              />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleClass}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={
                this.state.menuOpen
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarResponsive"
            >
              {/* <ul className="navbar-nav ml-auto"> */}
              <Scrollspy
                items={[
                  "about",
                  "register",
                  "volunteer",
                  "sponsors",
                  "calendar",
                  "contact"
                ]}
                currentClassName="lsc-is-current"
                className="navbar-nav ml-auto"
              >
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#volunteer">
                    Volunteer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#sponsors">
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#calendar">
                    Calendar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </Scrollspy>
              {/* </ul> */}
            </div>
          </div>
        </nav>

        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row ">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase lsc-drop-shadow">
                  Lochgilphead <br />
                  Soccer Centre &amp; <br />
                  Red Star YFC
                </h1>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 offset-md-2">
                <a
                  className="btn btn-primary btn-xl btn-block "
                  href="#register"
                >
                  Register Player
                </a>
              </div>
              <div className="col-md-4">
                <a
                  className="btn btn-primary btn-xl btn-block lsc-btn-volunteer"
                  href="#volunteer"
                >
                  Volunteer
                </a>
              </div>
            </div>

            {/* <hr /> */}

            <div className="row justify-content-center">
              <div className="col text-center">
                <p className="lsc-heading-lines">Sponsors</p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col text-center">
                <img
                  className="img-fluid lsc-sponsor-main lsc-sponsor-rounded lsc-sponsor-faded"
                  src={SponsorMain}
                  alt="Ardrishaig Community Trust"
                />
              </div>
            </div>

            <hr />

            <div className="row justify-content-center  align-items-center">
              <div className="col text-center">
                <img
                  className="img-fluid lsc-sponsor-small lsc-sponsor-faded"
                  src={Sponsor3}
                  alt="Nike"
                />
              </div>
              <div className="col text-center">
                <img
                  className="img-fluid lsc-sponsor-small lsc-sponsor-faded"
                  src={Sponsor2}
                  alt="Nike"
                />
              </div>
              <div className="col text-center">
                <img
                  className="img-fluid lsc-sponsor-small"
                  src={Sponsor1}
                  alt="Nike"
                />
              </div>
              <div className="col text-center">
                <img
                  className="img-fluid lsc-sponsor-small lsc-sponsor-rounded lsc-sponsor-faded lsc-sponsor-small-spaced"
                  src={Sponsor4}
                  alt="Nike"
                />
              </div>
              <div className="col text-center">
                <img
                  className="img-fluid lsc-sponsor-small lsc-sponsor-faded lsc-sponsor-small-spaced"
                  src={Sponsor5}
                  alt="Nike"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="bg-primary text-white" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto  ">
                <h2 className="section-heading  text-center">About</h2>
                <hr className="light my-4" />
                <p>
                  Established in 1995, we are a youth football club supporting
                  over 120 Mid-Argyll children to develop their football skills,
                  work as a team and build confidence. Our club runs a Soccer
                  Centre and is also home to several Lochgilphead Red Star YFC
                  teams. All teams play in{" "}
                  <span className="lsc-claret">claret</span> and{" "}
                  <span className="lsc-blue">blue</span> stripes.
                </p>
                <p>
                  The club depends entirely on volunteers to operate. Volunteers
                  are all PVG checked and our coaches are all SFA qualified. If
                  you are interested in helping, see the{" "}
                  <a className="text-white" href="#volunteer">
                    Volunteer section
                  </a>
                  .
                </p>

                <div className="text-center">
                  <img
                    className="img-fluid mx-auto lsc-content-image"
                    src={ContentImage1}
                    alt="Lochgilphead Soccer Centre"
                  />
                </div>
                <p>
                  You can find all of our{" "}
                  <a className="text-white" href="#contact">
                    policies, procedures and forms here
                  </a>
                  .
                </p>
                <h3>Soccer Centre</h3>
                <p>
                  Our Soccer Centre provides coaching for all primary school age
                  children and includes a dedicated girls section. All training
                  is held on the Astro pitch at the{" "}
                  <a
                    className="text-white"
                    href="https://goo.gl/maps/FSPcEEzgxVv"
                    target="_blank"
                  >
                    Lochgilphead Joint Campus
                  </a>
                  , except for Primary 1's during Winter who train indoors. See
                  the{" "}
                  <a className="text-white" href="#register">
                    Register
                  </a>{" "}
                  section for more detail and our{" "}
                  <a className="text-white" href="#calendar">
                    Calendar
                  </a>{" "}
                  for dates and times.
                </p>
                <h3>Lochgilphead Red Star YFC</h3>
                <p>
                  The Red Star YFC teams do extra training on different days and
                  play in leagues and festivals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="register">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="section-heading text-center">Register</h2>
                <hr className="my-4" />
                <h3>Registration form</h3>
                <p>
                  For your child to play, you need to{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe7oHY4CO3sQf27nguritK9YmNTz6BdXn_5lXsvAH6H0AZ-yw/viewform?usp=sf_link"
                    target="_blank"
                  >
                    complete the registration form
                  </a>
                  . Coaches will check attendance against registered players.
                </p>
                <h3>Price</h3>
                <p>
                  <strong>
                    All fees due must be paid before your child attends
                    training.
                  </strong>
                </p>
                {/* <h4>Annual Membership fee: £10</h4>
                <p>
                  The membership fee helps cover the costs of equipment that is
                  used by both the Soccer Centre and the YFC teams during
                  training. The fee is paid once a year at the same time as
                  payment for the first term in January.
                </p> */}
                <h4>Soccer Centre</h4>
                <p>
                  Once you've submitted the registration form and paid the
                  annual membership fee, you must pay for the six sessions per
                  term in advance.
                </p>
                <p>
                  <strong>P1:</strong> £1 per session = £6 at the start of term.
                </p>
                <p>
                  <strong>P2-7:</strong> £2 per session = £12 at the start of
                  term.
                </p>
                <h4>Payment</h4>
                <p>
                  Fees can be paid by{" "}
                  <a href="https://www.paypal.com/uk/home" target="_blank">
                    paypal
                  </a>{" "}
                  in advance of the session by using the paypal address of
                  lochgipheadsoccercentre@gmail.com, use your child's name and
                  year of birth as reference please - select send to friend or
                  family so that no fees are incurred. You can pay by bank
                  transfer: Bank account details: Clydesdale Bank, Lochgilphead
                  Sort Code 82 66 11 Account 70036974 Account Lochgilphead
                  Soccer Centre Fees can also be paid by cash or cheque on
                  Friday.
                </p>
                <div className="text-center">
                  <img
                    className="img-fluid mx-auto lsc-content-image"
                    src={ContentImage2}
                    alt="Lochgilphead Soccer Centre"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark text-white" id="volunteer">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="mb-4 text-center">Volunteer</h2>
                <hr className="my-4" />
                <p>
                  Volunteering at the Soccer Centre is hugely rewarding and we
                  know many parents are keen to help out. However, we understand
                  this can be a bit daunting. This section aims to show what is
                  involved and how easy it is to get started.
                </p>
                <div className="text-center">
                  <img
                    className="img-fluid mx-auto lsc-content-image"
                    src={ContentImage3}
                    alt="Lochgilphead Soccer Centre"
                  />
                </div>
                <h3>Roles</h3>
                <p>
                  There are many ways to help out. Most roles need no knowledge
                  of football, have limited time commitment and only require a
                  simple PVG check, which is done locally. If you want to help
                  but are unsure what would suit you, please{" "}
                  <a href="#contact">contact us</a>.
                </p>
                <p>The following roles are currently available:</p>
                <ul>
                  <li>
                    <h4>Parent assistant coach</h4>
                    <p>
                      <strong>Role: </strong>No football knowledge required!
                      Assistants are responsible for ensuring children are
                      listening and behaving. They also help coaches set up.
                      This allows our coaches to focus on providing the best
                      training they can.
                    </p>
                    <p>
                      You can attend for the whole session (3 hours) or just
                      help with one year group, even your own childs group (1
                      hour).
                    </p>
                    <p>
                      <strong>Getting started: </strong>All you need is a quick
                      and simple PVG check done locally.{" "}
                      <a href="#contact">Contact us to get started.</a>
                    </p>
                  </li>
                  <li>
                    <h4>Coach</h4>
                    <p>
                      <strong>Role: </strong>This is a hugely rewarding job. You
                      will coach across different age groups on the Soccer
                      Centre evening and you can also coach the Red Star youth
                      teams. 3 hours on a Friday evening.
                    </p>
                    <p />
                    <p>
                      <strong>Getting started: </strong>PVG check and attendance
                      on a coaching course.{" "}
                      <a href="#contact">Contact us to get started.</a>
                    </p>
                  </li>
                  <li>
                    <h4>Chair</h4>
                    <p>
                      Represent the club on official business, chair meetings
                      and coordinate general strategy.
                    </p>
                  </li>
                  <li>
                    <h4>Funding Officer</h4>
                    <p>Source and apply for club funding.</p>
                  </li>
                  <li>
                    <h4>Publicity Officer</h4>
                    <p>
                      Liaise with media outlets, like The Sqeak, to promote the
                      club.
                    </p>
                  </li>
                </ul>
                {/* <h3 id="pvgCheck">PVG Checks</h3>
                <p>
                  Start by filling in <a href="#">this form</a>. You will
                  need...
                </p> */}
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="section-heading text-center">Sponsors</h2>
                <hr className="my-4" />
                <p>
                  We are very grateful to all our sponsors that allow the club
                  to keep going!
                </p>
                <p>
                  If you are interested in sponsoring and having your logo
                  displayed on this site, please{" "}
                  <a href="#contact">contact us</a>.
                </p>
                <h3 className="text-center">Ardrishaig Community Trust</h3>
                <div className="text-center">
                  <img
                    className="img-fluid mx-auto lsc-sponsor-image"
                    src={SponsorMainColour}
                    alt="Ardrishaig Community Trust"
                  />
                </div>
                <p>
                  Our main sponsors are Ardrishaig Community Trust who are
                  providing us with £5,000 of sponsorship for 2018, 2019 and
                  2020. This allows us to invest in new strips for all Red Star
                  FC teams, enter more festivals and support out overall
                  development plan. Visit Ardrishaig Community Trust :
                  <a href="https://ardrishaig.org/">https://ardrishaig.org/</a>{" "}
                  or on Facebook at{" "}
                  <a href="https://www.facebook.com/Ardrishaig-Community-Trust-313085275506228/">
                    https://www.facebook.com/Ardrishaig-Community-Trust-313085275506228/
                  </a>
                </p>
                <div className="row lsc-sponsors-top">
                  <div className="col-sm-6 mx-auto">
                    <h3>
                      Ventient Energy ACruach Windfarm Community Fund
                      administered by Foundation Scotland
                    </h3>
                    <div>
                      <img
                        className="img-fluid mx-auto lsc-sponsor-image lsc-sponsor-image-dark"
                        src={Sponsor1}
                        alt="ACruach Windfarm Community Fund logo"
                      />
                      <img
                        className="img-fluid mx-auto lsc-sponsor-image"
                        src={FoundationScotland}
                        alt="Foundation Scotland logo"
                      />
                    </div>
                    <p>
                      Grant support of £4,900 to invest in coach education,
                      training kits and equipment
                    </p>
                  </div>
                  <div className="col-sm-6 mx-auto">
                    <h3>Coop Community Fund</h3>
                    <div>
                      <img
                        className="img-fluid mx-auto lsc-sponsor-image lsc-sponsor-image-smaller"
                        src={TheCoop}
                        alt="Coop Community Fund logo"
                      />
                    </div>
                    <p>
                      Supporting our membership of the Coerver Partner Club
                      Programme.
                    </p>
                  </div>
                  <div className="col-sm-6 mx-auto">
                    <h3>Mid Argyll Youth Development Services</h3>
                    <div>
                      <img
                        className="img-fluid mx-auto lsc-sponsor-image"
                        src={Mayds}
                        alt="Mid Argyll Youth Development Services logo"
                      />
                    </div>
                    <p>
                      Sponsors of rain jackets for all members of Lochgilphead
                      Soccer Centre and Lochgilphead Red Star YFC
                    </p>
                  </div>
                  <div className="col-sm-6 mx-auto">
                    <h3>Jewson</h3>
                    <div>
                      <img
                        className="img-fluid mx-auto lsc-sponsor-image lsc-sponsor-image-smaller"
                        src={Jewson}
                        alt="Jewson logo"
                      />
                    </div>
                    <p>
                      Sponsors of tracksuits for our 2004 Lochgilphead Red Star
                      YFC team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white" id="calendar">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="section-heading text-center">Calendar</h2>
                <hr className="my-4 light" />
                <div className="lsc-googleCalendar">
                  <iframe src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23f05f40&amp;src=lochgilpheadsoccercentre%40gmail.com&amp;color=%f05f40&amp;ctz=Europe%2FLondon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <h2>Contact</h2>
                <p>
                  Email:{" "}
                  <a href="mailto:lochgilpheadsoccercentre@gmail.com">
                    lochgilpheadsoccercentre@gmail.com
                  </a>
                </p>
                <p>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/groups/192957874159649/"
                    target="_blank"
                  >
                    https://www.facebook.com/groups/192957874159649/
                  </a>
                </p>
                <p>
                  Twitter:{" "}
                  <a href="https://twitter.com/LochgilpheadSC" target="_blank">
                    https://twitter.com/LochgilpheadSC
                  </a>
                </p>
              </div>
              <div className="col-md-4 mx-auto">
                <h2>Forms</h2>
                <ul>
                  <li>
                    <p>
                      <a href="#">PVG Check</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Membership</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mx-auto">
                <h2>Policies &amp; Procedures</h2>
                <ul>
                  <li>
                    <p>
                      <a href="#">Childrens rights policy statement</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Child protection policy statement</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">
                        Anti bullying policy statement – click here Code of
                        conduct for safeguarding
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Player code of conduct</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Volunteer code of conduct</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">Privacy notice</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mx-auto text-center">
                <div>
                  <img
                    className="img-fluid mx-auto lsc-certified-image"
                    src={Coerver1}
                    alt="Coerver logo"
                  />
                </div>
                <p>
                  We are a{" "}
                  <a href="https://www.coerverscotland.uk/" target="_blank">
                    Coerver Partner Club
                  </a>
                  .
                </p>
              </div>
              <div className="col-md-6 mx-auto text-center">
                <div>
                  <img
                    className="img-fluid mx-auto lsc-certified-image"
                    src={SFA1}
                    alt="SFA Quality Mark club logo"
                  />
                </div>
                <p>We are a SFA Quality Mark club.</p>
              </div>
            </div>
            <p className="text-center lsc-copyright">
              &copy; Lochgilphead Soccer Centre 2018
            </p>
          </div>
        </section>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
