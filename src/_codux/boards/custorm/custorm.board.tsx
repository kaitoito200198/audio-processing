import { createBoard } from '@wixc3/react-board';
import { Custorm } from '../../../components/custorm/custorm';

export default createBoard({
    name: 'Custorm',
    Board: () => <Custorm />,
    isSnippet: true,
});
