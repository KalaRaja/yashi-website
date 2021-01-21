import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export const createContentParagraphs = (content) => {
    return (
        content.map(c => {
            return (
                <div className='content-container' key={Math.random()}>
                    {c.title && <div className='heading'>
                        <h3>
                            {c.title}
                        </h3>
                    </div>}
                    <div className='texts'>
                        {c.texts.map(t => {
                            return (
                                <p key={Math.random()}>
                                    {t}
                                </p>
                            )
                        })}
                    </div>
                    {
                        c.links.length > 0 &&
                        <div className='links'>
                            {c.links.map(link => {
                                return (
                                    <p key={Math.random()}>
                                        <a href={link}>{link}</a>
                                    </p>
                                );
                            })}
                        </div>
                    }
                    {
                        c.images.length > 0 &&
                        <div className='images'>
                            {c.images.map(image => {
                                return (
                                    <img src={image} alt={image} className='img-fluid' key={Math.random()} />
                                )
                            })}
                        </div>
                    }
                </div>
            )
        })
    );
}

export const createCollapsableContent = (content) => {
    return content.map(c => {
        return (
            <div className='content-container' key={Math.random()} >
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h6>{c.title}</h6>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div className='texts'>
                                    {c.texts.map(text => {
                                        return (
                                            <p key={Math.random()} >
                                                {text}
                                            </p>
                                        )
                                    })}
                                </div>
                                {
                                    c.links.length > 0 &&
                                    <div className='links'>
                                        {c.links.map(link => {
                                            return (
                                                <p key={Math.random()}>
                                                    <a href={link}>{link}</a>
                                                </p>
                                            );
                                        })}
                                    </div>
                                }
                                {
                                    c.images.length > 0 &&
                                    <div className='images'>
                                        {c.images.map(image => {
                                            return (
                                                <img src={image} alt={image} className='img-fluid' key={Math.random()} />
                                            )
                                        })}
                                    </div>
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <br />
            </div>
        );
    });
}