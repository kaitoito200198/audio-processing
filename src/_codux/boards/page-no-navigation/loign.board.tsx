import { createBoard } from '@wixc3/react-board';
import { PageNoNavigation } from '../../board-wrappers/page-no-navigation';

export default createBoard({
    name: 'Loign',
    Board: () => <PageNoNavigation />,
    isSnippet: true,
});
