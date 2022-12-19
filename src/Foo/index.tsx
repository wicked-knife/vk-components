import React, { type FC } from 'react';
import './index.scss';

const Foo: FC<{ title?: string }> = (props) => (
  <h4 className="red">{props.title}</h4>
);

export default Foo;
