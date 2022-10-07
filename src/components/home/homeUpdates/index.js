import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

function HomeUpdates(props) {
  return (
    <div>
      <div className="home-updates">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="recent-updates">
                <div className="updates-heading pb-3">
                  <h2>Recent Updates</h2>
                  <div className="updates-heading-border"></div>
                </div>
                <div className="recent-updates">
                  <div className="rec-item">
                    <a href="#">Local Government Finance</a>
                    <p>
                      Vestibulum rutrum quam vitae fringilla tincidunt.
                      Suspendisse nec tortor urna. Ut loareet sodales
                    </p>
                    <p>
                      <strong>Published:</strong>
                      <span>Jan 2, 2020</span>
                      <button type="button" className="update-noti">
                        Updated
                      </button>
                    </p>
                  </div>
                  <div className="rec-item">
                    <a href="#">Transportation Network Carrier Maps</a>
                    <p>
                      <strong>Published:</strong>
                      <span>Jan 2, 2020</span>
                      <button type="button" className="update-noti">
                        New
                      </button>
                    </p>
                  </div>
                  <div className="rec-item">
                    <a href="#">
                      BEA Long-Range General Fund Revenue Plan for FY 2019-20 to
                      FY 2022-23
                    </a>
                    <p>
                      Vestibulum rutrum quam vitae fringilla tincidunt.
                      Suspendisse nec tortor urna. Ut loareet sodales
                    </p>
                    <p>
                      <strong>Published:</strong>
                      <span>Dec 16, 2019</span>
                      <button type="button" className="update-noti">
                        Updated
                      </button>
                    </p>
                  </div>
                  <div className="rec-item">
                    <a href="#">Budget Development</a>
                    <p>
                      <strong>Published:</strong>
                      <span>Dec 16, 2019</span>
                      <button type="button" className="update-noti">
                        New
                      </button>
                    </p>
                  </div>
                  <div className="rec-item">
                    <a href="#">November 2019 General Fund Revenue Digest</a>
                    <p>
                      <strong>Published:</strong>
                      <span>Dec 13, 2019</span>
                      <button type="button" className="update-noti">
                        New
                      </button>
                    </p>
                  </div>
                  <div className="rec-bt-box">
                    <button type="button">View More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="calendar-events">
                <div className="updates-heading">
                  <h2>Calendar of Events</h2>
                  <div className="updates-heading-border"></div>
                </div>
                <div className="calender-updates">
                  <div className="calender-itm">
                    <div className="date-box">
                      Nov <strong>22</strong>
                    </div>
                    <div className="calender-itm-text">
                      <button type="button">Updated</button>
                      <h4>Board of Economic Advisors Meeting</h4>
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        Room 417, Bowers Conference Room, Rembert Dennis
                        Building
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faClock} />
                        1:30 pm
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faMobileScreen} />
                        (803) 734-2265
                      </p>
                    </div>
                  </div>
                  <div className="calender-itm">
                    <div className="date-box">
                      Nov <strong>23</strong>
                    </div>
                    <div className="calender-itm-text">
                      <button className="cancel" type="button">
                        Cancelled
                      </button>
                      <h4>Board of Economic Advisors Meeting</h4>
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        Room 417, Bowers Conference Room, Rembert Dennis
                        Building
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faClock} />
                        1:30 pm
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faMobileScreen} />
                        (803) 734-2265
                      </p>
                    </div>
                  </div>
                  <div className="calender-itm">
                    <div className="date-box">
                      Nov <strong>25</strong>
                    </div>
                    <div className="calender-itm-text">
                      <h4>Board of Economic Advisors Meeting</h4>
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        Room 417, Bowers Conference Room, Rembert Dennis
                        Building
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faClock} />
                        1:30 pm
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faMobileScreen} />
                        (803) 734-2265
                      </p>
                    </div>
                  </div>
                  <div className="calender-itm">
                    <div className="date-box">
                      Nov <strong>28</strong>
                    </div>
                    <div className="calender-itm-text">
                      <h4>Board of Economic Advisors Meeting</h4>
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        Room 417, Bowers Conference Room, Rembert Dennis
                        Building
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faClock} />
                        1:30 pm
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faMobileScreen} />
                        (803) 734-2265
                      </p>
                    </div>
                  </div>
                </div>
                <div className="calender-btn-box">
                  <button type="button">View all events</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUpdates;
