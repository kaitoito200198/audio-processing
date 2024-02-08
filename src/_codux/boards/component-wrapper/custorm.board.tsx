import { createBoard } from '@wixc3/react-board';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';

export default createBoard({
    name: 'custorm',
    Board: () => <ComponentWrapper />,
    isSnippet: true,
});
