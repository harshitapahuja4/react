// const heading = React.createElement('div', {}, React.createElement('div', {
//     id: 'div2'
// }, React.createElement('h1', {}, 'Hello From React🚀')));
// const root = ReactDOM.createRoot(document.getElementById('heading'));

// root.render(heading);


const heading = React.createElement('div', {}, React.createElement('div', {
    id: 'div2'
}, [React.createElement('h1', {id: 'heading'}, 'Hello From React🚀'), React.createElement('p', {id:'para'}, 'React is a JS library')]));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);