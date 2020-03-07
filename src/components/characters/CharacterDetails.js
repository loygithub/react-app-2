import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCharacterDetail } from '../../actions';

class CharacterDetails extends React.Component {
    /**
     * Fetch character details api
     */
    componentDidMount() {
        let { id } = this.props.match.params;

        this.props.fetchCharacterDetail(id);
    }

    render() {
        if (this.props.characterDetails) {
            let { name, height, mass, hair_color, skin_color, eye_color, birth_year } = this.props.characterDetails;
            return (
                <>
                    <div className="row justify-content-center no-gutters" data-aos="zoom-out">
                        <div className="col-sm-12 col-md-6 pt-2 pb-2 border-top border-bottom border-white">
                            <span style={{ color: 'white' }}>{name}</span>
                        </div>
                    </div>
                    <div className="row justify-content-center no-gutters" data-aos="zoom-out">
                        <div className="col-sm-12 col-md-6" style={{ color: 'white' }}>
                            <div className="row">
                                <div className="col pt-3 pb-3">
                                    <div className="font-weight-lighter">Height</div>
                                    <div className="font-weight-bold">{height}</div>
                                </div>
                                <div className="col pt-3 pb-3">
                                    <div className="font-weight-lighter">Mass</div>
                                    <div className="font-weight-bold">{mass}</div>
                                </div>
                                <div className="col pt-3 pb-3">
                                    <div className="font-weight-lighter">Hair color</div>
                                    <div className="font-weight-bold">{hair_color}</div>
                                </div>
                                <div className="w-100"></div>
                                <div className="col pt-3 pb-3">
                                    <div className="font-weight-lighter">Skin color</div>
                                    <div className="font-weight-bold">{skin_color}</div>
                                </div>
                                <div className="col pt-3 pb-3">
                                    <div className="font-weight-lighter">Eye color</div>
                                    <div className="font-weight-bold">{eye_color}</div>
                                </div>
                                <div className="col pt-3 pb-3">
                                    <div className="font-weight-lighter">Birth year</div>
                                    <div className="font-weight-bold">{birth_year}</div>
                                </div>
                            </div>
                            <div className="row justify-content-end mt-5">
                                <div className="col-auto">
                                    <Link to="/" type="button" className="btn btn-outline-light">Back to Characters list</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ characterDetails }) => {
    return { characterDetails }
}

export default connect(mapStateToProps, { fetchCharacterDetail })(CharacterDetails);