import React, { type FC } from 'react';
import classNames from './index.scss';

console.log('styles', classNames);

const Foo: FC<{ title: string }> = (props) => (
  <h4 className={classNames.red}>{props.title}</h4>
);

export default Foo;
