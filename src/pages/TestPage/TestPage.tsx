import * as React from 'react';

function TestPage() {
  const [greet, setGreet] = React.useState('');

  React.useEffect(() => {
    setGreet('hello, world');
  }, []);

  return <div>{greet}</div>;
}

export default TestPage;
