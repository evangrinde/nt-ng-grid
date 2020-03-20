import { Box } from './box';

const address = `123 Hollywood Way, Los Angeles, CA, 90210`;
const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is the industrys standard dummy text.`;

export const boxes = [
  new Box(1, address, content, '#4A99DD'),
  new Box(2, address, content, '#7D55B6'),
  new Box(3, address, content, '#DE474A'),
  new Box(4, address, content, '#6FE581'),
  new Box(5, address, content, '#DFCA51'),
  new Box(6, address, content, '#FD7D7F')
];
