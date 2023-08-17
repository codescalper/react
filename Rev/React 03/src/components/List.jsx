import React from 'react';

const List = ({ layout, items }) => {
  let listType;

  switch (layout) {
    case 'numbered':
      listType = 'ol';
      break;
    case 'alpha':
      listType = 'ol';
      break;
    case 'bullet':
      listType = 'ul';
      break;
    default:
      listType = 'ul';
  }

  return (
    <div>
      <h1>List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {listType === 'ol' && layout === 'numbered' && `${index + 1}. `}
            {listType === 'ol' && layout === 'alpha' && `${String.fromCharCode(97 + index)}. `}
            {listType === 'ul' && '- '}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
