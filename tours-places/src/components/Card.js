import React, {useState} from 'react';
import { data } from './data';

function Card() {
    const [readMore, setReadMore] = useState(false);
    return (
        <article  className="single-tour">
            <div>
            {data.map((card) => {
                const { id, title, desc, image } = card;
                return (
                    <div>
                        <h3>{title}</h3>
                        <img  src={image} alt={title} className="tour-img"/>
                        <p>
                            {readMore ? desc : `${desc.substring(0, 100)}...`}
                            <button onClick={() => setReadMore(!readMore)}>
                                {readMore ? 'show less' : 'read more'}

                            </button>
                        </p>
                    </div>
                )
            })}
            </div>
        </article>
    )
}

export default Card
