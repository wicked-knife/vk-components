import { Button } from 'antd';
import 'antd/es/button/style/index';
import React, { type FC } from 'react';
import './index.scss';

const Foo: FC<{ title?: string }> = (props) => (
  <>
    <h4 className="red">{props.title}</h4>
    <Button type="primary">click me</Button>
  </>
);

export default Foo;
