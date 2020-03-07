import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCharacters, resetCharacterDetails } from '../../actions';

class CharacterList extends React.Component {
    /**
     * Fetch characters from api
     * Reset characterDetails to null
     */
    componentDidMount() {
        let { characters, characterDetails } = this.props

        if (!characters) {
            this.props.fetchCharacters();
        }

        if (characterDetails) {
            this.props.resetCharacterDetails();
        }
    }

    /**
     * Helper method to extract the id from the url
     * @param { String } url - character url
     */
    getId = (url) => {
        let splitArr = url.split('/');
        return +splitArr[5];
    }

    /**
     * Helper method to render character list 
     */
    renderCharacterList = () => {
        if (this.props.characters?.length > 0) {

            return this.props.characters.map(character => {
                return (
                    <div className="row justify-content-center" key={character.url} data-aos="zoom-in">
                        <Link to={`/people/${this.getId(character.url)}`} className="col-sm-12 col-md-6 mb-2"><div className="characterContainer">{character.name}</div> </Link>
                    </div>
                )
            })
        }

        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    /**
     * Helper method to render character list header
     */
    renderCharacterListHeader = () => {
        if (this.props.characters?.length > 0) {
            return <div className="row justify-content-center no-gutters" data-aos="fade-in">
                <div className="col-sm-12 col-md-6 pt-2 pb-2 mb-4 border-top border-bottom border-white">
                    <span style={{ color: 'white' }}>STAR WARS: CHARACTERS</span>
                </div>
            </div>
        }
    }

    render() {
        return (
            <>
                {this.renderCharacterListHeader()}
                {this.renderCharacterList()}
                <br /><br /><br />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps, { fetchCharacters, resetCharacterDetails })(CharacterList);