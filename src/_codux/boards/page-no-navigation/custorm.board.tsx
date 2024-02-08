import { createBoard } from '@wixc3/react-board';
import { PageNoNavigation } from '../../board-wrappers/page-no-navigation';

export default createBoard({
    name: 'custorm',
    Board: () => null,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1047,
        canvasMargin: { top: 0 },
    },
});
