import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCharacters } from '../../actions';

class CharacterList extends React.Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }

    renderCharacterList = () => {
        if (this.props.characters.length > 0) {

            return this.props.characters.map(character => {
                return (
                    <div className="row justify-content-center" key={character.url}>
                        <div className="col-sm-12 col-md-6 p5 mb-2"><div className="characterContainer">{character.name}</div> </div>
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

    render() {
        return (
            <>
                <div className="row justify-content-center no-gutters">
                    <div className="col-sm-12 col-md-6 pt-2 pb-2 mb-4 border-top border-bottom border-white">
                        <span style={{ color: 'white' }}>STAR WARS: CHARACTERS</span>
                    </div>
                </div>
                {this.renderCharacterList()}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);