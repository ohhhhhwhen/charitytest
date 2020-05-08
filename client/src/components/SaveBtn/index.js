import React from 'react';

const SaveBtn = (props) => {
  return (
    <div className="btn btn-primary m-1" onClick={() => props.onClick({
      id: props.id,
      title: props.title,
      cause: props.cause,
      description: props.description,
      rating: props.rating,
      link: props.link
    })}>
      Save to favorites
    </div>
  );
}

export default SaveBtn;
