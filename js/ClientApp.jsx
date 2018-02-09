const ce = React.createElement;

const MyTitle = function MyTitle(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Breaking Bad', color: 'YellowGreen' }),

    ce(MyTitle, { title: 'Game of Thrones', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Stranger things', color: 'Peru' }),
    ce(MyTitle, { title: 'Planet Earth 2', color: 'Lime' }),
    ce(MyTitle, { title: 'The Hunt', color: 'Green' })
  );
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
