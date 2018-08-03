import React from 'react'

import Loader from '../../partials/Loader/Loader'
import ActorCard from './ActorCard'
import ActorListItem from './ActorListItem'

export const CastGrid = ({ casts }) => {
    const castGrid = casts.map((actor, index) => <ActorCard actor={actor} key={index} />)

    return <div className="row">{castGrid}</div>
}

export const CastList = ({ casts }) => {
    const castList = casts.map((actor, index) => <ActorListItem actor={actor} key={index} />)

    return (
        <div className="row">
            <ul className="collection">{castList}</ul>
        </div>
    )
}

export const CastView = ({ casts, isGrid }) => {
    if (!casts) {
        return <Loader />
    }

    return isGrid ? <CastGrid casts={casts} /> : <CastList casts={casts} />
}

export default CastView
