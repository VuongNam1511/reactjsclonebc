import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/images/bookingcare-2020.svg'
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        console.log('check props: ', this.props)
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo} />
                            {/* <div className=''></div> */}
                        </div>

                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b> <FormattedMessage id="home-header.special" /></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.finddoctor" /></div>

                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.facility" /></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.select-room" /></div>

                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.select-doctor" /></div>

                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.fee" /></b></div>
                                <div className='sub-title'><FormattedMessage id="home-header.general" /></div>

                            </div>
                        </div>

                        <div className='right-content'>
                            <div className='support'><i className="fas fa-question-circle"></i><FormattedMessage id="home-header.support-lan" /> </div>
                            <div className='language-vn'>VN</div>
                            <div className='language-en'>EN</div>

                        </div>

                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className='content-top'>
                        <div className='title-1 '><FormattedMessage id="banner.title-1" /></div>
                        <div className='title-2 '><FormattedMessage id="banner.title-2" /></div>
                        <div className='search '>
                            <i class="fas fa-search"></i>
                            <input type='text' placeholder='Tìm chuyên Khoa khám bệnh'></input>
                        </div>
                    </div>

                    <div className='content-bottom'>
                        <div className='options '>
                            <div className='option-child'>
                                <div className='icon-child'><i className="far fa-hospital"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child-1" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child-2" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-notes-medical"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child-3" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-vial"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child-4" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-user-md"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child-5" /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class="fas fa-id-card-alt"></i></div>
                                <div className='text-child'><FormattedMessage id="banner.child-6" /></div>
                            </div>


                        </div>




                    </div>

                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
